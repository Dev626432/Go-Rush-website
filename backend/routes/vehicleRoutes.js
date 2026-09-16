const express = require('express');
const router = express.Router();
const {
  addVehicle,
  getMyVehicles,
  updateVehicle,
  deleteVehicle
} = require('../controllers/vehicleController');
const { protect } = require('../middleware/authMiddleware');

// All vehicle routes require authentication
router.use(protect);

router.route('/')
  .post(addVehicle);

router.route('/my')
  .get(getMyVehicles);

router.route('/:id')
  .put(updateVehicle)
  .delete(deleteVehicle);

module.exports = router;
