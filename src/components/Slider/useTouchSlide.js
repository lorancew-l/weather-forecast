import { useState } from 'react';

export default function useTouchSlide(slideLeft, slideRight) {
  const [touchStart, setTouchStart] = useState(0);

  function slideByTouch(event) {
    const scrollDistance = event.pageX - touchStart;

    if (Math.abs(scrollDistance) < 50) {
      return;
    }

    if (scrollDistance > 0) {
      slideLeft();
    } else {
      slideRight();
    }
  }

  return {
    touchBinding: {
      onPointerDown: (event) => setTouchStart(event.pageX),
      onPointerUp: slideByTouch,
    },
  };
}
