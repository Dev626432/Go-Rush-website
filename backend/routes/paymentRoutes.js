const express = require('express');
const router = express.Router();
const {
  getMyPayments,
  getMyPayouts,
  requestPayout
} = require('../controllers/paymentController');
const { protect } = require('../middleware/authMiddleware');

// Payment routes
router.get('/payments/my', protect, getMyPayments);

// Payout routes
router.get('/payouts/my', protect, getMyPayouts);
router.post('/payouts/request', protect, requestPayout);

module.exports = router;
