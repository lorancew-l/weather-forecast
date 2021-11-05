import { useCallback, useEffect, useRef } from 'react';

export default function useDebounce(func, timeout) {
  const timeoutRef = useRef();

  function clearTimer() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }

  useEffect(() => clearTimer(), []);

  const debouncedFunction = useCallback(
    (...args) => {
      clearTimer();
      timeoutRef.current = setTimeout(() => {
        func(...args);
      }, timeout);
    },
    [func, timeout]
  );

  return {
    debouncedFunction,
    cancelDebouncedFunction: clearTimer,
  };
}
