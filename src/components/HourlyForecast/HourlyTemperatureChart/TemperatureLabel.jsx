import React from 'react';

export default function TemperatureLabel({
  x,
  y,
  offset,
  labels,
  index,
  formatter,
}) {
  if (index % 4 || index === 0 || index === 24) {
    return <text></text>;
  }

  return (
    <text x={x} y={y - offset} textAnchor="middle" style={{ transition: '0' }}>
      {formatter(labels[index])}
    </text>
  );
}
