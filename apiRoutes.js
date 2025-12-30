const express = require('express');
const apiAuth = require('../middleware/apiAuth');

const router = express.Router();

router.get('/secure-data', apiAuth, (req, res) => {
  res.json({ message: 'Secure API Data Accessed Successfully' });
});

module.exports = router;