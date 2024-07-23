import { useState } from 'react';
import { useContext } from 'react';
import { TasksDispatchContext } from '../context/TasksContext';
import { useTasks } from '../context/TasksContext';

export default function TaskList() {
  const tasks = useTasks();

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
}

function Task({ task }) {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(task.text);
  const dispatch = useContext(TasksDispatchContext);

  const label = isEdit ? (
    <input value={text} onChange={(e) => setText(e.target.value)} />
  ) : (
    <span>{task.text}</span>
  );

  return (
    <li>
      <label>
        <input
          type="checkbox"
          value={task.done}
          onChange={(e) =>
            dispatch({
              type: 'changed',
              task: { ...task, done: e.target.checked },
            })
          }
        />
        {label}
      </label>
      {isEdit ? (
        <button
          onClick={() => {
            dispatch({
              type: 'changed',
              task: { ...task, text },
            });
            setIsEdit(false);
          }}
        >
          Save
        </button>
      ) : (
        <button onClick={() => setIsEdit(true)}>Edit</button>
      )}
      <button
        onClick={() =>
          dispatch({
            type: 'deleted',
            id: task.id,
          })
        }
      >
        Delete
      </button>
    </li>
  );
}
