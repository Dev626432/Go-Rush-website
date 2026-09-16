const mongoose = require('mongoose');

const PayoutSchema = new mongoose.Schema({
  driverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Driver',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  payoutMethod: {
    type: String,
    enum: ['Bank Transfer', 'UPI'],
    required: true
  },
  accountDetailsReference: {
    type: String,
    required: true
    // Do NOT store plain PINs or Passwords. Store an ID pointing to a secure vault or just the UPI ID / Masked Account Number
  },
  transactionId: {
    type: String,
    // Bank reference number when processed
  },
  status: {
    type: String,
    enum: ['requested', 'processing', 'completed', 'failed'],
    default: 'requested'
  },
  requestedAt: {
    type: Date,
    default: Date.now
  },
  processedAt: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Payout', PayoutSchema);
