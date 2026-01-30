/**
 * Estimate calories burned during a strength training workout.
 * 
 * Formula: ~5 cal/min for strength training + ~2 cal per set
 * This gives reasonable estimates based on workout volume and duration.
 * 
 * @param durationMinutes - Estimated workout duration in minutes
 * @param totalSets - Total number of sets in the workout
 * @returns Estimated calories burned
 */
export const estimateCalories = (durationMinutes: number, totalSets: number): number => {
  return Math.round((durationMinutes * 5) + (totalSets * 2));
};
