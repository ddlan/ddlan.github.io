import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

var http = require("http");
setInterval(function() {
    http.get("http://www.dannylan.me");
}, 300000); // every 5 minutes (300000)
