import React, { useRef } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { Todo } from "../model/Todo"

type Props = {
  addTask: (task: Todo) => void
}

const NewTask = ( { addTask }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (e: React.FormEvent) => {
      e.preventDefault()
      const newTask = {
        id: Date.now(),
        text: inputRef.current!.value,
        isDone: false,
        isEditing: false
      }
      addTask(newTask)
      inputRef.current!.value = ""
  } 

  return (
    <form onSubmit={submitHandler} className="main-form">
      <input type="text" id='task' className='task-input' placeholder="Add Task..." ref={inputRef} required />      
      <button>
        <AiOutlinePlus />
      </button>
    </form>
  )
}

export default NewTask
