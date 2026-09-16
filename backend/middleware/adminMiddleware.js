const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

// Protect admin routes
const protectAdmin = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Verify token specifically belongs to an Admin and not a Driver
      // (If a driver uses their token here, Admin.findById will return null)
      req.admin = await Admin.findById(decoded.id).select('-password');

      if (!req.admin) {
        return res.status(401).json({ success: false, message: 'Not authorized as an admin' });
      }
      
      if (!req.admin.isActive) {
         return res.status(401).json({ success: false, message: 'Admin account is deactivated' });
      }

      next();
    } catch (error) {
      res.status(401).json({
        success: false,
        message: 'Not authorized, token failed'
      });
    }
  }

  if (!token) {
    res.status(401).json({
      success: false,
      message: 'Not authorized, no token'
    });
  }
};

// Grant access to specific roles
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.admin.role)) {
      return res.status(403).json({
        success: false,
        message: `User role ${req.admin.role} is not authorized to access this route`
      });
    }
    next();
  };
};

module.exports = { protectAdmin, authorize };
