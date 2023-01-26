import { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'


const CustomForm = ({ addTask }) => {
    const [task, setTask] = useState("")

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTask({
            name: task,
            checked: false,
            id: Date.now()
        })
        setTask("")
    }

  return (
    <form 
    className=''
    onSubmit={handleFormSubmit}
    >
        <div>
            <input
            type="text"
            id="task"
            className=""
            value={task}
            onInput={(e) => setTask(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Enter Task"
            />
            <label 
            htmlFor="task"
            className=""
            >Enter Task</label>
            <button
            className=""
            aria-label="Add Task"
            type="submit"
            >
            <PlusIcon className="h-6 w-6 text-blue-500"/>
            </button>
        </div>
        
    </form>
  )
}

export default CustomForm