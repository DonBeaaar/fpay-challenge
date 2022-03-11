const validateNumber = (req, res, next) => {
  const { number } = req.params;
  // no truncar
  const parsedNumber = Math.trunc(Number(number.trim()));

  if (!parsedNumber || parsedNumber <= 1) {
    res.status(400).json({
      ok: false,
      message:
        'Verifica que el numero ingresado sea valido y mayor o igual a 2',
    });
  }
  next();
};

module.exports = {
  validateNumber,
};
