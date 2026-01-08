import { useState, useEffect, useCallback } from 'react';
import type { WeightLog, WeightLogStore, CompletionStore } from '../types/workout';

const STORAGE_KEY = 'silverback-weight-logs';
const COMPLETION_KEY = 'silverback-completion';

export const useWeightLog = () => {
  const [logs, setLogs] = useState<WeightLogStore>({});
  const [completions, setCompletions] = useState<CompletionStore>({});

  // Load logs and completions from localStorage on mount
  useEffect(() => {
    try {
      const storedLogs = localStorage.getItem(STORAGE_KEY);
      if (storedLogs) {
        setLogs(JSON.parse(storedLogs));
      }
      const storedCompletions = localStorage.getItem(COMPLETION_KEY);
      if (storedCompletions) {
        setCompletions(JSON.parse(storedCompletions));
      }
    } catch (error) {
      console.error('Failed to load data:', error);
    }
  }, []);

  // Save logs to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
    } catch (error) {
      console.error('Failed to save weight logs:', error);
    }
  }, [logs]);

  // Save completions to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(COMPLETION_KEY, JSON.stringify(completions));
    } catch (error) {
      console.error('Failed to save completions:', error);
    }
  }, [completions]);

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

    setLogs(prev => ({
      ...prev,
      [exerciseId]: [...(prev[exerciseId] || []), newLog]
    }));
  }, []);

  // Update the most recent log for an exercise
  const updateLatestLog = useCallback((exerciseId: string, weight: number, unit: 'lbs' | 'kg' = 'lbs') => {
    setLogs(prev => {
      const exerciseLogs = prev[exerciseId] || [];
      if (exerciseLogs.length === 0) {
        // No existing log, create a new one
        return {
          ...prev,
          [exerciseId]: [{
            exerciseId,
            weight,
            unit,
            date: new Date().toISOString()
          }]
        };
      }
      // Update the last log
      const updatedLogs = [...exerciseLogs];
      updatedLogs[updatedLogs.length - 1] = {
        ...updatedLogs[updatedLogs.length - 1],
        weight,
        unit,
        date: new Date().toISOString()
      };
      return {
        ...prev,
        [exerciseId]: updatedLogs
      };
    });
  }, []);

  // Delete the most recent log for an exercise
  const deleteLatestLog = useCallback((exerciseId: string) => {
    setLogs(prev => {
      const exerciseLogs = prev[exerciseId];
      if (!exerciseLogs || exerciseLogs.length === 0) return prev;
      
      const updatedLogs = exerciseLogs.slice(0, -1);
      if (updatedLogs.length === 0) {
        const { [exerciseId]: _, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [exerciseId]: updatedLogs
      };
    });
  }, []);

  // Check if an exercise is completed
  const isExerciseComplete = useCallback((exerciseId: string): boolean => {
    return completions[exerciseId] === true;
  }, [completions]);

  // Toggle exercise completion
  const toggleExerciseComplete = useCallback((exerciseId: string) => {
    setCompletions(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  }, []);

  // Mark exercise as complete
  const markExerciseComplete = useCallback((exerciseId: string, complete: boolean = true) => {
    setCompletions(prev => ({
      ...prev,
      [exerciseId]: complete
    }));
  }, []);

  // Check if any exercise in a day has been logged
  const isDayStarted = useCallback((exerciseIds: string[]): boolean => {
    return exerciseIds.some(id => completions[id] === true);
  }, [completions]);

  // Get completion percentage for a day (based on completed exercises)
  const getDayCompletion = useCallback((exerciseIds: string[]): number => {
    if (exerciseIds.length === 0) return 0;
    const completed = exerciseIds.filter(id => completions[id] === true).length;
    return Math.round((completed / exerciseIds.length) * 100);
  }, [completions]);

  // Get count of completed exercises
  const getCompletedCount = useCallback((exerciseIds: string[]): number => {
    return exerciseIds.filter(id => completions[id] === true).length;
  }, [completions]);

  // Clear all logs (for testing/reset)
  const clearAllLogs = useCallback(() => {
    setLogs({});
    setCompletions({});
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(COMPLETION_KEY);
  }, []);

  return {
    logs,
    completions,
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
    clearAllLogs
  };
};

export default useWeightLog;
