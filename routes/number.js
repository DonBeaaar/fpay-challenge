const express = require('express');
const { sequencePrimeNumbersController } = require('../controllers/number');
const { validateNumber } = require('../middleware/number');

const router = express.Router();

router.get(
  '/check/:number',
  validateNumber,
  (req, res) => sequencePrimeNumbersController
);

module.exports = router;
