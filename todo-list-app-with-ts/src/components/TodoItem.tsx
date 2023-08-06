import { Todo } from "../model/Todo";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import React, { useRef } from "react";

type Props = {
  todo: Todo;
  tasks: Todo[];
  setTasks: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoItem = ({ todo, tasks, setTasks }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const doneHandler = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const deleteHandler = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editHandler = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
    inputRef.current?.focus();
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setTasks(
      tasks.map((task) =>
        task.id === todo.id
          ? { ...todo, text: inputRef.current!.value, isEditing: false }
          : task
      )
    );
  };

  if (todo.isEditing) {
    return (
      <form onSubmit={submitHandler} className="edit-form">
        <input type="text" ref={inputRef} className="task-input" required />
        <button type="submit">
          <MdDone />
        </button>
      </form>
    );
  } else {
    return (
      <div className="todo-item">
        <div className="todo-text">
          <input
            type="checkbox"
            name="done"
            id="done"
            checked={todo.isDone}
            onClick={() => doneHandler(todo.id)}
          />
          {todo.isDone && <s> {todo.text}</s>}
          {!todo.isDone && <p>{todo.text}</p>}
        </div>
        <div className="todo-icons">
          <span className="edit-icon" onClick={() => editHandler(todo.id)}>
            <AiOutlineEdit />
          </span>
          <span className="delete-icon" onClick={() => deleteHandler(todo.id)}>
            <AiOutlineDelete />
          </span>
        </div>
      </div>
    );
  }
};

export default TodoItem;
