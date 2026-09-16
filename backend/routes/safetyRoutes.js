const express = require('express');
const router = express.Router();
const {
  triggerSos,
  getMySosAlerts
} = require('../controllers/safetyController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.post('/sos', triggerSos);
router.get('/sos/my', getMySosAlerts);

module.exports = router;
