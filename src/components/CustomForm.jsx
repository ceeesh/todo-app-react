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
    className="flex flex-col justify-center text-left container mx-auto w-6/12"
    onSubmit={handleFormSubmit}
    >
        <div>
            <input
            type="text"
            id="task"
            className="w-9/12 m-3 rounded-md p-2.5"
            value={task}
            onInput={(e) => setTask(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Enter Task"
            />
            {/* <label 
            htmlFor="task"
            className=""
            >Enter Task</label> */}
            <button
            className="w-auto bg-violet-600 p-5 rounded-md"
            aria-label="Add Task"
            type="submit"
            >
            <PlusIcon className="h-6 w-9 text-blue-500"/>
            </button>
        </div>
        
    </form>
  )
}

export default CustomForm