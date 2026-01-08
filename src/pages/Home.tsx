import { Layout } from '../components/Layout';
import { GorillaBanner } from '../components/GorillaBanner';
import { PhaseCard } from '../components/PhaseCard';
import { allPhases } from '../data/workoutData';

export const Home = () => {
  return (
    <Layout>
      <GorillaBanner />
      
      <div className="px-4 py-6 space-y-4">
        <h2 className="font-display font-semibold text-sm uppercase tracking-wider text-text-muted">
          Select Phase
        </h2>
        
        <div className="space-y-3">
          {allPhases.map(phase => (
            <PhaseCard key={phase.id} phase={phase} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;

