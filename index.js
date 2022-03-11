require('dotenv').config();
const express = require('express');
const { validateNumber } = require('./middleware/number');
const { getPrimeNumberSequence } = require('./utils/number');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('OK');
});

app.get('/check/:number', validateNumber, (req, res) => {
  const { number } = req.params;

  return res.json({
    ok: true,
    message: 'Secuencia de numeros primos',
    sequence: getPrimeNumberSequence(number),
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Listen in port ${process.env.PORT}`);
});

const server = app;
module.exports = server;
