const Ride = require('../models/Ride');

// @desc    Create a new ride request (usually done by Passenger, but mocking it here)
// @route   POST /api/rides
// @access  Private (Authenticated Driver - for testing purposes)
const createRide = async (req, res) => {
  try {
    const {
      passengerName, passengerPhone, pickupLocation, pickupCoordinates,
      dropLocation, dropCoordinates, estimatedFare, distance, duration
    } = req.body;

    const ride = await Ride.create({
      // We don't attach driverId initially because it's a new request waiting to be accepted
      passengerName,
      passengerPhone,
      pickupLocation,
      pickupCoordinates,
      dropLocation,
      dropCoordinates,
      estimatedFare,
      distance,
      duration
    });

    res.status(201).json({
      success: true,
      data: ride
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Server Error'
    });
  }
};

// @desc    Get all rides associated with logged-in driver
// @route   GET /api/rides/my
// @access  Private
const getMyRides = async (req, res) => {
  try {
    const rides = await Ride.find({ driverId: req.user._id }).sort('-createdAt');

    res.status(200).json({
      success: true,
      count: rides.length,
      data: rides
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Server Error'
    });
  }
};

// @desc    Get single ride by ID
// @route   GET /api/rides/:id
// @access  Private
const getRideById = async (req, res) => {
  try {
    const ride = await Ride.findById(req.params.id);

    if (!ride) {
      return res.status(404).json({ success: false, message: 'Ride not found' });
    }

    res.status(200).json({
      success: true,
      data: ride
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Server Error'
    });
  }
};

// @desc    Accept a ride request
// @route   PUT /api/rides/:id/accept
// @access  Private
const acceptRide = async (req, res) => {
  try {
    let ride = await Ride.findById(req.params.id);

    if (!ride) {
      return res.status(404).json({ success: false, message: 'Ride not found' });
    }

    if (ride.status !== 'requested') {
      return res.status(400).json({ success: false, message: 'Ride is no longer available' });
    }

    ride.driverId = req.user._id;
    ride.status = 'accepted';
    ride.acceptedAt = Date.now();

    await ride.save();

    res.status(200).json({
      success: true,
      data: ride
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Server Error'
    });
  }
};

// @desc    Start the ride (after picking up passenger)
// @route   PUT /api/rides/:id/start
// @access  Private
const startRide = async (req, res) => {
  try {
    let ride = await Ride.findById(req.params.id);

    if (!ride) {
      return res.status(404).json({ success: false, message: 'Ride not found' });
    }

    if (ride.driverId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'Not authorized for this ride' });
    }

    if (ride.status !== 'accepted' && ride.status !== 'arriving') {
      return res.status(400).json({ success: false, message: 'Invalid ride status transition' });
    }

    ride.status = 'started';
    ride.startedAt = Date.now();

    await ride.save();

    res.status(200).json({
      success: true,
      data: ride
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Server Error'
    });
  }
};

// @desc    Complete the ride
// @route   PUT /api/rides/:id/complete
// @access  Private
const completeRide = async (req, res) => {
  try {
    let ride = await Ride.findById(req.params.id);

    if (!ride) {
      return res.status(404).json({ success: false, message: 'Ride not found' });
    }

    if (ride.driverId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'Not authorized for this ride' });
    }

    if (ride.status !== 'started') {
      return res.status(400).json({ success: false, message: 'Only started rides can be completed' });
    }

    // Usually finalFare is calculated dynamically or passed from driver app
    const finalFare = req.body.finalFare || ride.estimatedFare;

    ride.status = 'completed';
    ride.finalFare = finalFare;
    ride.completedAt = Date.now();

    await ride.save();

    res.status(200).json({
      success: true,
      data: ride
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Server Error'
    });
  }
};

// @desc    Cancel the ride
// @route   PUT /api/rides/:id/cancel
// @access  Private
const cancelRide = async (req, res) => {
  try {
    let ride = await Ride.findById(req.params.id);

    if (!ride) {
      return res.status(404).json({ success: false, message: 'Ride not found' });
    }

    // A driver can cancel a ride they've accepted, or a passenger can cancel a requested ride
    // Here we assume the driver is cancelling
    if (ride.driverId && ride.driverId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'Not authorized for this ride' });
    }

    if (ride.status === 'completed' || ride.status === 'cancelled') {
      return res.status(400).json({ success: false, message: 'Ride is already completed or cancelled' });
    }

    ride.status = 'cancelled';
    ride.cancelledAt = Date.now();

    await ride.save();

    res.status(200).json({
      success: true,
      data: ride
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Server Error'
    });
  }
};

module.exports = {
  createRide,
  getMyRides,
  getRideById,
  acceptRide,
  startRide,
  completeRide,
  cancelRide
};
