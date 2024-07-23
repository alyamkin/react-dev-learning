import { useState } from 'react';
import { initialTravelPlan } from '../places';

function PlaceTree({ id, parentId, plan, onComplete }) {
  const place = plan[id];
  const childPlaces = place.childIds;
  return (
    <li>
      {place.title}
      <button
        onClick={() => {
          onComplete(parentId, id);
        }}
      >
        Complete
      </button>
      {childPlaces.length > 0 && (
        <ol>
          {childPlaces.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              plan={plan}
              onComplete={onComplete}
              parentId={id}
            />
          ))}
        </ol>
      )}
    </li>
  );
}

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);

  function handleComplete(parentId, id) {
    const parent = plan[parentId];
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((childId) => childId !== id),
    };

    setPlan({
      ...plan,
      [parentId]: nextParent,
    });
  }

  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map((id) => (
          <PlaceTree
            key={id}
            id={id}
            plan={plan}
            onComplete={handleComplete}
            parentId={0}
          />
        ))}
      </ol>
    </>
  );
}
