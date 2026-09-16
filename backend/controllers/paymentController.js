const Payment = require('../models/Payment');
const Payout = require('../models/Payout');

// @desc    Get all payments associated with logged-in driver
// @route   GET /api/payments/my
// @access  Private
const getMyPayments = async (req, res) => {
  try {
    const payments = await Payment.find({ driverId: req.user._id }).sort('-createdAt');

    res.status(200).json({
      success: true,
      count: payments.length,
      data: payments
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Server Error'
    });
  }
};

// @desc    Get all payout requests associated with logged-in driver
// @route   GET /api/payouts/my
// @access  Private
const getMyPayouts = async (req, res) => {
  try {
    const payouts = await Payout.find({ driverId: req.user._id }).sort('-createdAt');

    res.status(200).json({
      success: true,
      count: payouts.length,
      data: payouts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Server Error'
    });
  }
};

// @desc    Request a new payout
// @route   POST /api/payouts/request
// @access  Private
const requestPayout = async (req, res) => {
  try {
    const { amount, payoutMethod, accountDetailsReference } = req.body;

    if (!amount || !payoutMethod || !accountDetailsReference) {
      return res.status(400).json({
        success: false,
        message: 'Please provide amount, payoutMethod, and accountDetailsReference'
      });
    }

    // In a real app, you would verify the driver's available balance here by summing up
    // completed payments (driverAmount) and subtracting completed payouts.
    // For now, we just create the mock request.

    const payout = await Payout.create({
      driverId: req.user._id,
      amount,
      payoutMethod,
      accountDetailsReference,
      status: 'requested',
      requestedAt: Date.now()
    });

    res.status(201).json({
      success: true,
      data: payout
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Server Error'
    });
  }
};

module.exports = {
  getMyPayments,
  getMyPayouts,
  requestPayout
};
