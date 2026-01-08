import type { Phase, Week, Day } from '../types/workout';

// Helper to generate exercise IDs
const createExerciseId = (weekNum: number, dayNum: number, index: number): string => {
  return `phase1-week${weekNum}-day${dayNum}-exercise${index}`;
};

// Week 1 - Split (1) - Hypertrophy - Establish foundation with compound moves
const week1: Week = {
  weekNumber: 1,
  split: 'Split (1)',
  goal: 'Hypertrophy',
  description: 'Establish foundation with compound moves',
  days: [
    {
      dayNumber: 1,
      totalSets: 41,
      totalRestTime: 46.5,
      exercises: [
        { id: createExerciseId(1, 1, 0), bodypart: 'Back', name: 'Wide-grip pullup (weighted if needed)', sets: 5, reps: '12-15', restTime: '1.5 min', totalRestTime: 7.5, notes: ['If unable to reach target rep range, complete set(s) doing lat pulldowns', 'If unable to perform bodyweight or weighted, then use assisted dip/pullup machine machine, as applicable'] },
        { id: createExerciseId(1, 1, 1), bodypart: 'Back', name: 'Overhand barbell row', sets: 5, reps: '12-15', restTime: '1.5 min', totalRestTime: 7.5 },
        { id: createExerciseId(1, 1, 2), bodypart: 'Back', name: 'Underhand cable row', sets: 4, reps: '12-15', restTime: '1 min', totalRestTime: 4 },
        { id: createExerciseId(1, 1, 3), bodypart: 'Back', name: 'Back extension', sets: 2, reps: '12-15', restTime: '1 min', totalRestTime: 2 },
        { id: createExerciseId(1, 1, 4), bodypart: 'Triceps', name: 'Weighted dip', sets: 5, reps: '12-15', restTime: '1.5 min', totalRestTime: 7.5, notes: ['If unable to perform bodyweight or weighted, then use assisted dip/pullup machine machine, as applicable'] },
        { id: createExerciseId(1, 1, 5), bodypart: 'Triceps', name: 'EZ-Bar Skullcrushers - flatbench', sets: 5, reps: '12-15', restTime: '1.5 min', totalRestTime: 7.5 },
        { id: createExerciseId(1, 1, 6), bodypart: 'Triceps', name: 'Rope pressdown', sets: 3, reps: '12-15', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(1, 1, 7), bodypart: 'Abs', name: 'Plank', sets: 3, reps: '1 min', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(1, 1, 8), bodypart: 'Abs', name: 'Exercise ball crunch', sets: 3, reps: '15', restTime: '.5 min', totalRestTime: 1.5 },
        { id: createExerciseId(1, 1, 9), bodypart: 'Abs', name: 'Side crunch', sets: 3, reps: '15', restTime: '.5 min', totalRestTime: 1.5 },
        { id: createExerciseId(1, 1, 10), bodypart: 'Abs', name: 'Reverse crunch', sets: 3, reps: '15', restTime: '', totalRestTime: 0 },
        { id: createExerciseId(1, 1, 11), bodypart: 'Abs', name: 'Leg raises', sets: 3, reps: '20', restTime: '.5 min', totalRestTime: 1.5 },
      ]
    },
    {
      dayNumber: 2,
      totalSets: 26,
      totalRestTime: 32,
      exercises: [
        { id: createExerciseId(1, 2, 0), bodypart: 'Shoulders', name: 'Barbell hang clean and jerk', sets: 3, reps: '6-8', restTime: '1.5 min', totalRestTime: 4.5 },
        { id: createExerciseId(1, 2, 1), bodypart: 'Shoulders', name: 'Seated dumbbell shoulder press', sets: 4, reps: '12-15', restTime: '1.5 min', totalRestTime: 6 },
        { id: createExerciseId(1, 2, 2), bodypart: 'Shoulders', name: 'Wide grip barbell upright row', sets: 5, reps: '12-15', restTime: '1.5 min', totalRestTime: 7.5 },
        { id: createExerciseId(1, 2, 3), bodypart: 'Shoulders', name: 'Dumbbell rear delt raise', sets: 3, reps: '12-15', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(1, 2, 4), bodypart: 'Shoulders', name: 'Dumbbell front raise', sets: 3, reps: '12-15', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(1, 2, 5), bodypart: 'Traps', name: 'Smith machine barbell shrug', sets: 5, reps: '12-15', restTime: '1 min', totalRestTime: 5 },
        { id: createExerciseId(1, 2, 6), bodypart: 'Traps', name: 'Standing dumbbell shrug', sets: 3, reps: '12-15', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(1, 2, 7), bodypart: 'Cardio', name: 'Jog', sets: 1, reps: '20 min', restTime: '', totalRestTime: 0 },
      ]
    },
    {
      dayNumber: 3,
      totalSets: 32,
      totalRestTime: 38,
      exercises: [
        { id: createExerciseId(1, 3, 0), bodypart: 'Legs', name: 'Back squat', sets: 5, reps: '12-15', restTime: '1.5 min', totalRestTime: 7.5 },
        { id: createExerciseId(1, 3, 1), bodypart: 'Legs', name: 'Deadlift', sets: 4, reps: '8-10', restTime: '1.5 min', totalRestTime: 6 },
        { id: createExerciseId(1, 3, 2), bodypart: 'Legs', name: 'Leg press', sets: 3, reps: '12-15', restTime: '1.5 min', totalRestTime: 4.5 },
        { id: createExerciseId(1, 3, 3), bodypart: 'Legs', name: 'Lying leg curl', sets: 3, reps: '10-15', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(1, 3, 4), bodypart: 'Legs', name: 'Leg extension', sets: 3, reps: '10-15', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(1, 3, 5), bodypart: 'Calves', name: 'Standing calf raise', sets: 5, reps: '12-15', restTime: '1 min', totalRestTime: 5 },
        { id: createExerciseId(1, 3, 6), bodypart: 'Abs', name: 'Side plank', sets: 3, reps: '1 min', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(1, 3, 7), bodypart: 'Abs', name: 'Hanging knee raise', sets: 3, reps: '15-20', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(1, 3, 8), bodypart: 'Abs', name: 'Russian twist w/ medicine ball', sets: 3, reps: '12-15', restTime: '1 min', totalRestTime: 3 },
      ]
    },
    {
      dayNumber: 4,
      totalSets: 30,
      totalRestTime: 39,
      exercises: [
        { id: createExerciseId(1, 4, 0), bodypart: 'Chest', name: 'Incline barbell benchpress', sets: 5, reps: '12-15', restTime: '1.5 min', totalRestTime: 7.5 },
        { id: createExerciseId(1, 4, 1), bodypart: 'Chest', name: 'Flat dumbbell benchpress', sets: 5, reps: '12-15', restTime: '1.5 min', totalRestTime: 7.5 },
        { id: createExerciseId(1, 4, 2), bodypart: 'Chest', name: 'Machine flye', sets: 4, reps: '12-15', restTime: '1 min', totalRestTime: 4 },
        { id: createExerciseId(1, 4, 3), bodypart: 'Chest', name: 'Pushups', sets: 2, reps: 'To failure', restTime: '1 min', totalRestTime: 2 },
        { id: createExerciseId(1, 4, 4), bodypart: 'Biceps', name: 'Wide-grip barbell curl', sets: 5, reps: '12-15', restTime: '1.5 min', totalRestTime: 7.5 },
        { id: createExerciseId(1, 4, 5), bodypart: 'Biceps', name: 'Reverse EZ bar curl', sets: 5, reps: '12-15', restTime: '1.5 min', totalRestTime: 7.5 },
        { id: createExerciseId(1, 4, 6), bodypart: 'Biceps', name: 'Cable preacher curl', sets: 3, reps: '12-15', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(1, 4, 7), bodypart: 'Cardio', name: 'Jog', sets: 1, reps: '20 min', restTime: '', totalRestTime: 0 },
      ]
    },
    {
      dayNumber: 5,
      totalSets: 42,
      totalRestTime: 43.5,
      exercises: [
        { id: createExerciseId(1, 5, 0), bodypart: 'Back', name: 'Wide-grip lat pulldown', sets: 5, reps: '12-15', restTime: '1.5 min', totalRestTime: 7.5, notes: ['If unable to reach target rep range, complete set(s) doing lat pulldowns'] },
        { id: createExerciseId(1, 5, 1), bodypart: 'Back', name: 'Seated hammer-strength row', sets: 5, reps: '12-15', restTime: '1.5 min', totalRestTime: 7.5 },
        { id: createExerciseId(1, 5, 2), bodypart: 'Back', name: 'Close-grip cable row', sets: 4, reps: '12-15', restTime: '1 min', totalRestTime: 4 },
        { id: createExerciseId(1, 5, 3), bodypart: 'Back', name: 'Back extension', sets: 2, reps: '12-15', restTime: '1 min', totalRestTime: 2 },
        { id: createExerciseId(1, 5, 4), bodypart: 'Traps', name: 'Hex bar shrug', sets: 5, reps: '12-15', restTime: '1.5 min', totalRestTime: 7.5 },
        { id: createExerciseId(1, 5, 5), bodypart: 'Traps', name: 'Incline bench dumbbell shrug', sets: 4, reps: '12-15', restTime: '1 min', totalRestTime: 4 },
        { id: createExerciseId(1, 5, 6), bodypart: 'Calves', name: 'Leg press calf raise', sets: 5, reps: '12-15', restTime: '1 min', totalRestTime: 5 },
        { id: createExerciseId(1, 5, 7), bodypart: 'Abs', name: 'Plank', sets: 3, reps: '1 min', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(1, 5, 8), bodypart: 'Abs', name: 'Alternating sides cable crunch', sets: 3, reps: '12-15', restTime: '.5 min', totalRestTime: 1.5 },
        { id: createExerciseId(1, 5, 9), bodypart: 'Abs', name: 'Reverse crunch', sets: 3, reps: '15', restTime: '', totalRestTime: 0 },
        { id: createExerciseId(1, 5, 10), bodypart: 'Abs', name: 'Leg raises', sets: 3, reps: '20', restTime: '.5 min', totalRestTime: 1.5 },
      ]
    }
  ]
};

