# React Native Runtime Monitor

A lightweight debugging tool for React Native applications that provides real-time monitoring of HTTP requests and custom events with an intuitive visual interface.

## Features

- 🔍 **Real-time HTTP Monitoring**: Automatically intercepts and displays all HTTP requests made by your app
- 📊 **Detailed Request Information**: View request method, URL, headers, body, response, and response time
- 🎯 **Custom Event Tracking**: Add custom items to track specific events in your application
- 🔍 **Search & Filter**: Filter requests by URL and type for easy debugging
- 📱 **Floating Toggle Button**: Easy-to-access floating button to show/hide the monitor
- 📋 **cURL Generation**: Automatically generates cURL commands for easy API testing
- 🎨 **Expandable Interface**: Collapsible list items to save screen space
- 📤 **Share Functionality**: Share request details for debugging and collaboration

## Installation

```bash
npm install react-native-runtime-monitor
```

## Quick Start

### Basic Usage

```jsx
import React from 'react';
import { RuntimeMonitorScreen } from 'react-native-runtime-monitor';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* Your app content */}
      
      {/* Add the monitor component */}
      <RuntimeMonitorScreen />
    </View>
  );
}
```

### Adding Custom Events


You can provide custom components for specific item types:

```jsx
import { Monitor } from 'react-native-runtime-monitor';

// Add a custom component for specific item types
Monitor.addItem({
  type: 'custom_analytics',
  Component: () => <YourCustomAnalyticsComponent foo={bar} />,
});
```


```jsx
// Track API calls manually
Monitor.addItem({
  type: 'api',
  method: 'POST',
  url: '/api/users',
  status: 201,
  request: JSON.stringify({ name: 'John Doe' }),
  response: JSON.stringify({ id: 123, name: 'John Doe' }),
  time: 150,
  date: new Date().toLocaleTimeString()
});
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Author

Created by [JABvzla](https://github.com/JABvzla)

## Repository

[GitHub Repository](https://github.com/JABvzla/react-native-runtime-monitor)