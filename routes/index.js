const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('OK');
});

router.all('*', (req, res) => {
  res.status(404).json({
    ok: false,
    message: 'Not found specified path',
  });
});

module.exports = router;