// Week 2 - Split (2) - Hypertrophy - Establish foundation with compound moves
const week2: Week = {
  weekNumber: 2,
  split: 'Split (2)',
  goal: 'Hypertrophy',
  description: 'Establish foundation with compound moves',
  days: [
    {
      dayNumber: 1,
      totalSets: 41,
      totalRestTime: 46.5,
      exercises: [
        { id: createExerciseId(2, 1, 0), bodypart: 'Chest', name: 'Incline barbell benchpress', sets: 5, reps: '10-12', restTime: '1.5 min', totalRestTime: 7.5 },
        { id: createExerciseId(2, 1, 1), bodypart: 'Chest', name: 'Flat dumbbell benchpress', sets: 5, reps: '10-12', restTime: '1.5 min', totalRestTime: 7.5 },
        { id: createExerciseId(2, 1, 2), bodypart: 'Chest', name: 'Machine flye', sets: 4, reps: '10-12', restTime: '1 min', totalRestTime: 4 },
        { id: createExerciseId(2, 1, 3), bodypart: 'Chest', name: 'Pushups', sets: 2, reps: 'To failure', restTime: '1 min', totalRestTime: 2 },
        { id: createExerciseId(2, 1, 4), bodypart: 'Biceps', name: 'Wide-grip barbell curl', sets: 5, reps: '10-12', restTime: '1.5 min', totalRestTime: 7.5 },
        { id: createExerciseId(2, 1, 5), bodypart: 'Biceps', name: 'Reverse EZ bar curl', sets: 5, reps: '10-12', restTime: '1.5 min', totalRestTime: 7.5 },
        { id: createExerciseId(2, 1, 6), bodypart: 'Biceps', name: 'Cable preacher curl', sets: 3, reps: '10-12', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(2, 1, 7), bodypart: 'Abs', name: 'Plank', sets: 3, reps: '1 min', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(2, 1, 8), bodypart: 'Abs', name: 'Exercise ball crunch', sets: 3, reps: '15', restTime: '.5 min', totalRestTime: 1.5 },
        { id: createExerciseId(2, 1, 9), bodypart: 'Abs', name: 'Side crunch', sets: 3, reps: '15', restTime: '.5 min', totalRestTime: 1.5 },
        { id: createExerciseId(2, 1, 10), bodypart: 'Abs', name: 'Reverse crunch', sets: 3, reps: '15', restTime: '', totalRestTime: 0 },
        { id: createExerciseId(2, 1, 11), bodypart: 'Abs', name: 'Leg raises', sets: 3, reps: '20', restTime: '.5 min', totalRestTime: 1.5 },
      ]
    },
    {
      dayNumber: 2,
      totalSets: 29,
      totalRestTime: 39,
      exercises: [
        { id: createExerciseId(2, 2, 0), bodypart: 'Back', name: 'Wide-grip pullup (weighted if needed)', sets: 5, reps: '10-12', restTime: '1.5 min', totalRestTime: 7.5, notes: ['If unable to reach target rep range, complete set(s) doing lat pulldowns', 'If unable to perform bodyweight or weighted, then use assisted dip/pullup machine machine, as applicable'] },
        { id: createExerciseId(2, 2, 1), bodypart: 'Back', name: 'Overhand barbell row', sets: 5, reps: '10-12', restTime: '1.5 min', totalRestTime: 7.5 },
        { id: createExerciseId(2, 2, 2), bodypart: 'Back', name: 'Underhand cable row', sets: 4, reps: '10-12', restTime: '1 min', totalRestTime: 4 },
        { id: createExerciseId(2, 2, 3), bodypart: 'Back', name: 'Back extension', sets: 2, reps: '10-12', restTime: '1 min', totalRestTime: 2 },
        { id: createExerciseId(2, 2, 4), bodypart: 'Triceps', name: 'Weighted dip', sets: 5, reps: '10-12', restTime: '1.5 min', totalRestTime: 7.5, notes: ['If unable to perform bodyweight or weighted, then use assisted dip/pullup machine machine, as applicable'] },
        { id: createExerciseId(2, 2, 5), bodypart: 'Triceps', name: 'EZ-Bar Skullcrushers - flatbench', sets: 5, reps: '10-12', restTime: '1.5 min', totalRestTime: 7.5 },
        { id: createExerciseId(2, 2, 6), bodypart: 'Triceps', name: 'Rope pressdown', sets: 3, reps: '10-12', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(2, 2, 7), bodypart: 'Cardio', name: 'Jog', sets: 1, reps: '20 min', restTime: '', totalRestTime: 0 },
      ]
    },
    {
      dayNumber: 3,
      totalSets: 35,
      totalRestTime: 41,
      exercises: [
        { id: createExerciseId(2, 3, 0), bodypart: 'Shoulders', name: 'Barbell hang clean and jerk', sets: 3, reps: '6-8', restTime: '1.5 min', totalRestTime: 4.5 },
        { id: createExerciseId(2, 3, 1), bodypart: 'Shoulders', name: 'Seated dumbbell shoulder press', sets: 4, reps: '10-12', restTime: '1.5 min', totalRestTime: 6 },
        { id: createExerciseId(2, 3, 2), bodypart: 'Shoulders', name: 'Wide grip barbell upright row', sets: 5, reps: '10-12', restTime: '1.5 min', totalRestTime: 7.5 },
        { id: createExerciseId(2, 3, 3), bodypart: 'Shoulders', name: 'Dumbbell rear delt raise', sets: 3, reps: '10-12', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(2, 3, 4), bodypart: 'Shoulders', name: 'Dumbbell front raise', sets: 3, reps: '10-12', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(2, 3, 5), bodypart: 'Traps', name: 'Smith machine barbell shrug', sets: 5, reps: '10-12', restTime: '1 min', totalRestTime: 5 },
        { id: createExerciseId(2, 3, 6), bodypart: 'Traps', name: 'Standing dumbbell shrug', sets: 3, reps: '10-12', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(2, 3, 7), bodypart: 'Abs', name: 'Side plank', sets: 3, reps: '1 min', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(2, 3, 8), bodypart: 'Abs', name: 'Hanging knee raise', sets: 3, reps: '15-20', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(2, 3, 9), bodypart: 'Abs', name: 'Russian twist w/ medicine ball', sets: 3, reps: '12-15', restTime: '1 min', totalRestTime: 3 },
      ]
    },
    {
      dayNumber: 4,
      totalSets: 23,
      totalRestTime: 29,
      exercises: [
        { id: createExerciseId(2, 4, 0), bodypart: 'Legs', name: 'Back squat', sets: 5, reps: '10-12', restTime: '1.5 min', totalRestTime: 7.5 },
        { id: createExerciseId(2, 4, 1), bodypart: 'Legs', name: 'Deadlift', sets: 4, reps: '8-10', restTime: '1.5 min', totalRestTime: 6 },
        { id: createExerciseId(2, 4, 2), bodypart: 'Legs', name: 'Leg press', sets: 3, reps: '10-12', restTime: '1.5 min', totalRestTime: 4.5 },
        { id: createExerciseId(2, 4, 3), bodypart: 'Legs', name: 'Lying leg curl', sets: 3, reps: '10-12', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(2, 4, 4), bodypart: 'Legs', name: 'Leg extension', sets: 3, reps: '10-12', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(2, 4, 5), bodypart: 'Calves', name: 'Standing calf raise', sets: 5, reps: '10-12', restTime: '1 min', totalRestTime: 5 },
        { id: createExerciseId(2, 4, 6), bodypart: 'Cardio', name: 'Jog', sets: 1, reps: '20 min', restTime: '', totalRestTime: 0 },
      ]
    },
    {
      dayNumber: 5,
      totalSets: 32,
      totalRestTime: 34,
      exercises: [
        { id: createExerciseId(2, 5, 0), bodypart: 'Chest', name: 'Flat barbell benchpress', sets: 5, reps: '10-12', restTime: '1.5 min', totalRestTime: 7.5 },
        { id: createExerciseId(2, 5, 1), bodypart: 'Chest', name: 'Incline dumbbell flye', sets: 5, reps: '10-12', restTime: '1 min', totalRestTime: 5 },
        { id: createExerciseId(2, 5, 2), bodypart: 'Biceps', name: 'EZ bar curl', sets: 5, reps: '10-12', restTime: '1 min', totalRestTime: 5 },
        { id: createExerciseId(2, 5, 3), bodypart: 'Biceps', name: 'EZ bar preacher curl', sets: 3, reps: '12-15', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(2, 5, 4), bodypart: 'Triceps', name: 'Weighted dip', sets: 5, reps: '10-12', restTime: '1.5 min', totalRestTime: 7.5, notes: ['If unable to perform bodyweight or weighted, then use assisted dip/pullup machine machine, as applicable'] },
        { id: createExerciseId(2, 5, 5), bodypart: 'Triceps', name: 'Rope pressdown', sets: 3, reps: '12-15', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(2, 5, 6), bodypart: 'Abs', name: 'Side crunch', sets: 3, reps: '15', restTime: '.5 min', totalRestTime: 1.5 },
        { id: createExerciseId(2, 5, 7), bodypart: 'Abs', name: 'Reverse crunch', sets: 3, reps: '15', restTime: '', totalRestTime: 0 },
        { id: createExerciseId(2, 5, 8), bodypart: 'Abs', name: 'Leg raises', sets: 3, reps: '20', restTime: '.5 min', totalRestTime: 1.5 },
      ]
    }
  ]
};

