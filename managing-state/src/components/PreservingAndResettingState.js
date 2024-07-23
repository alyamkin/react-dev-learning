import { useState } from 'react';
import Counter from './Counter';

export default function PreservingAndResettingState() {
  // const [showB, setShowB] = useState(true);
  // const [isPaused, setIsPaused] = useState(false);
  const [isPlayerA, setIsPlayerA] = useState(true);
  const [isFancy, setIsFancy] = useState(false);

  const counter = <Counter />;
  return (
    <>
      {/* <div>
        <Counter />
        {showB && <Counter />}
        <label>
          <input
            type="checkbox"
            checked={showB}
            onChange={(e) => setShowB(e.target.checked)}
          />
          Render the second counter
        </label>
      </div> */}

      {/*Same component at the same position preserves state*/}
      {/* <div>
        {isPaused ? <Counter /> : <Counter />}
        <label>
          <input
            type="checkbox"
            checked={isPaused}
            onChange={(e) => {
              setIsPaused(e.target.checked);
            }}
          />
          Take a break
        </label>
      </div> */}

      {/*Different components at the same position reset state*/}
      {/* <div>
        {isPaused ? <p>See you later!</p> : <Counter />}
        <label>
          <input
            type="checkbox"
            checked={isPaused}
            onChange={(e) => {
              setIsPaused(e.target.checked);
            }}
          />
          Take a break
        </label>
      </div> */}

      {/* <div>
        {isPaused ? (
          <div>
            <Counter />
          </div>
        ) : (
          <section>
            <Counter />
          </section>
        )}
        <label>
          <input
            type="checkbox"
            checked={isPaused}
            onChange={(e) => {
              setIsPaused(e.target.checked);
            }}
          />
          Take a break
        </label>
      </div> */}

      {/*Resetting state at the same position */}
      {/* <div>
        {isPlayerA ? (
          <Counter key="Taylor" person="Taylor" />
        ) : (
          <Counter key="Sarah" person="Sarah" />
        )}
        <button
          onClick={() => {
            setIsPlayerA(!isPlayerA);
          }}
        >
          Next player!
        </button>
      </div> */}
    </>
  );
}
