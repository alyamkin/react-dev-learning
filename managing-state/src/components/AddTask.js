import { useState } from 'react';
import { useContext } from 'react';
import { useTasksDispatch } from '../context/TasksContext';

let nextId = 3;

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          dispatch({
            type: 'added',
            id: nextId++,
            text,
          });
          setText('');
        }}
      >
        Add
      </button>
    </>
  );
}
