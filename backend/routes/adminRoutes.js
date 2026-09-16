const express = require('express');
const router = express.Router();
const {
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
} = require('../controllers/adminController');
const { protectAdmin, authorize } = require('../middleware/adminMiddleware');

// Auth routes (Public for setup)
router.post('/login', loginAdmin);
router.post('/register', registerAdmin);

// All subsequent routes require Admin authentication
router.use(protectAdmin);

// Drivers
router.get('/drivers', authorize('admin', 'support', 'verifier'), getDrivers);
router.get('/drivers/:id', authorize('admin', 'support', 'verifier'), getDriverById);
router.put('/drivers/:id/status', authorize('admin', 'verifier'), updateDriverStatus);

// Documents
router.get('/documents', authorize('admin', 'verifier', 'support'), getDocuments);
router.put('/documents/:id/approve', authorize('admin', 'verifier'), approveDocument);
router.put('/documents/:id/reject', authorize('admin', 'verifier'), rejectDocument);

// Rides, Payments, Payouts
router.get('/rides', authorize('admin', 'support'), getRides);
router.get('/payments', authorize('admin', 'support'), getPayments);
router.get('/payouts', authorize('admin', 'support'), getPayouts);

module.exports = router;
