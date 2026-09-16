const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
  driverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Driver',
    required: true
  },
  vehicleType: {
    type: String,
    enum: ['Bike / Scooter', 'Auto Rickshaw', 'Cab / Taxi'],
    required: [true, 'Please provide the vehicle type']
  },
  vehicleNumber: {
    type: String,
    required: [true, 'Please provide the vehicle number (License Plate)'],
    unique: true,
    trim: true,
    // Basic Indian vehicle number plate validation (e.g., MH 01 AB 1234)
    match: [/^[A-Z]{2}[0-9]{1,2}[A-Z]{1,2}[0-9]{4}$/, 'Please provide a valid Indian vehicle number (e.g., MH01AB1234) without spaces']
  },
  brand: {
    type: String,
    required: [true, 'Please provide the vehicle brand']
  },
  model: {
    type: String,
    required: [true, 'Please provide the vehicle model']
  },
  year: {
    type: Number,
    required: [true, 'Please provide the manufacturing year']
  },
  color: {
    type: String,
    required: [true, 'Please provide the vehicle color']
  },
  fuelType: {
    type: String,
    enum: ['Petrol', 'Diesel', 'CNG', 'Electric'],
    required: [true, 'Please provide the fuel type']
  },
  registrationNumber: {
    type: String,
    required: [true, 'Please provide the registration RC number']
  },
  insuranceExpiry: {
    type: Date,
    required: [true, 'Please provide the insurance expiry date']
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Vehicle', VehicleSchema);