// Week 3 - Split (1) - Hypertrophy - Growth Hormone Release Week
const week3: Week = {
  weekNumber: 3,
  split: 'Split (1)',
  goal: 'Hypertrophy',
  description: 'Growth Hormone Release Week',
  days: [
    {
      dayNumber: 1,
      totalSets: 40,
      totalRestTime: 44.5,
      exercises: [
        { id: createExerciseId(3, 1, 0), bodypart: 'Back', name: 'Wide-grip pullup (weighted if needed)', sets: 5, reps: '8-10', restTime: '1.5 min', totalRestTime: 7.5, notes: ['If unable to reach target rep range, complete set(s) doing lat pulldowns', 'If unable to perform bodyweight or weighted, then use assisted dip/pullup machine machine, as applicable'] },
        { id: createExerciseId(3, 1, 1), bodypart: 'Back', name: 'Overhand barbell row', sets: 4, reps: '8-10', restTime: '1.5 min', totalRestTime: 6, notes: ['Perform rest-pause technique on last 2 sets'] },
        { id: createExerciseId(3, 1, 2), bodypart: 'Back', name: 'Underhand cable row', sets: 4, reps: '8-10', restTime: '1 min', totalRestTime: 4, notes: ['Perform drop-set on last 2 sets'] },
        { id: createExerciseId(3, 1, 3), bodypart: 'Back', name: 'Back extension', sets: 2, reps: '10-12', restTime: '1 min', totalRestTime: 2 },
        { id: createExerciseId(3, 1, 4), bodypart: 'Triceps', name: 'Weighted dip', sets: 5, reps: '8-10', restTime: '1.5 min', totalRestTime: 7.5, notes: ['Perform rest-pause technique on last 2 sets', 'If unable to perform bodyweight or weighted, then use assisted dip/pullup machine machine, as applicable'] },
        { id: createExerciseId(3, 1, 5), bodypart: 'Triceps', name: 'EZ-Bar Skullcrushers - flatbench', sets: 4, reps: '8-10', restTime: '1.5 min', totalRestTime: 6, notes: ['Perform 5 negatives upon failure on last 2 sets (can close grip bench it on the way up for skullcrushers)'] },
        { id: createExerciseId(3, 1, 6), bodypart: 'Triceps', name: 'Rope pressdown', sets: 4, reps: '8-10', restTime: '1 min', totalRestTime: 4, notes: ['Perform drop set on last two sets but go to lower cable machine to perform'] },
        { id: createExerciseId(3, 1, 7), bodypart: 'Abs', name: 'Plank', sets: 3, reps: '1 min', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(3, 1, 8), bodypart: 'Abs', name: 'Exercise ball crunch - Weighted with medicine ball', sets: 3, reps: '15', restTime: '.5 min', totalRestTime: 1.5 },
        { id: createExerciseId(3, 1, 9), bodypart: 'Abs', name: 'Side crunch', sets: 3, reps: '20', restTime: '.5 min', totalRestTime: 1.5 },
        { id: createExerciseId(3, 1, 10), bodypart: 'Abs', name: 'Reverse crunch', sets: 3, reps: '20', restTime: '', totalRestTime: 0 },
        { id: createExerciseId(3, 1, 11), bodypart: 'Abs', name: 'Leg raises', sets: 3, reps: '25', restTime: '.5 min', totalRestTime: 1.5 },
      ]
    },
    {
      dayNumber: 2,
      totalSets: 25,
      totalRestTime: 29.5,
      exercises: [
        { id: createExerciseId(3, 2, 0), bodypart: 'Shoulders', name: 'Barbell hang clean and jerk', sets: 3, reps: '5', restTime: '1.5 min', totalRestTime: 4.5 },
        { id: createExerciseId(3, 2, 1), bodypart: 'Shoulders', name: 'Seated dumbbell shoulder press', sets: 4, reps: '8-10', restTime: '1.5 min', totalRestTime: 6, notes: ['Perform drop-set on last 2 sets'] },
        { id: createExerciseId(3, 2, 2), bodypart: 'Shoulders', name: 'Wide grip barbell upright row', sets: 4, reps: '8-10', restTime: '1.5 min', totalRestTime: 6, notes: ['Perform rest-pause technique on last 2 sets'] },
        { id: createExerciseId(3, 2, 3), bodypart: 'Shoulders', name: 'Dumbbell rear delt raise', sets: 3, reps: '8-10', restTime: '1 min', totalRestTime: 3, notes: ['Perform drop set on last two sets but go to lower cable machine to perform'] },
        { id: createExerciseId(3, 2, 4), bodypart: 'Shoulders', name: 'Dumbbell front raise', sets: 3, reps: '8-10', restTime: '1 min', totalRestTime: 3, notes: ['Perform drop set on last two sets but go to lower cable machine to perform'] },
        { id: createExerciseId(3, 2, 5), bodypart: 'Traps', name: 'Smith machine barbell shrug', sets: 4, reps: '8-10', restTime: '1 min', totalRestTime: 4, notes: ['Perform rest-pause technique on last 2 sets'] },
        { id: createExerciseId(3, 2, 6), bodypart: 'Traps', name: 'Standing dumbbell shrug', sets: 3, reps: '8-10', restTime: '1 min', totalRestTime: 3, notes: ['Perform drop-set on last 2 sets'] },
        { id: createExerciseId(3, 2, 7), bodypart: 'Cardio', name: 'Jog', sets: 1, reps: '20 min', restTime: '', totalRestTime: 0 },
      ]
    },
    {
      dayNumber: 3,
      totalSets: 33,
      totalRestTime: 39.5,
      exercises: [
        { id: createExerciseId(3, 3, 0), bodypart: 'Legs', name: 'Back squat', sets: 5, reps: '8-10', restTime: '1.5 min', totalRestTime: 7.5, notes: ['Perform drop-set on last 2 sets'] },
        { id: createExerciseId(3, 3, 1), bodypart: 'Legs', name: 'Deadlift', sets: 4, reps: '8-10', restTime: '1.5 min', totalRestTime: 6 },
        { id: createExerciseId(3, 3, 2), bodypart: 'Legs', name: 'Leg press', sets: 4, reps: '8-10', restTime: '1.5 min', totalRestTime: 6, notes: ['Perform 5 negatives upon failure on last 2 sets (can close grip bench it on the way up for skullcrushers)'] },
        { id: createExerciseId(3, 3, 3), bodypart: 'Legs', name: 'Lying leg curl', sets: 3, reps: '8-10', restTime: '1 min', totalRestTime: 3, notes: ['Perform drop-set on last 2 sets'] },
        { id: createExerciseId(3, 3, 4), bodypart: 'Legs', name: 'Leg extension', sets: 3, reps: '8-10', restTime: '1 min', totalRestTime: 3, notes: ['Perform drop-set on last 2 sets'] },
        { id: createExerciseId(3, 3, 5), bodypart: 'Calves', name: 'Standing calf raise', sets: 5, reps: '8-10', restTime: '1 min', totalRestTime: 5, notes: ['On last 2 sets, perform peak contraction on last half of set'] },
        { id: createExerciseId(3, 3, 6), bodypart: 'Abs', name: 'Side plank', sets: 3, reps: '1 min', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(3, 3, 7), bodypart: 'Abs', name: 'Weighted hanging knee raise', sets: 3, reps: '15-20', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(3, 3, 8), bodypart: 'Abs', name: 'Russian twist w/ medicine ball', sets: 3, reps: '12-15', restTime: '1 min', totalRestTime: 3 },
      ]
    },
    {
      dayNumber: 4,
      totalSets: 29,
      totalRestTime: 37,
      exercises: [
        { id: createExerciseId(3, 4, 0), bodypart: 'Chest', name: 'Incline barbell benchpress', sets: 5, reps: '8-10', restTime: '1.5 min', totalRestTime: 7.5, notes: ['Perform drop-set on last 2 sets'] },
        { id: createExerciseId(3, 4, 1), bodypart: 'Chest', name: 'Flat dumbbell benchpress', sets: 4, reps: '8-10', restTime: '1.5 min', totalRestTime: 6, notes: ['Perform drop-set on last 2 sets'] },
        { id: createExerciseId(3, 4, 2), bodypart: 'Chest', name: 'Machine flye', sets: 4, reps: '8-10', restTime: '1 min', totalRestTime: 4, notes: ['On last 2 sets, perform peak contraction on last half of set'] },
        { id: createExerciseId(3, 4, 3), bodypart: 'Chest', name: 'Pushups', sets: 2, reps: 'To failure', restTime: '1 min', totalRestTime: 2, notes: ['Perform 5 negatives upon failure on last 2 sets (can close grip bench it on the way up for skullcrushers)'] },
        { id: createExerciseId(3, 4, 4), bodypart: 'Biceps', name: 'Wide-grip barbell curl', sets: 5, reps: '8-10', restTime: '1.5 min', totalRestTime: 7.5, notes: ['Perform 5 negatives upon failure on last 2 sets (can close grip bench it on the way up for skullcrushers)'] },
        { id: createExerciseId(3, 4, 5), bodypart: 'Biceps', name: 'Reverse EZ bar curl', sets: 4, reps: '8-10', restTime: '1.5 min', totalRestTime: 6, notes: ['Perform rest-pause technique on last 2 sets'] },
        { id: createExerciseId(3, 4, 6), bodypart: 'Biceps', name: 'Cable preacher curl', sets: 4, reps: '8-10', restTime: '1 min', totalRestTime: 4, notes: ['Perform drop-set on last 2 sets'] },
        { id: createExerciseId(3, 4, 7), bodypart: 'Cardio', name: 'Jog', sets: 1, reps: '20 min', restTime: '', totalRestTime: 0 },
      ]
    },
    {
      dayNumber: 5,
      totalSets: 38,
      totalRestTime: 43.5,
      exercises: [
        { id: createExerciseId(3, 5, 0), bodypart: 'Back', name: 'Wide-grip lat pulldown', sets: 5, reps: '8-10', restTime: '1.5 min', totalRestTime: 7.5, notes: ['Last two sets, superset with lat pulldown and aim to get 3-5 reps with lat pulldown machine'] },
        { id: createExerciseId(3, 5, 1), bodypart: 'Back', name: 'Seated hammer-strength row', sets: 4, reps: '8-10', restTime: '1.5 min', totalRestTime: 6, notes: ['Perform rest-pause technique on last 2 sets'] },
        { id: createExerciseId(3, 5, 2), bodypart: 'Back', name: 'Close-grip cable row', sets: 4, reps: '8-10', restTime: '1 min', totalRestTime: 4, notes: ['Perform drop-set on last 2 sets'] },
        { id: createExerciseId(3, 5, 3), bodypart: 'Back', name: 'Back extension', sets: 2, reps: '8-10', restTime: '1 min', totalRestTime: 2 },
        { id: createExerciseId(3, 5, 4), bodypart: 'Traps', name: 'Hex bar shrug', sets: 5, reps: '8-10', restTime: '1.5 min', totalRestTime: 7.5, notes: ['Perform rest-pause technique on last 2 sets'] },
        { id: createExerciseId(3, 5, 5), bodypart: 'Traps', name: 'Incline bench dumbbell shrug', sets: 4, reps: '8-10', restTime: '1 min', totalRestTime: 4 },
        { id: createExerciseId(3, 5, 6), bodypart: 'Calves', name: 'Leg press calf raise', sets: 5, reps: '8-10', restTime: '1 min', totalRestTime: 5, notes: ['On last 2 sets, perform peak contraction on last half of set'] },
        { id: createExerciseId(3, 5, 7), bodypart: 'Abs', name: 'Plank', sets: 3, reps: '1 min', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(3, 5, 8), bodypart: 'Abs', name: 'Alternating sides cable crunch', sets: 3, reps: '15', restTime: '.5 min', totalRestTime: 1.5 },
        { id: createExerciseId(3, 5, 9), bodypart: 'Abs', name: 'Reverse crunch', sets: 3, reps: '20', restTime: '', totalRestTime: 0 },
        { id: createExerciseId(3, 5, 10), bodypart: 'Abs', name: 'Leg raises', sets: 3, reps: '25', restTime: '1 min', totalRestTime: 3 },
      ]
    }
  ]
};

