import React from 'react'
import { Todo } from '../model/Todo'
import TodoItem from './TodoItem';

type Props = {
  tasks: Todo[];
  setTasks: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList = ({ tasks, setTasks} : Props) => {
  return (
    <div className='todo-list'>
      {
        tasks.sort((a, b) => b.id - a.id).map((task) => {
            return (
            <TodoItem
                key={task.id}
                todo={task}
                tasks={tasks}
                setTasks={setTasks}
            />
            );
        })
      }
    </div>
  )
}

export default TodoList
