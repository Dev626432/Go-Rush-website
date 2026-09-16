const Vehicle = require('../models/Vehicle');

// @desc    Register a new vehicle
// @route   POST /api/vehicles
// @access  Private (Authenticated Driver)
const addVehicle = async (req, res) => {
  try {
    const { 
      vehicleType, vehicleNumber, brand, model, 
      year, color, fuelType, registrationNumber, insuranceExpiry 
    } = req.body;

    // Check if vehicle number already exists in the system
    const existingVehicle = await Vehicle.findOne({ vehicleNumber });
    if (existingVehicle) {
      return res.status(400).json({
        success: false,
        message: 'A vehicle with this license plate already exists'
      });
    }

    const vehicle = await Vehicle.create({
      driverId: req.user._id,
      vehicleType,
      vehicleNumber,
      brand,
      model,
      year,
      color,
      fuelType,
      registrationNumber,
      insuranceExpiry
    });

    res.status(201).json({
      success: true,
      data: vehicle
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }
    res.status(500).json({
      success: false,
      message: error.message || 'Server Error'
    });
  }
};

// @desc    Get all vehicles for the logged-in driver
// @route   GET /api/vehicles/my
// @access  Private (Authenticated Driver)
const getMyVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find({ driverId: req.user._id });

    res.status(200).json({
      success: true,
      count: vehicles.length,
      data: vehicles
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Server Error'
    });
  }
};

// @desc    Update a vehicle by ID
// @route   PUT /api/vehicles/:id
// @access  Private (Authenticated Driver)
const updateVehicle = async (req, res) => {
  try {
    let vehicle = await Vehicle.findById(req.params.id);

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        message: 'Vehicle not found'
      });
    }

    // Make sure the logged-in driver owns this vehicle
    if (vehicle.driverId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this vehicle'
      });
    }

    vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: vehicle
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Server Error'
    });
  }
};

// @desc    Delete a vehicle by ID
// @route   DELETE /api/vehicles/:id
// @access  Private (Authenticated Driver)
const deleteVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        message: 'Vehicle not found'
      });
    }

    // Make sure the logged-in driver owns this vehicle
    if (vehicle.driverId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this vehicle'
      });
    }

    await vehicle.deleteOne();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Server Error'
    });
  }
};

module.exports = {
  addVehicle,
  getMyVehicles,
  updateVehicle,
  deleteVehicle
};
