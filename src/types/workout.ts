export interface Exercise {
  id: string;
  bodypart: string;
  name: string;
  sets: number;
  reps: string;           // "8-10", "12-15", "To failure", "1 min" (for planks), etc.
  restTime: string;       // "1 min", "1.5 min", ".5 min", etc.
  totalRestTime: number;  // minutes (calculated: sets * restTime)
  notes?: string[];       // Inline notes (e.g., "Perform drop-set on last 2 sets")
}

export interface Day {
  dayNumber: number;
  exercises: Exercise[];
  totalSets: number;
  totalRestTime: number;
}

export interface Week {
  weekNumber: number;
  split: string;          // "Split (1)", "Split (2)", etc.
  goal: string;           // "Hypertrophy", "Growth Hormone Release Week"
  description: string;    // "Establish foundation with compound moves"
  days: Day[];
}

export interface Phase {
  id: string;
  name: string;
  description: string;
  weeks: Week[];
  isActive: boolean;
}

export interface WeightLog {
  exerciseId: string;     // "phase1-week1-day1-exercise0"
  weight: number;
  unit: 'lbs' | 'kg';
  date: string;           // ISO date string
}

export interface WeightLogStore {
  [exerciseId: string]: WeightLog[];
}

export interface CompletionStore {
  [exerciseId: string]: boolean;
}

export interface DayCompletionStore {
  [dayKey: string]: boolean; // key format: "phase1-week1-day1"
}

