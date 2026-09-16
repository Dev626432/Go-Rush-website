const express = require('express');
const router = express.Router();
const {
  uploadDocument,
  getMyDocuments,
  getDocumentById
} = require('../controllers/documentController');
const { protect } = require('../middleware/authMiddleware');

// All routes require authentication
router.use(protect);

router.route('/')
  .post(uploadDocument);

router.route('/my')
  .get(getMyDocuments);

router.route('/:id')
  .get(getDocumentById);

module.exports = router;