// Week 4 - Split (2) - Hypertrophy - Growth Hormone Release Week
const week4: Week = {
  weekNumber: 4,
  split: 'Split (2)',
  goal: 'Hypertrophy',
  description: 'Growth Hormone Release Week',
  days: [
    {
      dayNumber: 1,
      totalSets: 40,
      totalRestTime: 44.5,
      exercises: [
        { id: createExerciseId(4, 1, 0), bodypart: 'Chest', name: 'Incline barbell benchpress', sets: 5, reps: '8-10', restTime: '1.5 min', totalRestTime: 7.5, notes: ['Perform drop-set on last 2 sets'] },
        { id: createExerciseId(4, 1, 1), bodypart: 'Chest', name: 'Flat dumbbell benchpress', sets: 4, reps: '8-10', restTime: '1.5 min', totalRestTime: 6, notes: ['Perform drop-set on last 2 sets'] },
        { id: createExerciseId(4, 1, 2), bodypart: 'Chest', name: 'Machine flye', sets: 4, reps: '8-10', restTime: '1 min', totalRestTime: 4, notes: ['On last 2 sets, perform peak contraction on last half of set'] },
        { id: createExerciseId(4, 1, 3), bodypart: 'Chest', name: 'Pushups', sets: 2, reps: 'To failure', restTime: '1 min', totalRestTime: 2, notes: ['Perform 5 negatives upon failure on last 2 sets (can close grip bench it on the way up for skullcrushers)'] },
        { id: createExerciseId(4, 1, 4), bodypart: 'Biceps', name: 'Wide-grip barbell curl', sets: 5, reps: '8-10', restTime: '1.5 min', totalRestTime: 7.5, notes: ['Perform 5 negatives upon failure on last 2 sets (can close grip bench it on the way up for skullcrushers)'] },
        { id: createExerciseId(4, 1, 5), bodypart: 'Biceps', name: 'Reverse EZ bar curl', sets: 4, reps: '8-10', restTime: '1.5 min', totalRestTime: 6, notes: ['Perform rest-pause technique on last 2 sets'] },
        { id: createExerciseId(4, 1, 6), bodypart: 'Biceps', name: 'Cable preacher curl', sets: 4, reps: '8-10', restTime: '1 min', totalRestTime: 4, notes: ['Perform drop-set on last 2 sets'] },
        { id: createExerciseId(4, 1, 7), bodypart: 'Abs', name: 'Plank', sets: 3, reps: '1 min', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(4, 1, 8), bodypart: 'Abs', name: 'Exercise ball crunch - Weighted with medicine ball', sets: 3, reps: '15', restTime: '.5 min', totalRestTime: 1.5 },
        { id: createExerciseId(4, 1, 9), bodypart: 'Abs', name: 'Side crunch', sets: 3, reps: '20', restTime: '.5 min', totalRestTime: 1.5 },
        { id: createExerciseId(4, 1, 10), bodypart: 'Abs', name: 'Reverse crunch', sets: 3, reps: '20', restTime: '', totalRestTime: 0 },
        { id: createExerciseId(4, 1, 11), bodypart: 'Abs', name: 'Leg raises', sets: 3, reps: '25', restTime: '.5 min', totalRestTime: 1.5 },
      ]
    },
    {
      dayNumber: 2,
      totalSets: 29,
      totalRestTime: 37,
      exercises: [
        { id: createExerciseId(4, 2, 0), bodypart: 'Back', name: 'Wide-grip pullup (weighted if needed)', sets: 5, reps: '8-10', restTime: '1.5 min', totalRestTime: 7.5, notes: ['If unable to reach target rep range, complete set(s) doing lat pulldowns', 'If unable to perform bodyweight or weighted, then use assisted dip/pullup machine machine, as applicable'] },
        { id: createExerciseId(4, 2, 1), bodypart: 'Back', name: 'Overhand barbell row', sets: 4, reps: '8-10', restTime: '1.5 min', totalRestTime: 6, notes: ['Perform rest-pause technique on last 2 sets'] },
        { id: createExerciseId(4, 2, 2), bodypart: 'Back', name: 'Underhand cable row', sets: 4, reps: '8-10', restTime: '1 min', totalRestTime: 4, notes: ['Perform drop-set on last 2 sets'] },
        { id: createExerciseId(4, 2, 3), bodypart: 'Back', name: 'Back extension', sets: 2, reps: '10-12', restTime: '1 min', totalRestTime: 2 },
        { id: createExerciseId(4, 2, 4), bodypart: 'Triceps', name: 'Weighted dip', sets: 5, reps: '8-10', restTime: '1.5 min', totalRestTime: 7.5, notes: ['Perform rest-pause technique on last 2 sets', 'If unable to perform bodyweight or weighted, then use assisted dip/pullup machine machine, as applicable'] },
        { id: createExerciseId(4, 2, 5), bodypart: 'Triceps', name: 'EZ-Bar Skullcrushers - flatbench', sets: 4, reps: '8-10', restTime: '1.5 min', totalRestTime: 6, notes: ['Perform 5 negatives upon failure on last 2 sets (can close grip bench it on the way up for skullcrushers)'] },
        { id: createExerciseId(4, 2, 6), bodypart: 'Triceps', name: 'Rope pressdown', sets: 4, reps: '8-10', restTime: '1 min', totalRestTime: 4, notes: ['Perform drop set on last two sets but go to lower cable machine to perform'] },
        { id: createExerciseId(4, 2, 7), bodypart: 'Cardio', name: 'Jog', sets: 1, reps: '20 min', restTime: '', totalRestTime: 0 },
      ]
    },
    {
      dayNumber: 3,
      totalSets: 33,
      totalRestTime: 38.5,
      exercises: [
        { id: createExerciseId(4, 3, 0), bodypart: 'Shoulders', name: 'Barbell hang clean and jerk', sets: 3, reps: '5', restTime: '1.5 min', totalRestTime: 4.5 },
        { id: createExerciseId(4, 3, 1), bodypart: 'Shoulders', name: 'Seated dumbbell shoulder press', sets: 4, reps: '8-10', restTime: '1.5 min', totalRestTime: 6, notes: ['Perform drop-set on last 2 sets'] },
        { id: createExerciseId(4, 3, 2), bodypart: 'Shoulders', name: 'Wide grip barbell upright row', sets: 4, reps: '8-10', restTime: '1.5 min', totalRestTime: 6, notes: ['Perform rest-pause technique on last 2 sets'] },
        { id: createExerciseId(4, 3, 3), bodypart: 'Shoulders', name: 'Dumbbell rear delt raise', sets: 3, reps: '8-10', restTime: '1 min', totalRestTime: 3, notes: ['Perform drop set on last two sets but go to lower cable machine to perform'] },
        { id: createExerciseId(4, 3, 4), bodypart: 'Shoulders', name: 'Dumbbell front raise', sets: 3, reps: '8-10', restTime: '1 min', totalRestTime: 3, notes: ['Perform drop set on last two sets but go to lower cable machine to perform'] },
        { id: createExerciseId(4, 3, 5), bodypart: 'Traps', name: 'Smith machine barbell shrug', sets: 4, reps: '8-10', restTime: '1 min', totalRestTime: 4, notes: ['Perform rest-pause technique on last 2 sets'] },
        { id: createExerciseId(4, 3, 6), bodypart: 'Traps', name: 'Standing dumbbell shrug', sets: 3, reps: '8-10', restTime: '1 min', totalRestTime: 3, notes: ['Perform drop-set on last 2 sets'] },
        { id: createExerciseId(4, 3, 7), bodypart: 'Abs', name: 'Side plank', sets: 3, reps: '1 min', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(4, 3, 8), bodypart: 'Abs', name: 'Weighted hanging knee raise', sets: 3, reps: '15-20', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(4, 3, 9), bodypart: 'Abs', name: 'Russian twist w/ medicine ball', sets: 3, reps: '12-15', restTime: '1 min', totalRestTime: 3 },
      ]
    },
    {
      dayNumber: 4,
      totalSets: 25,
      totalRestTime: 30.5,
      exercises: [
        { id: createExerciseId(4, 4, 0), bodypart: 'Legs', name: 'Back squat', sets: 5, reps: '8-10', restTime: '1.5 min', totalRestTime: 7.5, notes: ['Perform drop-set on last 2 sets'] },
        { id: createExerciseId(4, 4, 1), bodypart: 'Legs', name: 'Deadlift', sets: 4, reps: '8-10', restTime: '1.5 min', totalRestTime: 6 },
        { id: createExerciseId(4, 4, 2), bodypart: 'Legs', name: 'Leg press', sets: 4, reps: '8-10', restTime: '1.5 min', totalRestTime: 6, notes: ['Perform 5 negatives upon failure on last 2 sets (can close grip bench it on the way up for skullcrushers)'] },
        { id: createExerciseId(4, 4, 3), bodypart: 'Legs', name: 'Lying leg curl', sets: 3, reps: '8-10', restTime: '1 min', totalRestTime: 3, notes: ['Perform drop-set on last 2 sets'] },
        { id: createExerciseId(4, 4, 4), bodypart: 'Legs', name: 'Leg extension', sets: 3, reps: '8-10', restTime: '1 min', totalRestTime: 3, notes: ['Perform drop-set on last 2 sets'] },
        { id: createExerciseId(4, 4, 5), bodypart: 'Calves', name: 'Standing calf raise', sets: 5, reps: '8-10', restTime: '1 min', totalRestTime: 5, notes: ['On last 2 sets, perform peak contraction on last half of set'] },
        { id: createExerciseId(4, 4, 6), bodypart: 'Cardio', name: 'Jog', sets: 1, reps: '20 min', restTime: '', totalRestTime: 0 },
      ]
    },
    {
      dayNumber: 5,
      totalSets: 31,
      totalRestTime: 33,
      exercises: [
        { id: createExerciseId(4, 5, 0), bodypart: 'Chest', name: 'Flat barbell benchpress', sets: 5, reps: '8-10', restTime: '1.5 min', totalRestTime: 7.5, notes: ['Perform drop-set on last 2 sets'] },
        { id: createExerciseId(4, 5, 1), bodypart: 'Chest', name: 'Incline dumbbell flye', sets: 4, reps: '8-10', restTime: '1 min', totalRestTime: 4, notes: ['On last 2 sets, perform peak contraction on last half of set'] },
        { id: createExerciseId(4, 5, 2), bodypart: 'Biceps', name: 'EZ bar curl', sets: 5, reps: '8-10', restTime: '1 min', totalRestTime: 5, notes: ['Perform 5 negatives upon failure on last 2 sets (can close grip bench it on the way up for skullcrushers)'] },
        { id: createExerciseId(4, 5, 3), bodypart: 'Biceps', name: 'EZ bar preacher curl', sets: 3, reps: '8-10', restTime: '1 min', totalRestTime: 3, notes: ['On last 2 sets, perform peak contraction on last half of set'] },
        { id: createExerciseId(4, 5, 4), bodypart: 'Triceps', name: 'Weighted dip', sets: 5, reps: '8-10', restTime: '1.5 min', totalRestTime: 7.5, notes: ['Perform rest-pause technique on last 2 sets', 'If unable to perform bodyweight or weighted, then use assisted dip/pullup machine machine, as applicable'] },
        { id: createExerciseId(4, 5, 5), bodypart: 'Triceps', name: 'Rope pressdown', sets: 3, reps: '8-10', restTime: '1 min', totalRestTime: 3, notes: ['On last 2 sets, perform peak contraction on last half of set'] },
        { id: createExerciseId(4, 5, 6), bodypart: 'Abs', name: 'Side crunch', sets: 3, reps: '15', restTime: '.5 min', totalRestTime: 1.5 },
        { id: createExerciseId(4, 5, 7), bodypart: 'Abs', name: 'Reverse crunch', sets: 3, reps: '20', restTime: '', totalRestTime: 0 },
        { id: createExerciseId(4, 5, 8), bodypart: 'Abs', name: 'Leg raises', sets: 3, reps: '25', restTime: '.5 min', totalRestTime: 1.5 },
      ]
    }
  ]
};

