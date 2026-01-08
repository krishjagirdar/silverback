import { useNavigate } from 'react-router-dom';
import type { Day } from '../types/workout';
import { getBodyPartsForDay } from '../data/workoutData';
import { useWeightLog } from '../hooks/WeightLogContext';

interface DayCardProps {
  day: Day;
  phaseId: string;
  weekNumber: number;
}

export const DayCard = ({ day, phaseId, weekNumber }: DayCardProps) => {
  const navigate = useNavigate();
  const { getDayCompletion, isDayComplete } = useWeightLog();
  
  const bodyParts = getBodyPartsForDay(day);
  const exerciseIds = day.exercises.map(ex => ex.id);
  const completion = getDayCompletion(exerciseIds);
  
  // Day is complete if marked as done OR all exercises are complete
  const dayKey = `${phaseId}-week${weekNumber}-day${day.dayNumber}`;
  const isMarkedComplete = isDayComplete(dayKey);
  const allExercisesComplete = completion === 100;
  const isComplete = isMarkedComplete || allExercisesComplete;

  const handleClick = () => {
    navigate(`/phase/${phaseId}/week/${weekNumber}/day/${day.dayNumber}`);
  };

  // Estimate workout duration (total rest time + ~30 sec per set for actual work)
  const estimatedMinutes = Math.round(day.totalRestTime + (day.totalSets * 0.5));

  return (
    <button
      onClick={handleClick}
      className={`
        w-full p-4 rounded-xl text-left transition-all duration-200 active:scale-[0.98]
        ${isComplete 
          ? 'bg-success/10 border border-success/30 hover:border-success/50' 
          : 'bg-card border border-border hover:bg-card-hover hover:border-gold/30'
        }
      `}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className={`font-display font-bold text-lg ${isComplete ? 'text-success' : 'text-text'}`}>
              Day {day.dayNumber}
            </span>
            {isComplete && (
              <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          
          {/* Body parts tags */}
          <div className="mt-2 flex flex-wrap gap-1.5">
            {bodyParts.map(part => (
              <span 
                key={part}
                className={`px-2 py-0.5 text-xs rounded-full ${
                  isComplete 
                    ? 'bg-success/20 text-success' 
                    : 'bg-card-hover text-text-muted'
                }`}
              >
                {part}
              </span>
            ))}
          </div>
          
          {/* Stats */}
          <div className="mt-3 flex items-center gap-4 text-xs text-text-muted">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              {day.totalSets} sets
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              ~{estimatedMinutes} min
            </span>
          </div>

          {/* Progress bar - only show if not complete and has progress */}
          {completion > 0 && !isComplete && (
            <div className="mt-3 flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gold rounded-full transition-all duration-500"
                  style={{ width: `${completion}%` }}
                />
              </div>
              <span className="text-xs text-text-muted">
                {completion}%
              </span>
            </div>
          )}
          
          {/* Complete badge */}
          {isComplete && (
            <div className="mt-3 text-xs text-success font-medium">
              ✓ Workout complete
            </div>
          )}
        </div>
        
        <svg className="w-5 h-5 text-text-muted ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
};

export default DayCard;
