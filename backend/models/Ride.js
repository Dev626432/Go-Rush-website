const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
  driverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Driver',
    required: false // A ride can be created without a driver initially, then accepted
  },
  passengerName: {
    type: String,
    required: [true, 'Please provide the passenger name']
  },
  passengerPhone: {
    type: String,
    required: [true, 'Please provide the passenger phone']
  },
  pickupLocation: {
    type: String,
    required: [true, 'Please provide the pickup location text']
  },
  pickupCoordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  dropLocation: {
    type: String,
    required: [true, 'Please provide the drop location text']
  },
  dropCoordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  estimatedFare: {
    type: Number,
    required: true
  },
  finalFare: {
    type: Number,
    default: null
  },
  distance: {
    type: Number, // In kilometers
    required: true
  },
  duration: {
    type: Number, // In minutes
    required: true
  },
  status: {
    type: String,
    enum: ['requested', 'accepted', 'arriving', 'started', 'completed', 'cancelled'],
    default: 'requested'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
  requestedAt: {
    type: Date,
    default: Date.now
  },
  acceptedAt: {
    type: Date,
    default: null
  },
  startedAt: {
    type: Date,
    default: null
  },
  completedAt: {
    type: Date,
    default: null
  },
  cancelledAt: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Ride', RideSchema);
