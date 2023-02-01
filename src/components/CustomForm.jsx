import { useState, useContext } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { TasksContext } from '../context/tasksContext'
import darkMode from '../assets/moon.png'
import lightMode from '../assets/brightness.png'
import useLocalStorage from '../hooks/useLocalStorage'


const CustomForm = ({}) => {
    const [task, setTask] = useState("")
    const { addTask, theme, setTheme } = useContext(TasksContext)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTask({
            name: task,
            checked: false,
            id: Date.now()
        })
        setTask("")
    }

const themeUpdate = () => {
    setTheme(prevState => prevState === 'light' ? 'dark' : 'light')
} 

  return (
    <form 
    className="flex flex-col justify-center text-left container mx-auto w-full mb-5 my-32 overflow-hidden"
    onSubmit={handleFormSubmit}
    >
        <header className={`flex justify-center ${theme === 'light' ? 'text-black' : 'text-white'} phone:text-3xl laptop:text-5xl`}>My Task List</header>
        <p href="" className='self-center ml-72 mb-4 w-12 icon' onClick={themeUpdate} >
            <img className='w-8' src={`${theme === 'light' ? darkMode : lightMode}`}/>
            </p>
        <div className="flex justify-center">
            <input
            type="text"
            id="task"
            className="w-3/12 m-3 rounded-md p-2.5 placeholder:text-4xl phone:w-6/12 laptop:w-3/12"
            value={task}
            onInput={(e) => setTask(e.target.value)}
            required
            autoFocus
            maxLength={12}
            placeholder="Enter Task"
            />
            {/* <label 
            htmlFor="task"
            className=""
            >Enter Task</label> */}
            <button
            className={`w-auto p-5 rounded-md ${theme === 'light' ? 'bg-black' : 'bg-violet-600'}`}
            aria-label="Add Task"
            type="submit"
            >
            <PlusIcon className="w-9 text-blue-500"/>
            </button>
        </div>
        
    </form>
  )
}

export default CustomForm