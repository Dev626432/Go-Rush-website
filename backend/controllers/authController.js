const Driver = require('../models/Driver');
const jwt = require('jsonwebtoken');

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Register new driver
// @route   POST /api/auth/register
// @access  Public
const registerDriver = async (req, res) => {
  try {
    const { fullName, phone, email, password, dateOfBirth, gender, city, vehicleType } = req.body;

    // Check if driver exists with email or phone
    const driverExists = await Driver.findOne({ $or: [{ email }, { phone }] });

    if (driverExists) {
      return res.status(400).json({
        success: false,
        message: 'Driver already exists with this email or phone'
      });
    }

    // Create driver
    const driver = await Driver.create({
      fullName,
      phone,
      email,
      password,
      dateOfBirth,
      gender,
      city,
      vehicleType
    });

    if (driver) {
      res.status(201).json({
        success: true,
        data: {
          _id: driver._id,
          fullName: driver.fullName,
          email: driver.email,
          phone: driver.phone,
          token: generateToken(driver._id)
        }
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Invalid driver data'
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Server Error'
    });
  }
};

// @desc    Authenticate a driver
// @route   POST /api/auth/login
// @access  Public
const loginDriver = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check for user email
    const driver = await Driver.findOne({ email }).select('+password');

    if (!driver) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Check if password matches
    const isMatch = await driver.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    res.json({
      success: true,
      data: {
        _id: driver._id,
        fullName: driver.fullName,
        email: driver.email,
        phone: driver.phone,
        token: generateToken(driver._id)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Server Error'
    });
  }
};

// @desc    Get driver profile
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: req.user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Server Error'
    });
  }
};

// @desc    Logout user / clear token
// @route   POST /api/auth/logout
// @access  Private
const logoutDriver = async (req, res) => {
  // In JWT, logout is usually handled client-side by deleting the token.
  // We can just return a success message here.
  res.status(200).json({
    success: true,
    message: 'Logged out successfully'
  });
};

module.exports = {
  registerDriver,
  loginDriver,
  getMe,
  logoutDriver
};
