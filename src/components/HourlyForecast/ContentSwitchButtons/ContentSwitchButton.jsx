import React from 'react';

export default function ContentSwitchButton({ title, selected, select }) {
  return (
    <button className={selected ? 'selected' : ''} onClick={select}>
      {title}
    </button>
  );
}
