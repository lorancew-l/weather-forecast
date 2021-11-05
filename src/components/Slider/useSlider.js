import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import useResizeObserver from '../../utils/hooks/useResizeObserver';
import useDebounce from '../../utils/hooks/useDebounce';

export default function useSlider(
  itemsCount,
  itemsPerSlide,
  newItemsPerSlide,
  selectedItemIndex,
  itemRef
) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  const slideCount = Math.ceil((itemsCount - itemsPerSlide) / newItemsPerSlide);

  const previousWidthRef = useRef();

  useLayoutEffect(() => {
    setItemWidth(itemRef.current.getBoundingClientRect().width);
  }, [itemRef]);

  function slide(nextSlide) {
    if (nextSlide < 0 || nextSlide > slideCount) {
      return;
    }

    setCurrentSlide(nextSlide);
  }

  function calculateNewItemsCount() {
    let newItemsCount = currentSlide * newItemsPerSlide;

    if (newItemsCount + itemsPerSlide > itemsCount) {
      newItemsCount = itemsCount - itemsPerSlide;
    }

    return newItemsCount;
  }

  const resize = useCallback(() => {
    function setCurrentSlideAfterResize() {
      if (!selectedItemIndex || selectedItemIndex + 1 <= itemsPerSlide) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(
          Math.ceil((selectedItemIndex + 1 - itemsPerSlide) / newItemsPerSlide)
        );
      }
    }

    if (!itemRef.current) {
      return;
    }

    const currentWidth = previousWidthRef.current;
    const newWidth = itemRef.current.getBoundingClientRect().width;

    previousWidthRef.current = newWidth;

    if (newWidth === currentWidth) {
      return;
    }

    setItemWidth(itemRef.current.getBoundingClientRect().width);
    setCurrentSlideAfterResize();
  }, [selectedItemIndex, itemsPerSlide, newItemsPerSlide, itemRef]);

  const { debouncedFunction: debouncedResize } = useDebounce(resize, 500);
  useResizeObserver(itemRef, debouncedResize);

  return {
    itemWidth,
    newItemsCount: calculateNewItemsCount(),
    slideLeftDisabled: currentSlide === 0,
    slideRightDisabled: currentSlide === slideCount,
    slideRight: () => slide(currentSlide + 1),
    slideLeft: () => slide(currentSlide - 1),
  };
}
