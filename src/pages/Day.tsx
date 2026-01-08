import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ExerciseCard } from '../components/ExerciseCard';
import { getDayByNumber, getPhaseById, getBodyPartsForDay } from '../data/workoutData';
import { useWeightLog } from '../hooks/WeightLogContext';

export const Day = () => {
  const { phaseId, weekNumber, dayNumber } = useParams<{ 
    phaseId: string; 
    weekNumber: string; 
    dayNumber: string;
  }>();
  const navigate = useNavigate();
  
  const phase = phaseId ? getPhaseById(phaseId) : undefined;
  const day = phaseId && weekNumber && dayNumber 
    ? getDayByNumber(phaseId, parseInt(weekNumber), parseInt(dayNumber)) 
    : undefined;
  
  const { getDayCompletion, getCompletedCount, isDayComplete, toggleDayComplete } = useWeightLog();
  
  // Generate day key for completion tracking
  const dayKey = `${phaseId}-week${weekNumber}-day${dayNumber}`;

  if (!phase || !phase.isActive || !day) {
    return <Navigate to="/" replace />;
  }

  const bodyParts = getBodyPartsForDay(day);
  const exerciseIds = day.exercises.map(ex => ex.id);
  const completion = getDayCompletion(exerciseIds);
  const completedCount = getCompletedCount(exerciseIds);
  const totalExercises = day.exercises.length;
  const estimatedMinutes = Math.round(day.totalRestTime + (day.totalSets * 0.5));
  const isComplete = completion === 100;
  const isDayMarkedComplete = isDayComplete(dayKey);
  
  const handleMarkDayComplete = () => {
    toggleDayComplete(dayKey);
    // If marking as complete, navigate back to week view
    if (!isDayMarkedComplete) {
      setTimeout(() => navigate(`/phase/${phaseId}/week/${weekNumber}`), 300);
    }
  };

  // Track which bodypart we're on to show headers
  let currentBodypart = '';

  return (
    <Layout title={`Week ${weekNumber} - Day ${dayNumber}`} showBack>
      <div className="px-4 py-6">
        {/* Day summary */}
        <div className={`rounded-xl p-4 border mb-6 transition-all duration-300 ${
          isComplete 
            ? 'bg-success/10 border-success/30' 
            : 'bg-card border-border'
        }`}>
          {/* Body parts tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {bodyParts.map(part => (
              <span 
                key={part}
                className={`px-2 py-0.5 text-xs rounded-full ${
                  isComplete 
                    ? 'bg-success/20 text-success' 
                    : 'bg-gold/10 text-gold'
                }`}
              >
                {part}
              </span>
            ))}
          </div>
          
          {/* Stats row */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4 text-text-muted">
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
            
            {/* Completion indicator */}
            <div className={`flex items-center gap-2 font-medium ${
              isComplete ? 'text-success' : completion > 0 ? 'text-gold' : 'text-text-muted'
            }`}>
              {isComplete ? (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Complete!</span>
                </>
              ) : (
                <span>{completedCount}/{totalExercises}</span>
              )}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-3 h-2 bg-border rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-500 ${
                isComplete ? 'bg-success' : 'bg-gold'
              }`}
              style={{ width: `${completion}%` }}
            />
          </div>
          
          {/* Percentage text */}
          {completion > 0 && !isComplete && (
            <p className="mt-2 text-xs text-text-muted text-center">
              {completion}% complete
            </p>
          )}
        </div>

        {/* Exercise list */}
        <div className="space-y-3">
          {day.exercises.map((exercise) => {
            const isFirstOfBodypart = exercise.bodypart !== currentBodypart;
            currentBodypart = exercise.bodypart;
            
            return (
              <ExerciseCard 
                key={exercise.id} 
                exercise={exercise}
                isFirstOfBodypart={isFirstOfBodypart}
              />
            );
          })}
        </div>

        {/* Mark Day as Done Button */}
        <div className="mt-8 pb-8">
          <button
            onClick={handleMarkDayComplete}
            className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
              isDayMarkedComplete
                ? 'bg-success/20 text-success border-2 border-success'
                : 'bg-gold text-charcoal hover:bg-gold/90 active:scale-[0.98]'
            }`}
          >
            {isDayMarkedComplete ? (
              <>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Day Completed!
              </>
            ) : (
              <>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Mark Day as Done
              </>
            )}
          </button>
          
          {isDayMarkedComplete && (
            <p className="text-center text-text-muted text-sm mt-3">
              Tap again to mark as incomplete
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Day;
