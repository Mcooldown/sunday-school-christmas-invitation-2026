import { useEffect, useState } from 'react';

export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

function computeRemainingTime(targetMs: number): CountdownState {
  const diffMs = targetMs - Date.now();
  if (diffMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, isComplete: false };
}

/**
 * Counts down in real time to an ISO timestamp with explicit timezone offset.
 */
export function useCountdown(targetIsoDate: string): CountdownState {
  const targetMs = Date.parse(targetIsoDate);
  const [remaining, setRemaining] = useState<CountdownState>(() =>
    computeRemainingTime(targetMs)
  );

  useEffect(() => {
    setRemaining(computeRemainingTime(targetMs));
    const timerId = window.setInterval(() => {
      const next = computeRemainingTime(targetMs);
      setRemaining(next);
      if (next.isComplete) {
        window.clearInterval(timerId);
      }
    }, 1000);

    return () => window.clearInterval(timerId);
  }, [targetMs]);

  return remaining;
}
