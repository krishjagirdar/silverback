import { useNavigate } from 'react-router-dom';
import type { Week } from '../types/workout';
import { useWeightLog } from '../hooks/WeightLogContext';

interface WeekCardProps {
  week: Week;
  phaseId: string;
}

export const WeekCard = ({ week, phaseId }: WeekCardProps) => {
  const navigate = useNavigate();
  const { getDayCompletion } = useWeightLog();

  // Calculate overall week completion
  const weekCompletion = week.days.reduce((acc, day) => {
    const exerciseIds = day.exercises.map(ex => ex.id);
    return acc + getDayCompletion(exerciseIds);
  }, 0) / week.days.length;

  const handleClick = () => {
    navigate(`/phase/${phaseId}/week/${week.weekNumber}`);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full p-4 rounded-xl bg-card hover:bg-card-hover border border-border hover:border-gold/30 text-left transition-all duration-200 active:scale-[0.98]"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg text-text">
              Week {week.weekNumber}
            </span>
            <span className="text-xs px-2 py-0.5 bg-gold/10 text-gold rounded-full">
              {week.split}
            </span>
          </div>
          
          <p className="mt-1 text-sm font-medium text-gold/80">
            {week.goal}
          </p>
          <p className="mt-0.5 text-xs text-text-muted">
            {week.description}
          </p>
          
          {/* Progress bar */}
          <div className="mt-3 flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
              <div 
                className="h-full bg-gold rounded-full transition-all duration-500"
                style={{ width: `${weekCompletion}%` }}
              />
            </div>
            <span className="text-xs text-text-muted min-w-[36px] text-right">
              {Math.round(weekCompletion)}%
            </span>
          </div>
        </div>
        
        <svg className="w-5 h-5 text-text-muted ml-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
};

export default WeekCard;

