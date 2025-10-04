import itemStorage from './items-store';
const originalOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function (method, url) {
  this._method = method;
  this._url = url;
  return originalOpen.apply(this, arguments);
};

const parseJSON = (data) => {
  try {
    if (typeof data === 'string') {
      const parsed = JSON.parse(data);
      return JSON.stringify(parsed, null, 2);
    }
  } catch (e) {}

  return data;
};

const originalSend = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = function (body) {
  this._requestBody = body;

  this.addEventListener('load', function () {
    let responseData = this.response;

    // Parse Blob to string
    if (responseData instanceof Blob) {
      const reader = new FileReader();
      reader.onload = () => {
        itemStorage.addItem({
          method: this._method,
          status: this.status,
          url: this._url,
          request: parseJSON(this._requestBody),
          response: parseJSON(reader.result),
          time: performance.now() - this._startTime,
          date: new Date().toLocaleTimeString(),
        });
      };
      reader.readAsText(responseData);
      return;
    }

    itemStorage.addItem({
      method: this._method,
      status: this.status,
      url: this._url,
      request: this._requestBody,
      response: parseJSON(responseData),
      time: performance.now() - this._startTime,
      date: new Date().toLocaleTimeString(),
    });
  });

  this._startTime = performance.now();
  return originalSend.apply(this, arguments);
};
