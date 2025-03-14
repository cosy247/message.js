# message.js

Web-based global notification.

![](vue-message.png)

## Installation

```bash
npm install message.js
```

```bash
yarn add message.js
```

## Usage

```js
// Import
import message from 'message';

// Call
message.info('Display an informational message.');
message.success('Display a success message.');
message.warning('Display a warning message.');
message.error('Display an error message.');
```

## Custom message type

```js
import { defineMessage } from 'message';

defineMessage('log');
message.log('Display a log message.');
```

Add style:

```css
.cosy-log {
  color: #2446df;
  background: #fef0f0;
  border-color: #1d39b8;
}
```
