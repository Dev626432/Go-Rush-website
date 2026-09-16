const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  driverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Driver',
    required: true
  },
  documentType: {
    type: String,
    enum: ['Aadhaar', 'PAN', 'Driving License', 'Vehicle RC', 'Vehicle Insurance', 'Permit'],
    required: [true, 'Please select a document type']
  },
  documentNumber: {
    type: String,
    required: [true, 'Please provide the document number']
  },
  documentUrl: {
    type: String,
    required: [true, 'Please provide the document URL']
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  rejectionReason: {
    type: String,
    default: null
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  },
  verifiedAt: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});

// Prevent duplicate active documents of the same type for the same driver
DocumentSchema.index({ driverId: 1, documentType: 1 }, { unique: true });

module.exports = mongoose.model('DriverDocument', DocumentSchema);
