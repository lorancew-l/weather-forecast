import React, { Children, cloneElement, useRef } from 'react';
import './slider.scss';
import SliderControls from './SliderControls';
import useSlider from './useSlider';
import useTouchSlide from './useTouchSlide';

export default function Slider({
  children,
  className,
  selectedItemIndex,
  itemsGap,
  getItemsCountPerSlide,
  getNewItemsCountPerSlide,
}) {
  const itemsCount = Children.count(children);
  const itemsPerSlide = getItemsCountPerSlide();
  const newItemsPerSlide = getNewItemsCountPerSlide();
  const childrenRef = useRef();

  const slider = useSlider(
    itemsCount,
    itemsPerSlide,
    newItemsPerSlide,
    selectedItemIndex,
    childrenRef
  );
  const { touchBinding } = useTouchSlide(slider.slideLeft, slider.slideRight);

  return (
    <div className={`slider ${className ?? ''}`}>
      <div className="items-container" {...touchBinding}>
        <div
          className="items"
          style={{
            transform: `translateX(${
              -slider.newItemsCount * (slider.itemWidth + itemsGap)
            }px)`,
            gap: itemsGap,
          }}
        >
          {Children.map(children, (child, index) =>
            cloneElement(child, {
              style: {
                minWidth: `calc((100% - ${
                  (itemsPerSlide - 1) * itemsGap
                }px) / ${itemsPerSlide})`,
              },
              setRef: (ref) =>
                index === 0 ? (childrenRef.current = ref) : undefined,
            })
          )}
        </div>
      </div>
      <SliderControls
        leftDisabled={slider.slideLeftDisabled}
        rightDisabled={slider.slideRightDisabled}
        prevSlide={slider.slideLeft}
        nextSlide={slider.slideRight}
      />
    </div>
  );
}
