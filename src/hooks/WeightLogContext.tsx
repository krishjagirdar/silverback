import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { WeightLog, WeightLogStore, CompletionStore, DayCompletionStore } from '../types/workout';

const STORAGE_KEY = 'silverback-weight-logs';
const COMPLETION_KEY = 'silverback-completion';
const DAY_COMPLETION_KEY = 'silverback-day-completion';

// Helper to save logs immediately
const saveLogsToStorage = (logs: WeightLogStore) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
  } catch (error) {
    console.error('Failed to save weight logs:', error);
  }
};

// Helper to save completions immediately
const saveCompletionsToStorage = (completions: CompletionStore) => {
  try {
    localStorage.setItem(COMPLETION_KEY, JSON.stringify(completions));
  } catch (error) {
    console.error('Failed to save completions:', error);
  }
};

// Helper to save day completions immediately
const saveDayCompletionsToStorage = (dayCompletions: DayCompletionStore) => {
  try {
    localStorage.setItem(DAY_COMPLETION_KEY, JSON.stringify(dayCompletions));
  } catch (error) {
    console.error('Failed to save day completions:', error);
  }
};

interface WeightLogContextType {
  logs: WeightLogStore;
  completions: CompletionStore;
  dayCompletions: DayCompletionStore;
  getLatestLog: (exerciseId: string) => WeightLog | undefined;
  getLogsForExercise: (exerciseId: string) => WeightLog[];
  logWeight: (exerciseId: string, weight: number, unit?: 'lbs' | 'kg') => void;
  updateLatestLog: (exerciseId: string, weight: number, unit?: 'lbs' | 'kg') => void;
  deleteLatestLog: (exerciseId: string) => void;
  isExerciseComplete: (exerciseId: string) => boolean;
  toggleExerciseComplete: (exerciseId: string) => void;
  markExerciseComplete: (exerciseId: string, complete?: boolean) => void;
  isDayStarted: (exerciseIds: string[]) => boolean;
  getDayCompletion: (exerciseIds: string[]) => number;
  getCompletedCount: (exerciseIds: string[]) => number;
  isDayComplete: (dayKey: string) => boolean;
  markDayComplete: (dayKey: string, complete?: boolean) => void;
  toggleDayComplete: (dayKey: string) => void;
  clearAllLogs: () => void;
}

const WeightLogContext = createContext<WeightLogContextType | null>(null);

// Load initial state from localStorage
const loadInitialLogs = (): WeightLogStore => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

