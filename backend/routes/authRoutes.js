const express = require('express');
const router = express.Router();
const {
  registerDriver,
  loginDriver,
  getMe,
  logoutDriver
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', registerDriver);
router.post('/login', loginDriver);
router.post('/logout', protect, logoutDriver);
router.get('/me', protect, getMe);

module.exports = router;
