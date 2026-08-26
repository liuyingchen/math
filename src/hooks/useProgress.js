import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'math-spark-progress-v2';

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { total: 0, correct: 0, streak: 0, mistakes: [], answers: {} };
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function useProgress() {
  const [progress, setProgress] = useState(loadProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const recordAnswer = useCallback((questionId, isCorrect) => {
    setProgress(prev => {
      const answers = { ...prev.answers, [questionId]: isCorrect };
      let mistakes = [...prev.mistakes];
      if (isCorrect) {
        mistakes = mistakes.filter(id => id !== questionId);
      } else if (!mistakes.includes(questionId)) {
        mistakes.push(questionId);
      }
      const streak = isCorrect ? prev.streak + 1 : 0;
      const correct = Object.values(answers).filter(Boolean).length;
      return {
        total: Object.keys(answers).length,
        correct,
        streak,
        mistakes,
        answers,
      };
    });
  }, []);

  const removeFromMistakes = useCallback((questionId) => {
    setProgress(prev => ({
      ...prev,
      mistakes: prev.mistakes.filter(id => id !== questionId),
    }));
  }, []);

  const resetProgress = useCallback(() => {
    setProgress({ total: 0, correct: 0, streak: 0, mistakes: [], answers: {} });
  }, []);

  return { progress, recordAnswer, removeFromMistakes, resetProgress };
}
