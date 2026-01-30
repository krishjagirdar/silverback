import { useParams, Navigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { WeekCard } from '../components/WeekCard';
import { getPhaseById } from '../data/workoutData';

export const Phase = () => {
  const { phaseId } = useParams<{ phaseId: string }>();
  const phase = phaseId ? getPhaseById(phaseId) : undefined;

  if (!phase || !phase.isActive) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout title={phase.name} showBack>
      <div className="px-4 py-6 space-y-4">
        {/* Phase info */}
        <div className="bg-card rounded-xl p-4 border border-border">
          <p className="text-sm text-text-muted">{phase.description}</p>
          <div className="mt-2 flex items-center gap-2 text-xs">
            <span className="px-2 py-0.5 bg-gold/10 text-gold rounded-full">
              {phase.weeks.length} Weeks
            </span>
            <span className="px-2 py-0.5 bg-card-hover text-text-muted rounded-full">
              {phase.weeks.reduce((acc, w) => acc + w.days.length, 0)} Days
            </span>
          </div>
        </div>

        {/* Weeks list */}
        <h2 className="font-display font-semibold text-sm uppercase tracking-wider text-text-muted pt-2">
          Select Week
        </h2>
        
        <div className="space-y-3">
          {phase.weeks.map(week => (
            <WeekCard key={week.weekNumber} week={week} phaseId={phase.id} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Phase;


