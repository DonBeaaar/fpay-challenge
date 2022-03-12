const express = require('express');
const { sequencePrimeNumbersController } = require('../controllers/number');
const { validateNumber } = require('../middleware/number');

const router = express.Router();

router.get('/api/:number', validateNumber, (req, res) => sequencePrimeNumbersController(req, res));

module.exports = router;
