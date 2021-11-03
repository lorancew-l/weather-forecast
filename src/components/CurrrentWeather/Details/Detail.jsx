import React from 'react';

export default function Detail({ Icon, label, value, unit }) {
  return (
    <div className="detail">
      <Icon className="icon" />
      <div className="label">{label}</div>
      <div className="value">{`${value} ${unit}`}</div>
    </div>
  );
}
