import { useEffect, useRef } from 'react';

export default function useResizeObserver(
  elementRef,
  callback,
  callbackOnMount = false
) {
  const observer = useRef();
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    const resizeCallback = () => {
      if (!callbackOnMount && isFirstRenderRef.current) {
        isFirstRenderRef.current = false;
      } else {
        callback();
      }
    };

    if (!elementRef.current) {
      return;
    }

    observer.current = new ResizeObserver(resizeCallback);
    observer.current.observe(elementRef.current);

    return () => observer.current.disconnect();
  }, [elementRef, callback, callbackOnMount]);
}
