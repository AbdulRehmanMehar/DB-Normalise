const http = require('http');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('up!');
});

const server = http.createServer(app);
server.listen(process.env.PORT || 3000);