const express = require('express');
const app = express();
const config = require('config');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

// app.use(express.static('public'));

app.use(bodyParser.json());
app.use(cookieParser());

require('./servers')(app);

app.listen(config.server.port, config.server.internalIP, () => {
  console.log(`Listening on port ${config.server.port} on internal IP: ${config.server.internalIP}.`);
});