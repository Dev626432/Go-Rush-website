const express = require('express');
const router = express.Router();
const {
  createRide,
  getMyRides,
  getRideById,
  acceptRide,
  startRide,
  completeRide,
  cancelRide
} = require('../controllers/rideController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.route('/')
  .post(createRide);

router.route('/my')
  .get(getMyRides);

router.route('/:id')
  .get(getRideById);

router.route('/:id/accept')
  .put(acceptRide);

router.route('/:id/start')
  .put(startRide);

router.route('/:id/complete')
  .put(completeRide);

router.route('/:id/cancel')
  .put(cancelRide);

module.exports = router;