// Week 5 - Split (3) - Shock muscles into growth - Descending weight pyramids
const week5: Week = {
  weekNumber: 5,
  split: 'Split (3)',
  goal: 'Shock muscles into growth',
  description: 'Descending weight pyramids',
  days: [
    {
      dayNumber: 1,
      totalSets: 31,
      totalRestTime: 44.5,
      exercises: [
        { id: createExerciseId(5, 1, 0), bodypart: 'Back', name: 'Overhand barbell row', sets: 5, reps: '4, 6, 8, 10, 12', restTime: '2 min', totalRestTime: 10 },
        { id: createExerciseId(5, 1, 1), bodypart: 'Back', name: 'Wide-grip pullup (weighted if needed)', sets: 5, reps: '4, 6, 8, 10, 12', restTime: '1.5 min', totalRestTime: 7.5, notes: ['If unable to reach target rep range, complete set(s) doing lat pulldowns'] },
        { id: createExerciseId(5, 1, 2), bodypart: 'Back', name: 'Underhand cable row', sets: 3, reps: '6, 10, 12', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(5, 1, 3), bodypart: 'Back', name: 'Back extension', sets: 2, reps: '10-12', restTime: '1 min', totalRestTime: 2 },
        { id: createExerciseId(5, 1, 4), bodypart: 'Biceps & Forearms', name: 'Wide grip barbell curl', sets: 5, reps: '4, 6, 8, 10, 12', restTime: '1.5 min', totalRestTime: 7.5 },
        { id: createExerciseId(5, 1, 5), bodypart: 'Biceps & Forearms', name: 'Reverse EZ bar curl', sets: 4, reps: '6, 8, 10, 12', restTime: '1.5 min', totalRestTime: 6 },
        { id: createExerciseId(5, 1, 6), bodypart: 'Biceps & Forearms', name: 'Cable preacher curl', sets: 3, reps: '6, 10, 12', restTime: '1.5 min', totalRestTime: 4.5 },
        { id: createExerciseId(5, 1, 7), bodypart: 'Biceps & Forearms', name: 'Spider curl', sets: 2, reps: '12-15', restTime: '1 min', totalRestTime: 2 },
        { id: createExerciseId(5, 1, 8), bodypart: 'Biceps & Forearms', name: 'Barbell wrist curl', sets: 2, reps: '12-15', restTime: '1 min', totalRestTime: 2 },
      ]
    },
    {
      dayNumber: 2,
      totalSets: 12,
      totalRestTime: 7.5,
      exercises: [
        { id: createExerciseId(5, 2, 0), bodypart: 'Abs', name: 'Plank', sets: 3, reps: '1 min', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(5, 2, 1), bodypart: 'Abs', name: 'Exercise ball crunch - Weighted with medicine ball', sets: 3, reps: '15', restTime: '.5 min', totalRestTime: 1.5 },
        { id: createExerciseId(5, 2, 2), bodypart: 'Abs', name: 'Side crunch', sets: 3, reps: '20', restTime: '.5 min', totalRestTime: 1.5 },
        { id: createExerciseId(5, 2, 3), bodypart: 'Abs', name: 'Reverse crunch', sets: 3, reps: '20', restTime: '', totalRestTime: 0 },
        { id: createExerciseId(5, 2, 4), bodypart: 'Abs', name: 'Leg raises', sets: 3, reps: '25', restTime: '.5 min', totalRestTime: 1.5 },
        { id: createExerciseId(5, 2, 5), bodypart: 'Cardio', name: 'Cardio for 20-30 min', sets: 1, reps: '20-30 min', restTime: '', totalRestTime: 0 },
      ]
    },
    {
      dayNumber: 3,
      totalSets: 31,
      totalRestTime: 46,
      exercises: [
        { id: createExerciseId(5, 3, 0), bodypart: 'Chest', name: 'Incline barbell benchpress', sets: 5, reps: '4, 6, 8, 10, 12', restTime: '2 min', totalRestTime: 10 },
        { id: createExerciseId(5, 3, 1), bodypart: 'Chest', name: 'Flat dumbbell benchpress', sets: 5, reps: '4, 6, 8, 10, 12', restTime: '2 min', totalRestTime: 10 },
        { id: createExerciseId(5, 3, 2), bodypart: 'Chest', name: 'Machine flye', sets: 3, reps: '6, 10, 12', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(5, 3, 3), bodypart: 'Chest', name: 'Pushups (with plate on back)', sets: 2, reps: 'To failure', restTime: '1 min', totalRestTime: 2 },
        { id: createExerciseId(5, 3, 4), bodypart: 'Shoulders', name: 'Seated dumbbell shoulder press', sets: 4, reps: '6, 8, 10, 12', restTime: '2 min', totalRestTime: 8 },
        { id: createExerciseId(5, 3, 5), bodypart: 'Shoulders', name: 'Dumbbell rear delt raise', sets: 4, reps: '8, 8, 10, 12', restTime: '1 min', totalRestTime: 4 },
        { id: createExerciseId(5, 3, 6), bodypart: 'Shoulders', name: 'Dumbbell lateral raise', sets: 4, reps: '8, 8, 10, 12', restTime: '1 min', totalRestTime: 4 },
        { id: createExerciseId(5, 3, 7), bodypart: 'Triceps', name: 'EZ bar skullcrushers', sets: 2, reps: '12-15', restTime: '1.5 min', totalRestTime: 3 },
        { id: createExerciseId(5, 3, 8), bodypart: 'Triceps', name: 'Cable pressdown', sets: 2, reps: '12-15', restTime: '1 min', totalRestTime: 2 },
      ]
    },
    {
      dayNumber: 4,
      totalSets: 9,
      totalRestTime: 9,
      exercises: [
        { id: createExerciseId(5, 4, 0), bodypart: 'Abs', name: 'Side plank', sets: 3, reps: '1 min', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(5, 4, 1), bodypart: 'Abs', name: 'Weighted hanging knee raise', sets: 3, reps: '15-20', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(5, 4, 2), bodypart: 'Abs', name: 'Russian twist w/ medicine ball', sets: 3, reps: '12-15', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(5, 4, 3), bodypart: 'Cardio', name: 'Cardio for 20-30 min', sets: 1, reps: '20-30 min', restTime: '', totalRestTime: 0 },
      ]
    },
    {
      dayNumber: 5,
      totalSets: 35,
      totalRestTime: 47,
      exercises: [
        { id: createExerciseId(5, 5, 0), bodypart: 'Legs', name: 'Back squat', sets: 5, reps: '4, 6, 8, 10, 12', restTime: '2 min', totalRestTime: 10 },
        { id: createExerciseId(5, 5, 1), bodypart: 'Legs', name: 'Deadlift', sets: 5, reps: '4, 4, 6, 6, 8', restTime: '2 min', totalRestTime: 10 },
        { id: createExerciseId(5, 5, 2), bodypart: 'Legs', name: 'Leg press', sets: 3, reps: '6, 10, 12', restTime: '1.5 min', totalRestTime: 4.5 },
        { id: createExerciseId(5, 5, 3), bodypart: 'Legs', name: 'Lying leg curl', sets: 3, reps: '8, 8, 12', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(5, 5, 4), bodypart: 'Legs', name: 'Leg extension', sets: 3, reps: '8, 8, 12', restTime: '1 min', totalRestTime: 3 },
        { id: createExerciseId(5, 5, 5), bodypart: 'Traps', name: 'Barbell shrug', sets: 4, reps: '6, 8, 10, 12', restTime: '1.5 min', totalRestTime: 6 },
        { id: createExerciseId(5, 5, 6), bodypart: 'Traps', name: 'Rope face pulls', sets: 3, reps: '8, 8, 12', restTime: '.5 min', totalRestTime: 1.5 },
        { id: createExerciseId(5, 5, 7), bodypart: 'Traps', name: 'Standing dumbbell shrug', sets: 2, reps: '20', restTime: '1 min', totalRestTime: 2 },
        { id: createExerciseId(5, 5, 8), bodypart: 'Calves', name: 'Standing calf raise', sets: 5, reps: '6, 8, 10, 12, 15', restTime: '1 min', totalRestTime: 5 },
        { id: createExerciseId(5, 5, 9), bodypart: 'Calves', name: 'Leg press calf raise', sets: 2, reps: '10-12', restTime: '1 min', totalRestTime: 2 },
      ]
    }
  ]
};

