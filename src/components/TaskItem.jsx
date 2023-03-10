import { CheckIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useState, useContext } from 'react'
import { TasksContext } from '../context/tasksContext';

const TaskItem = ({task, deleteTask, toggleTask, enterEditMode}) => {
    const [isChecked, setIsChecked ] = useState(task.checked);
    const { theme } = useContext(TasksContext)

    const handleCheckboxChange = (e) => {
        setIsChecked(!isChecked)
        toggleTask(task.id)
    }

  return (
    <li className={`border mb-4 rounded-md flex flex-row justify-between items-center ${theme === 'light' ? 'border-black' : 'border-white'} p-2 min-w-max`}>
        <div className=''>
        <input
        type="checkbox"
        checked={isChecked}
        name={task.name}
        id={task.id}
        onChange={handleCheckboxChange}
        className='h-[20px] w-[20px]'
        />
        <label 
        htmlFor={task.id}
        className=
        {`p-2 decoration-double ${theme === 'light' ? 'text-black' : 'text-white'} 
        ${isChecked ? 'line-through' : null} 
        ${theme === 'light' ? 'decoration-white' : 'decoration-black'}
        
        `}
        >
            {task.name}
        {/* <p className="inline-block">
            <CheckIcon 
            strokeWidth={2} 
            width={24}
            height={24}
            />
        </p> */}
        </label>
        </div>

        <div>
            <button
            className=""
            aria-label={`Update ${task.name} Task`}
            onClick={() => enterEditMode(task)}
            >
            <p>
            <PencilSquareIcon
            color={`${theme === 'light' ? 'black' : 'white'}`}
            width={24}
            height={24}
            />
            </p>
            </button>

            <button
            className=""
            aria-label={`Delete ${task.name} Task`}
            onClick={() => deleteTask(task.id)}
            >
            <p>
            <TrashIcon 
            color={`${theme === 'light' ? 'black' : 'white'}`}
            width={24}
            height={24}
            />
            </p>
            </button>
        </div>
    </li>
  )
}

export default TaskItem