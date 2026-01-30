import { useParams, Navigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { DayCard } from '../components/DayCard';
import { getWeekByNumber, getPhaseById } from '../data/workoutData';

export const Week = () => {
  const { phaseId, weekNumber } = useParams<{ phaseId: string; weekNumber: string }>();
  const phase = phaseId ? getPhaseById(phaseId) : undefined;
  const week = phaseId && weekNumber ? getWeekByNumber(phaseId, parseInt(weekNumber)) : undefined;

  if (!phase || !phase.isActive || !week) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout title={`Week ${week.weekNumber}`} showBack>
      <div className="px-4 py-6 space-y-4">
        {/* Week info */}
        <div className="bg-card rounded-xl p-4 border border-border">
          <div className="flex items-center gap-2">
            <span className="text-xs px-2 py-0.5 bg-gold/10 text-gold rounded-full">
              {week.split}
            </span>
          </div>
          <h3 className="mt-2 font-display font-bold text-lg text-gold">
            {week.goal}
          </h3>
          <p className="mt-1 text-sm text-text-muted">{week.description}</p>
        </div>

        {/* Days list */}
        <h2 className="font-display font-semibold text-sm uppercase tracking-wider text-text-muted pt-2">
          Select Day
        </h2>
        
        <div className="space-y-3">
          {week.days.map(day => (
            <DayCard 
              key={day.dayNumber} 
              day={day} 
              phaseId={phase.id} 
              weekNumber={week.weekNumber} 
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Week;


