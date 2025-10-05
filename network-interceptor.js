import itemStorage from './items-store';

const originalOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function (method, url) {
  this._method = method;
  this._url = url;
  return originalOpen.apply(this, arguments);
};

const originalSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader;
XMLHttpRequest.prototype.setRequestHeader = function (header, value) {
  if (!this._allHeaders) this._allHeaders = {};
  this._allHeaders[header] = value;
  return originalSetRequestHeader.apply(this, arguments);
};

const originalSend = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = function (body) {
  this._requestBody = body;

  this.addEventListener('load', function () {
    let responseData = this.response;

    if (responseData instanceof Blob) {
      const reader = new FileReader();
      reader.onload = () => {
        itemStorage.addItem({
          method: this._method,
          status: this.status,
          url: this._url,
          request: parseJSON(this._requestBody),
          response: parseJSON(reader.result),
          date: new Date().toLocaleTimeString(),
          time: performance.now() - this._startTime,
          curl: generateCurl(
            this._method,
            this._url,
            this._requestBody,
            this._allHeaders,
          ),
        });
      };
      reader.readAsText(responseData);
      return;
    }

    itemStorage.addItem({
      method: this._method,
      status: this.status,
      url: this._url,
      request: parseJSON(this._requestBody),
      response: parseJSON(responseData),
      date: new Date().toLocaleTimeString(),
      time: performance.now() - this._startTime,
      curl: generateCurl(
        this._method,
        this._url,
        this._requestBody,
        this._allHeaders,
      ),
    });
  });

  this._startTime = performance.now();
  return originalSend.apply(this, arguments);
};

// Parsers
const parseJSON = (data) => {
  try {
    if (typeof data === 'string') {
      const parsed = JSON.parse(data);
      return JSON.stringify(parsed, null, 2);
    }
  } catch (e) {}
  return data;
};

function generateCurl(method, url, requestBody, headers = {}) {
  let curl = `curl -X ${method.toUpperCase()}`;
  Object.entries(headers).forEach(([key, value]) => {
    curl += ` -H "${key}: ${value}"`;
  });
  if (requestBody && method.toUpperCase() !== 'GET') {
    curl += ` -d '${requestBody}'`;
  }
  curl += ` "${url}"`;
  return curl;
}
