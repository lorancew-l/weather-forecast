import React from 'react';

export default function XAxisTick({ x, y, height, payload, tickFormatter }) {
  return (
    <>
      <text x={x} y={y + height} textAnchor="middle">
        {tickFormatter(payload.value)}
      </text>
    </>
  );
}