// Phase I
export const phase1: Phase = {
  id: 'phase1',
  name: 'Phase I',
  description: 'Foundation & Growth - 5 Week Program',
  weeks: [week1, week2, week3, week4, week5],
  isActive: true
};

// Placeholder phases for future
export const phase2: Phase = {
  id: 'phase2',
  name: 'Phase II',
  description: 'Coming Soon',
  weeks: [],
  isActive: false
};

export const phase3: Phase = {
  id: 'phase3',
  name: 'Phase III',
  description: 'Coming Soon',
  weeks: [],
  isActive: false
};

export const allPhases: Phase[] = [phase1, phase2, phase3];

// Helper functions
export const getPhaseById = (id: string): Phase | undefined => {
  return allPhases.find(p => p.id === id);
};

export const getWeekByNumber = (phaseId: string, weekNumber: number): Week | undefined => {
  const phase = getPhaseById(phaseId);
  return phase?.weeks.find(w => w.weekNumber === weekNumber);
};

export const getDayByNumber = (phaseId: string, weekNumber: number, dayNumber: number): Day | undefined => {
  const week = getWeekByNumber(phaseId, weekNumber);
  return week?.days.find(d => d.dayNumber === dayNumber);
};

// Get unique body parts for a day
export const getBodyPartsForDay = (day: Day): string[] => {
  const bodyParts = new Set<string>();
  day.exercises.forEach(ex => bodyParts.add(ex.bodypart));
  return Array.from(bodyParts);
};

