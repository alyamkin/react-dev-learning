import TaskList from './TaskList';
import AddTask from './AddTask';
import { TasksProvider } from '../context/TasksContext';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Prague itinerary</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
