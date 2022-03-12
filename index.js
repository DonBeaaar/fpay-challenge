require('dotenv').config();
const express = require('express');
const indexRoutes = require('./routes/index');
const numberRoutes = require('./routes/number');

const app = express();

app.use(express.json());

app.use(numberRoutes);
app.use(indexRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listen in port ${process.env.PORT}`);
});

const server = app;
module.exports = server;
