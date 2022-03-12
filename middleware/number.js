const validateNumber = (req, res, next) => {
  const { number } = req.params;
  const parsedNumber = Number(number.trim());

  if (!Number.isInteger(parsedNumber) || parsedNumber <= 1) {
    return res.status(400).json({
      ok: false,
      message:
        'Verifica que el numero ingresado sea un entero valido y mayor o igual a 2',
    });
  }
  return next();
};

module.exports = {
  validateNumber,
};
