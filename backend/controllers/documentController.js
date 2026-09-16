const DriverDocument = require('../models/DriverDocument');

// @desc    Upload a new document (URL from frontend storage provider)
// @route   POST /api/documents
// @access  Private (Authenticated Driver)
const uploadDocument = async (req, res) => {
  try {
    const { documentType, documentNumber, documentUrl } = req.body;

    if (!documentType || !documentNumber || !documentUrl) {
      return res.status(400).json({
        success: false,
        message: 'Please provide documentType, documentNumber, and documentUrl'
      });
    }

    // Check if the user already uploaded a document of this type
    const existingDoc = await DriverDocument.findOne({ 
      driverId: req.user._id, 
      documentType 
    });

    if (existingDoc) {
      // If it exists but is rejected, we allow updating it
      if (existingDoc.status === 'rejected') {
        existingDoc.documentNumber = documentNumber;
        existingDoc.documentUrl = documentUrl;
        existingDoc.status = 'pending';
        existingDoc.rejectionReason = null;
        existingDoc.uploadedAt = Date.now();
        await existingDoc.save();
        
        return res.status(200).json({
          success: true,
          data: existingDoc
        });
      }
      
      return res.status(400).json({
        success: false,
        message: `You already have a ${documentType} document that is ${existingDoc.status}.`
      });
    }

    const document = await DriverDocument.create({
      driverId: req.user._id,
      documentType,
      documentNumber,
      documentUrl
    });

    res.status(201).json({
      success: true,
      data: document
    });
  } catch (error) {
    if (error.code === 11000) {
        return res.status(400).json({
            success: false,
            message: 'Duplicate document entry found'
        });
    }
    res.status(500).json({
      success: false,
      message: error.message || 'Server Error'
    });
  }
};

// @desc    Get all documents for the logged-in driver
// @route   GET /api/documents/my
// @access  Private (Authenticated Driver)
const getMyDocuments = async (req, res) => {
  try {
    const documents = await DriverDocument.find({ driverId: req.user._id });

    res.status(200).json({
      success: true,
      count: documents.length,
      data: documents
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Server Error'
    });
  }
};

// @desc    Get a specific document by ID (ensuring it belongs to the driver)
// @route   GET /api/documents/:id
// @access  Private (Authenticated Driver)
const getDocumentById = async (req, res) => {
  try {
    const document = await DriverDocument.findById(req.params.id);

    if (!document) {
      return res.status(404).json({
        success: false,
        message: 'Document not found'
      });
    }

    // Ensure the document belongs to the requesting driver
    if (document.driverId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to access this document'
      });
    }

    res.status(200).json({
      success: true,
      data: document
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Server Error'
    });
  }
};

module.exports = {
  uploadDocument,
  getMyDocuments,
  getDocumentById
};
