require('dotenv').config();
const express = require('express');
const indexRoutes = require('./routes/index');
const numberRoutes = require('./routes/number');

const app = express();

app.use(express.json());
app.use(indexRoutes);
app.use(numberRoutes);

app.all('*', (req, res) => {
  return res.status(404).json({
    ok: false,
    message: 'Not found specified path',
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Listen in port ${process.env.PORT}`);
});

const server = app;
module.exports = server;
