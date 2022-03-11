const sequencePrimeNumbersController = (req, res) => {
  const { number } = req.params;

  return res.json({
    ok: true,
    message: 'Secuencia de numeros primos',
    sequence: getPrimeNumberSequence(number),
  });
};

module.exports = {
  sequencePrimeNumbersController,
};
