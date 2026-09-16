const express = require('express');
const router = express.Router();
const {
  getMyPayments,
  getMyPayouts,
  requestPayout
} = require('../controllers/paymentController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

// Payment routes
router.get('/payments/my', getMyPayments);

// Payout routes
router.get('/payouts/my', getMyPayouts);
router.post('/payouts/request', requestPayout);

module.exports = router;
