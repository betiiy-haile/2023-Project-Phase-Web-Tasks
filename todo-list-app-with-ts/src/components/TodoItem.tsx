import { Todo } from '../model/Todo'
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useRef } from 'react';

type Props = {
  todo: Todo;
  tasks: Todo[];
  setTasks: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoItem = ({ todo, tasks, setTasks }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)

    return (
      <div className="todo-item">
        <div className="todo-text">
          <input
            type="checkbox"
            name="done"
            id="done"
            checked={todo.isDone}
          />
          <p>{todo.text}</p>
        </div>
        <div className="todo-icons">
          <span className="edit-icon">
            <AiOutlineEdit />
          </span>
          <span
            className="delete-icon"                
          >
            <AiOutlineDelete />
          </span>
        </div>
      </div>
    );
}

export default TodoItem
