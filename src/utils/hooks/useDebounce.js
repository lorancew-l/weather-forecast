import { useEffect, useRef } from 'react';

export default function useDebounce(func, timeout) {
  const timeoutRef = useRef();

  function clearTimer() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }

  useEffect(() => clearTimer(), []);

  return {
    debouncedFunction(...args) {
      clearTimer();
      timeoutRef.current = setTimeout(() => {
        func(...args);
      }, timeout);
    },
    cancelDebouncedFunction: clearTimer,
  };
}
