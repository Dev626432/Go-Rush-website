const mongoose = require('mongoose');

const SosSchema = new mongoose.Schema({
  driverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Driver',
    required: true
  },
  rideId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ride',
    default: null
  },
  latitude: {
    type: Number,
    required: [true, 'Please provide latitude']
  },
  longitude: {
    type: Number,
    required: [true, 'Please provide longitude']
  },
  emergencyType: {
    type: String,
    enum: ['accident', 'passenger_issue', 'vehicle_issue', 'medical', 'other'],
    required: [true, 'Please provide the emergency type']
  },
  description: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: ['active', 'investigating', 'resolved'],
    default: 'active'
  },
  resolvedAt: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Sos', SosSchema);
