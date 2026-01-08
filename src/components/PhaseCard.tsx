import { useNavigate } from 'react-router-dom';
import type { Phase } from '../types/workout';

interface PhaseCardProps {
  phase: Phase;
}

export const PhaseCard = ({ phase }: PhaseCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (phase.isActive) {
      navigate(`/phase/${phase.id}`);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={!phase.isActive}
      className={`
        w-full p-5 rounded-xl text-left transition-all duration-200
        ${phase.isActive 
          ? 'bg-card hover:bg-card-hover active:scale-[0.98] border border-gold/30 hover:border-gold/50' 
          : 'bg-card/50 border border-border opacity-60 cursor-not-allowed'
        }
      `}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className={`font-display font-bold text-xl ${phase.isActive ? 'text-gold' : 'text-text-muted'}`}>
            {phase.name}
          </h3>
          <p className="mt-1 text-sm text-text-muted">
            {phase.description}
          </p>
          {phase.isActive && (
            <div className="mt-3 flex items-center gap-2 text-xs text-text-muted">
              <span className="px-2 py-0.5 bg-gold/10 text-gold rounded-full">
                {phase.weeks.length} Weeks
              </span>
            </div>
          )}
        </div>
        
        {phase.isActive ? (
          <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        ) : (
          <span className="px-3 py-1 text-xs font-medium bg-border/50 text-text-muted rounded-full">
            Coming Soon
          </span>
        )}
      </div>
    </button>
  );
};

export default PhaseCard;

