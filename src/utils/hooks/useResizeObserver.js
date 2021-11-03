import { useEffect, useRef } from 'react';

export default function useResizeObserver(elementRef, callback) {
  const observer = useRef();

  useEffect(() => {
    if (!elementRef.current) {
      return;
    }

    observer.current = new ResizeObserver(callback);
    observer.current.observe(elementRef.current);

    return () => observer.current.disconnect();
  }, [elementRef, callback]);
}
