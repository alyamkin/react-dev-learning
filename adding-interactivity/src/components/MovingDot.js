import { useState } from 'react';

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div
      onPointerMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '20px',
          height: '20px',
          background: 'red',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: '-10',
          top: '-10',
        }}
      ></div>
    </div>
  );
}
