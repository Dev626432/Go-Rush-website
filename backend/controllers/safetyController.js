const Sos = require('../models/Sos');

// @desc    Trigger an SOS emergency alert
// @route   POST /api/safety/sos
// @access  Private (Authenticated Driver)
const triggerSos = async (req, res) => {
  try {
    const { rideId, latitude, longitude, emergencyType, description } = req.body;

    if (!latitude || !longitude || !emergencyType) {
      return res.status(400).json({
        success: false,
        message: 'Please provide latitude, longitude, and emergencyType'
      });
    }

    const sosAlert = await Sos.create({
      driverId: req.user._id,
      rideId: rideId || null,
      latitude,
      longitude,
      emergencyType,
      description,
      status: 'active'
    });

    // In a real application, you would trigger push notifications, SMS, or WebSockets 
    // to an admin dashboard or emergency services here.

    res.status(201).json({
      success: true,
      message: 'SOS Alert triggered successfully. Our team has been notified.',
      data: sosAlert
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Server Error'
    });
  }
};

// @desc    Get all SOS alerts triggered by the logged-in driver
// @route   GET /api/safety/sos/my
// @access  Private (Authenticated Driver)
const getMySosAlerts = async (req, res) => {
  try {
    const sosAlerts = await Sos.find({ driverId: req.user._id }).sort('-createdAt');

    res.status(200).json({
      success: true,
      count: sosAlerts.length,
      data: sosAlerts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Server Error'
    });
  }
};

module.exports = {
  triggerSos,
  getMySosAlerts
};
