import React from 'react';
import { ReactComponent as LeftArrowIcon } from '../../images/icons/left-arrow.svg';
import { ReactComponent as RightArrowIcon } from '../../images/icons/right-arrow.svg';

export default function SliderControls({
  leftDisabled,
  rightDisabled,
  nextSlide,
  prevSlide,
}) {
  return (
    <>
      <button
        className={leftDisabled ? 'control left disabled' : 'control left'}
        onClick={prevSlide}
      >
        <LeftArrowIcon className={leftDisabled ? 'disabled' : ''} />
      </button>
      <button
        className={rightDisabled ? 'control right disabled' : 'control right'}
        onClick={nextSlide}
      >
        <RightArrowIcon className={rightDisabled ? 'disabled' : ''} />
      </button>
    </>
  );
}
