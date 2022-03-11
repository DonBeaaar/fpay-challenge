require('dotenv').config();
const express = require('express');
const { getPrimeNumberSequence } = require('./utils/number');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('OK');
});

app.get('/check/:number', (req, res) => {
  const { number } = req.params;
  const parsedNumber = Math.trunc(Number(number.trim()));

  if (!parsedNumber || parsedNumber <= 0) {
    res.status(400).json({
      ok: false,
      message:
        'Verifica que el numero ingresado sea valido y mayor o igual a 1',
    });
  }

  return res.json({
    ok: true,
    message: 'Secuencia de numeros primos',
    sequence: getPrimeNumberSequence(parsedNumber),
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Listen in port ${process.env.PORT}`);
});

const server = app;
module.exports = server;
