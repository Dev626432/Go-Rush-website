const { calculateEarnings } = require('../services/earningsService');

// @desc    Calculate estimated earnings
// @route   POST /api/earnings/calculate
// @access  Public (or Private depending on requirements, making it Public for lead generation/estimators)
const calculate = (req, res) => {
  try {
    const {
      city,
      vehicleType,
      hoursPerDay,
      daysPerWeek,
      averageDailyRides,
      averageFare,
      platformFeePercentage,
      fuelCost,
      otherRunningCost
    } = req.body;

    // Validate required inputs
    if (!daysPerWeek || !averageDailyRides || !averageFare) {
      return res.status(400).json({
        success: false,
        message: 'Please provide daysPerWeek, averageDailyRides, and averageFare.'
      });
    }

    const earnings = calculateEarnings({
      averageDailyRides,
      averageFare,
      daysPerWeek,
      platformFeePercentage,
      fuelCost,
      otherRunningCost
    });

    res.status(200).json({
      success: true,
      data: {
        inputs: {
          city,
          vehicleType,
          hoursPerDay,
          daysPerWeek,
          averageDailyRides,
          averageFare,
          platformFeePercentage: platformFeePercentage || 10,
          fuelCost,
          otherRunningCost
        },
        estimations: earnings
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Server Error'
    });
  }
};

module.exports = {
  calculate
};
