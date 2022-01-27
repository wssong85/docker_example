const express = require('express');
// const {request, response} = require("express");

const PORT = 8080;
// const HOST = '127.0.0.1';

// APP
const app = express();
app.get('/', (request, response) => {
  response.send('Hello World~!');
});

app.listen(PORT);

console.log('Server is running')