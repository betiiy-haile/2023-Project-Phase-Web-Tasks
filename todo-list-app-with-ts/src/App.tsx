import { useState } from "react";
import NewTask from "./components/NewTask";
import TodoList from "./components/TodoList";
import { Todo } from "./model/Todo";

const App = () => {
  const [tasks, setTasks] = useState<Todo[]>([]);

  const addTask = (task: Todo) => {
    setTasks((prevTasks) => prevTasks.concat(task));
    console.log(task)
  };

  return (
    <div className="container">
      <h1 className="heading">My Task List</h1>
      <NewTask addTask={addTask} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
