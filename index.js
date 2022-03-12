require('dotenv').config();
const express = require('express');
const routes = require('./routes/index');

const app = express();

app.use(express.json());

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Listen in port ${process.env.PORT}`);
});

const server = app;
module.exports = server;