const loadInitialCompletions = (): CompletionStore => {
  try {
    const stored = localStorage.getItem(COMPLETION_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

const loadInitialDayCompletions = (): DayCompletionStore => {
  try {
    const stored = localStorage.getItem(DAY_COMPLETION_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

export const WeightLogProvider = ({ children }: { children: ReactNode }) => {
  const [logs, setLogs] = useState<WeightLogStore>(loadInitialLogs);
  const [completions, setCompletions] = useState<CompletionStore>(loadInitialCompletions);
  const [dayCompletions, setDayCompletions] = useState<DayCompletionStore>(loadInitialDayCompletions);

  // Get the most recent log for an exercise
  const getLatestLog = useCallback((exerciseId: string): WeightLog | undefined => {
    const exerciseLogs = logs[exerciseId];
    if (!exerciseLogs || exerciseLogs.length === 0) return undefined;
    return exerciseLogs[exerciseLogs.length - 1];
  }, [logs]);

  // Get all logs for an exercise
  const getLogsForExercise = useCallback((exerciseId: string): WeightLog[] => {
    return logs[exerciseId] || [];
  }, [logs]);

  // Log a new weight for an exercise
  const logWeight = useCallback((exerciseId: string, weight: number, unit: 'lbs' | 'kg' = 'lbs') => {
    const newLog: WeightLog = {
      exerciseId,
      weight,
      unit,
      date: new Date().toISOString()
    };

    setLogs(prev => {
      const newLogs = {
        ...prev,
        [exerciseId]: [...(prev[exerciseId] || []), newLog]
      };
      // Save immediately
      saveLogsToStorage(newLogs);
      return newLogs;
    });
  }, []);

  // Update the most recent log for an exercise (or create if none exists)
  const updateLatestLog = useCallback((exerciseId: string, weight: number, unit: 'lbs' | 'kg' = 'lbs') => {
    setLogs(prev => {
      const exerciseLogs = prev[exerciseId] || [];
      let newLogs: WeightLogStore;
      
      if (exerciseLogs.length === 0) {
        // No existing log, create a new one
        newLogs = {
          ...prev,
          [exerciseId]: [{
            exerciseId,
            weight,
            unit,
            date: new Date().toISOString()
          }]
        };
      } else {
        // Update the last log
        const updatedExerciseLogs = [...exerciseLogs];
        updatedExerciseLogs[updatedExerciseLogs.length - 1] = {
          ...updatedExerciseLogs[updatedExerciseLogs.length - 1],
          weight,
          unit,
          date: new Date().toISOString()
        };
        newLogs = {
          ...prev,
          [exerciseId]: updatedExerciseLogs
        };
      }
      
      // Save immediately to localStorage
      saveLogsToStorage(newLogs);
      return newLogs;
    });
  }, []);

  // Delete the most recent log for an exercise
  const deleteLatestLog = useCallback((exerciseId: string) => {
    setLogs(prev => {
      const exerciseLogs = prev[exerciseId];
      if (!exerciseLogs || exerciseLogs.length === 0) return prev;
      
      const updatedLogs = exerciseLogs.slice(0, -1);
      let newLogs: WeightLogStore;
      
      if (updatedLogs.length === 0) {
        const { [exerciseId]: _, ...rest } = prev;
        newLogs = rest;
      } else {
        newLogs = {
          ...prev,
          [exerciseId]: updatedLogs
        };
      }
      
      saveLogsToStorage(newLogs);
      return newLogs;
    });
  }, []);

  // Check if an exercise is completed
  const isExerciseComplete = useCallback((exerciseId: string): boolean => {
    return completions[exerciseId] === true;
  }, [completions]);

  // Toggle exercise completion
  const toggleExerciseComplete = useCallback((exerciseId: string) => {
    setCompletions(prev => {
      const newCompletions = {
        ...prev,
        [exerciseId]: !prev[exerciseId]
      };
      saveCompletionsToStorage(newCompletions);
      return newCompletions;
    });
  }, []);

  // Mark exercise as complete
  const markExerciseComplete = useCallback((exerciseId: string, complete: boolean = true) => {
    setCompletions(prev => {
      const newCompletions = {
        ...prev,
        [exerciseId]: complete
      };
      saveCompletionsToStorage(newCompletions);
      return newCompletions;
    });
  }, []);

  // Check if any exercise in a day has been started
  const isDayStarted = useCallback((exerciseIds: string[]): boolean => {
    return exerciseIds.some(id => completions[id] === true);
  }, [completions]);

  // Get completion percentage for a day
  const getDayCompletion = useCallback((exerciseIds: string[]): number => {
    if (exerciseIds.length === 0) return 0;
    const completed = exerciseIds.filter(id => completions[id] === true).length;
    return Math.round((completed / exerciseIds.length) * 100);
  }, [completions]);

  // Get count of completed exercises
  const getCompletedCount = useCallback((exerciseIds: string[]): number => {
    return exerciseIds.filter(id => completions[id] === true).length;
  }, [completions]);

  // Check if a day is marked as complete
  const isDayComplete = useCallback((dayKey: string): boolean => {
    return dayCompletions[dayKey] === true;
  }, [dayCompletions]);

  // Mark a day as complete
  const markDayComplete = useCallback((dayKey: string, complete: boolean = true) => {
    setDayCompletions(prev => {
      const newDayCompletions = {
        ...prev,
        [dayKey]: complete
      };
      saveDayCompletionsToStorage(newDayCompletions);
      return newDayCompletions;
    });
  }, []);

  // Toggle day completion
  const toggleDayComplete = useCallback((dayKey: string) => {
    setDayCompletions(prev => {
      const newDayCompletions = {
        ...prev,
        [dayKey]: !prev[dayKey]
      };
      saveDayCompletionsToStorage(newDayCompletions);
      return newDayCompletions;
    });
  }, []);

  // Clear all logs
  const clearAllLogs = useCallback(() => {
    setLogs({});
    setCompletions({});
    setDayCompletions({});
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(COMPLETION_KEY);
    localStorage.removeItem(DAY_COMPLETION_KEY);
  }, []);

  const value = {
    logs,
    completions,
    dayCompletions,
    getLatestLog,
    getLogsForExercise,
    logWeight,
    updateLatestLog,
    deleteLatestLog,
    isExerciseComplete,
    toggleExerciseComplete,
    markExerciseComplete,
    isDayStarted,
    getDayCompletion,
    getCompletedCount,
    isDayComplete,
    markDayComplete,
    toggleDayComplete,
    clearAllLogs
  };

  return (
    <WeightLogContext.Provider value={value}>
      {children}
    </WeightLogContext.Provider>
  );
};

export const useWeightLog = () => {
  const context = useContext(WeightLogContext);
  if (!context) {
    throw new Error('useWeightLog must be used within a WeightLogProvider');
  }
  return context;
};

export default useWeightLog;
