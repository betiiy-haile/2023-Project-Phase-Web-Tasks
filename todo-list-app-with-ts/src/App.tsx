import { useState } from "react";
import NewTask from "./components/NewTask";
import { Todo } from "./model/Todo";

const App = () => {
  const [tasks, setTasks] = useState<Todo[]>([]);

  const addTask = (task: Todo) => {
    setTasks((prevTasks) => prevTasks.concat(task));
    console.log(task)
    console.log(tasks);
  };

  return (
    <div className="container">
      <h1 className="heading">My Task List</h1>
      <NewTask addTask={addTask} />
    </div>
  );
};

export default App;
