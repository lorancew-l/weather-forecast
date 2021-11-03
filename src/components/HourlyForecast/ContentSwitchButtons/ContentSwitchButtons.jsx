import React from 'react';
import ContentSwitchButton from './ContentSwitchButton';
import './ContentSwitchButtons.scss';

export default function ContentSwitchButtons({
  selectedButtonIndex,
  selectButton,
}) {
  const buttons = [
    { id: 0, title: 'Summary', icon: '' },
    { id: 1, title: 'Details', icon: '' },
  ];

  return (
    <div className="content-switch-buttons">
      {buttons.map((button, index) => (
        <ContentSwitchButton
          key={button.id}
          title={button.title}
          icon={button.icon}
          select={() => selectButton(index)}
          selected={index === selectedButtonIndex}
        />
      ))}
    </div>
  );
}
