import { useState } from 'react';

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

export default function ShapeEditor() {
  const [shapes, setShapes] = useState(initialShapes);

  function handleClick() {
    setShapes(
      shapes.map((shape) => {
        if (shape.type === 'circle') {
          return { ...shape, y: shape.y + 50 };
        } else {
          return shape;
        }
      })
    );
  }

  return (
    <>
      <button onClick={handleClick}>Move circles down</button>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          style={{
            width: '20px',
            height: '20px',
            background: 'purple',
            position: 'absolute',
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === 'circle' ? '50%' : '',
          }}
        ></div>
      ))}
    </>
  );
}
