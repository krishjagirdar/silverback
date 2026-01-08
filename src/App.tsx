import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { WeightLogProvider } from './hooks/WeightLogContext';
import { Home } from './pages/Home';
import { Phase } from './pages/Phase';
import { Week } from './pages/Week';
import { Day } from './pages/Day';

function App() {
  return (
    <WeightLogProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phase/:phaseId" element={<Phase />} />
          <Route path="/phase/:phaseId/week/:weekNumber" element={<Week />} />
          <Route path="/phase/:phaseId/week/:weekNumber/day/:dayNumber" element={<Day />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </WeightLogProvider>
  );
}

export default App;
