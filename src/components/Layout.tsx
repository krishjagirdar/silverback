import type { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  showBack?: boolean;
}

export const Layout = ({ children, title, showBack = false }: LayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    // Smart back navigation based on current path
    const pathParts = location.pathname.split('/').filter(Boolean);
    if (pathParts.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-charcoal flex flex-col">
      {/* Header */}
      {(title || showBack) && (
        <header className="sticky top-0 z-50 bg-charcoal/95 backdrop-blur-sm border-b border-border">
          <div className="flex items-center h-14 px-4">
            {showBack && (
              <button
                onClick={handleBack}
                className="mr-3 p-2 -ml-2 rounded-lg hover:bg-card active:bg-card-hover transition-colors"
                aria-label="Go back"
              >
                <svg
                  className="w-6 h-6 text-text"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}
            {title && (
              <h1 className="font-display font-bold text-xl text-text truncate">
                {title}
              </h1>
            )}
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;

