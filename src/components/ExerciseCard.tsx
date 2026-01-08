import { useState, useEffect } from 'react';
import type { Exercise } from '../types/workout';
import { useWeightLog } from '../hooks/WeightLogContext';

interface ExerciseCardProps {
  exercise: Exercise;
  isFirstOfBodypart?: boolean;
}

// Create a normalized key from exercise name for consistent weight lookup across weeks
const getExerciseWeightKey = (exercise: Exercise): string => {
  // Normalize: lowercase, remove special chars, replace spaces with dashes
  const normalized = exercise.name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .trim();
  return `weight-${normalized}`;
};

export const ExerciseCard = ({ exercise, isFirstOfBodypart = false }: ExerciseCardProps) => {
  const { getLatestLog, updateLatestLog, isExerciseComplete, toggleExerciseComplete } = useWeightLog();
  
  // Use normalized key for weight (same exercise = same weight across weeks)
  const weightKey = getExerciseWeightKey(exercise);
  const latestLog = getLatestLog(weightKey);
  
  // Use original ID for completion tracking (unique per week/day)
  const isComplete = isExerciseComplete(exercise.id);
  
  const [weight, setWeight] = useState<string>(latestLog?.weight?.toString() || '');
  const [hasChanges, setHasChanges] = useState(false);

  // Check if this is an Abs exercise (no weight needed)
  const isAbsExercise = exercise.bodypart.toLowerCase() === 'abs';

  // Sync local state with stored value
  useEffect(() => {
    if (latestLog?.weight !== undefined) {
      setWeight(latestLog.weight.toString());
    }
  }, [latestLog?.weight]);

  const handleWeightChange = (value: string) => {
    // Only allow numbers and decimal point
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setWeight(value);
      setHasChanges(true);
    }
  };

  const handleBlur = () => {
    if (hasChanges && weight !== '') {
      const numWeight = parseFloat(weight);
      if (!isNaN(numWeight) && numWeight > 0) {
        updateLatestLog(weightKey, numWeight);
      }
      setHasChanges(false);
    }
  };

  const adjustWeight = (delta: number) => {
    const currentWeight = parseFloat(weight) || 0;
    const newWeight = Math.max(0, currentWeight + delta);
    setWeight(newWeight.toString());
    updateLatestLog(weightKey, newWeight);
  };

  const handleToggleComplete = () => {
    toggleExerciseComplete(exercise.id);
  };

  return (
    <div className="space-y-0">
      {/* Body part header */}
      {isFirstOfBodypart && (
        <div className="pt-4 pb-2 first:pt-0">
          <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-gold">
            {exercise.bodypart}
          </h3>
        </div>
      )}

      {/* Exercise card */}
      <div className={`bg-card rounded-lg p-4 border transition-all duration-200 ${
        isComplete 
          ? 'border-success/50 bg-success/5' 
          : 'border-border'
      }`}>
        {/* Exercise name and details */}
        <div className="flex items-start justify-between gap-3">
          {/* Checkbox */}
          <button
            onClick={handleToggleComplete}
            className={`mt-0.5 shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
              isComplete
                ? 'bg-success border-success text-charcoal'
                : 'border-border hover:border-gold/50'
            }`}
            aria-label={isComplete ? 'Mark as incomplete' : 'Mark as complete'}
          >
            {isComplete && (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>

          <div className="flex-1 min-w-0">
            <h4 className={`font-medium leading-tight transition-colors ${
              isComplete ? 'text-text-muted line-through' : 'text-text'
            }`}>
              {exercise.name}
            </h4>
            
            {/* Sets x Reps */}
            <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-text-muted">
              <span className={`font-medium ${isComplete ? 'text-text-muted' : 'text-gold/80'}`}>
                {exercise.sets} × {exercise.reps}
              </span>
              {exercise.restTime && (
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {exercise.restTime} rest
                </span>
              )}
            </div>
          </div>

          {/* Weight input - only show for non-Abs exercises */}
          {!isAbsExercise && (
            <div className="flex items-center gap-1">
              <button
                onClick={() => adjustWeight(-5)}
                className="w-8 h-8 rounded-lg bg-card-hover hover:bg-border active:bg-border flex items-center justify-center transition-colors"
                aria-label="Decrease weight by 5"
              >
                <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              
              <div className="relative">
                <input
                  type="text"
                  inputMode="decimal"
                  value={weight}
                  onChange={(e) => handleWeightChange(e.target.value)}
                  onBlur={handleBlur}
                  placeholder="—"
                  className="w-16 h-8 bg-charcoal border border-border rounded-lg text-center text-sm font-medium text-text placeholder:text-text-muted focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50"
                />
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-text-muted">
                  lbs
                </span>
              </div>
              
              <button
                onClick={() => adjustWeight(5)}
                className="w-8 h-8 rounded-lg bg-card-hover hover:bg-border active:bg-border flex items-center justify-center transition-colors"
                aria-label="Increase weight by 5"
              >
                <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Notes */}
        {exercise.notes && exercise.notes.length > 0 && (
          <div className="mt-3 p-2.5 bg-gold/5 border border-gold/20 rounded-lg">
            <div className="flex gap-2">
              <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <ul className="space-y-1">
                {exercise.notes.map((note, idx) => (
                  <li key={idx} className="text-xs text-gold/80 leading-relaxed">
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseCard;
