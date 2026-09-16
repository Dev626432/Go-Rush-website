const express = require('express');
const router = express.Router();
const { calculate } = require('../controllers/earningsController');

router.post('/calculate', calculate);

module.exports = router;
