// Default configuration that can later be moved to a DB or env vars
const defaultConfig = {
  platformFeePercentage: 10,
};

/**
 * Calculate expected earnings based on provided metrics
 * @param {Object} data 
 * @returns {Object} Calculated earnings breakdown
 */
const calculateEarnings = (data) => {
  const {
    averageDailyRides = 0,
    averageFare = 0,
    daysPerWeek = 0,
    platformFeePercentage = defaultConfig.platformFeePercentage,
    fuelCost = 0, // Daily fuel cost
    otherRunningCost = 0 // Daily other running cost
  } = data;

  // Daily Calculations
  const grossDailyRevenue = averageDailyRides * averageFare;
  const platformFee = grossDailyRevenue * (platformFeePercentage / 100);
  const dailyNet = grossDailyRevenue - platformFee - fuelCost - otherRunningCost;

  // Weekly Calculations
  const weeklyNet = dailyNet * daysPerWeek;

  // Monthly Calculations (assuming 4 weeks per month for simpler estimations)
  const monthlyGross = grossDailyRevenue * daysPerWeek * 4;
  const monthlyNet = dailyNet * daysPerWeek * 4;

  return {
    grossDailyRevenue,
    platformFee,
    estimatedFuelCost: fuelCost,
    estimatedRunningCost: otherRunningCost,
    dailyNet,
    weeklyNet,
    monthlyGross,
    monthlyNet
  };
};

module.exports = {
  calculateEarnings
};
