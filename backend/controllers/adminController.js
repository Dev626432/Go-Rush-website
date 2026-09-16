const Admin = require('../models/Admin');
const Driver = require('../models/Driver');
const DriverDocument = require('../models/DriverDocument');
const Ride = require('../models/Ride');
const Payment = require('../models/Payment');
const Payout = require('../models/Payout');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// @desc    Auth admin & get token
// @route   POST /api/admin/login
// @access  Public
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email }).select('+password');

    if (admin && (await admin.matchPassword(password))) {
      if (!admin.isActive) {
        return res.status(401).json({ success: false, message: 'Account deactivated' });
      }
      res.json({
        success: true,
        data: {
          _id: admin._id,
          name: admin.name,
          email: admin.email,
          role: admin.role,
          token: generateToken(admin._id)
        }
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Register a new admin (Super Admin only in real app, keeping open for testing)
// @route   POST /api/admin/register
// @access  Public (for dev purposes)
const registerAdmin = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const adminExists = await Admin.findOne({ email });

    if (adminExists) {
      return res.status(400).json({ success: false, message: 'Admin already exists' });
    }

    const admin = await Admin.create({ name, email, password, role });
    res.status(201).json({
      success: true,
      data: { _id: admin._id, name: admin.name, email: admin.email, role: admin.role, token: generateToken(admin._id) }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all drivers (with pagination and search)
// @route   GET /api/admin/drivers
// @access  Private/Admin
const getDrivers = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const startIndex = (page - 1) * limit;

    let query = {};
    if (req.query.search) {
      query = {
        $or: [
          { fullName: { $regex: req.query.search, $options: 'i' } },
          { phone: { $regex: req.query.search, $options: 'i' } },
          { email: { $regex: req.query.search, $options: 'i' } }
        ]
      };
    }

    const total = await Driver.countDocuments(query);
    const drivers = await Driver.find(query).skip(startIndex).limit(limit).sort('-createdAt');

    res.status(200).json({
      success: true,
      count: drivers.length,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit)
      },
      data: drivers
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single driver
// @route   GET /api/admin/drivers/:id
// @access  Private/Admin
const getDriverById = async (req, res) => {
  try {
    const driver = await Driver.findById(req.params.id);
    if (!driver) return res.status(404).json({ success: false, message: 'Driver not found' });
    res.status(200).json({ success: true, data: driver });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update driver status (isVerified, isActive)
// @route   PUT /api/admin/drivers/:id/status
// @access  Private/Admin, Verifier
const updateDriverStatus = async (req, res) => {
  try {
    const { isVerified, isActive } = req.body;
    let driver = await Driver.findById(req.params.id);
    
    if (!driver) return res.status(404).json({ success: false, message: 'Driver not found' });
    
    if (isVerified !== undefined) driver.isVerified = isVerified;
    if (isActive !== undefined) driver.isActive = isActive;
    
    await driver.save();
    res.status(200).json({ success: true, data: driver });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all documents
// @route   GET /api/admin/documents
// @access  Private/Admin, Verifier
const getDocuments = async (req, res) => {
  try {
    const query = req.query.status ? { status: req.query.status } : {};
    const documents = await DriverDocument.find(query).populate('driverId', 'fullName phone email').sort('-createdAt');
    res.status(200).json({ success: true, count: documents.length, data: documents });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Approve document
// @route   PUT /api/admin/documents/:id/approve
// @access  Private/Admin, Verifier
const approveDocument = async (req, res) => {
  try {
    let document = await DriverDocument.findById(req.params.id);
    if (!document) return res.status(404).json({ success: false, message: 'Document not found' });
    
    document.status = 'approved';
    document.rejectionReason = null;
    document.verifiedAt = Date.now();
    await document.save();
    
    res.status(200).json({ success: true, data: document });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Reject document
// @route   PUT /api/admin/documents/:id/reject
// @access  Private/Admin, Verifier
const rejectDocument = async (req, res) => {
  try {
    const { rejectionReason } = req.body;
    if (!rejectionReason) return res.status(400).json({ success: false, message: 'Please provide rejection reason' });

    let document = await DriverDocument.findById(req.params.id);
    if (!document) return res.status(404).json({ success: false, message: 'Document not found' });
    
    document.status = 'rejected';
    document.rejectionReason = rejectionReason;
    document.verifiedAt = Date.now();
    await document.save();
    
    res.status(200).json({ success: true, data: document });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all rides
// @route   GET /api/admin/rides
// @access  Private/Admin, Support
const getRides = async (req, res) => {
  try {
    const query = req.query.status ? { status: req.query.status } : {};
    const rides = await Ride.find(query).populate('driverId', 'fullName phone').sort('-createdAt');
    res.status(200).json({ success: true, count: rides.length, data: rides });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all payments
// @route   GET /api/admin/payments
// @access  Private/Admin, Support
const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate('driverId', 'fullName phone').sort('-createdAt');
    res.status(200).json({ success: true, count: payments.length, data: payments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all payouts
// @route   GET /api/admin/payouts
// @access  Private/Admin, Support
const getPayouts = async (req, res) => {
  try {
    const query = req.query.status ? { status: req.query.status } : {};
    const payouts = await Payout.find(query).populate('driverId', 'fullName phone accountDetailsReference').sort('-createdAt');
    res.status(200).json({ success: true, count: payouts.length, data: payouts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  loginAdmin,
  registerAdmin,
  getDrivers,
  getDriverById,
  updateDriverStatus,
  getDocuments,
  approveDocument,
  rejectDocument,
  getRides,
  getPayments,
  getPayouts
};
