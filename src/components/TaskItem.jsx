import { CheckIcon, PencilIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const TaskItem = ({task}) => {
    const [isChecked, setIsChecked ] = useState(task.checked);

    const handleCheckboxChange = (e) => {
        setIsChecked(!isChecked)
    }

  return (
    <li className="border mb-4 rounded-md border-black ">
        <div>
        <input
        type="checkbox"
        checked={isChecked}
        name={task.name}
        id={task.id}
        onChange={handleCheckboxChange}
        />
        <label 
        htmlFor={task.id}
        className=""
        >
            {task.name}
        <p>
            <CheckIcon 
            strokeWidth={2} 
            width={24}
            height={24}
            />
        </p>
        </label>
        </div>

        <div>
            <button
            className=""
            aria-label={`Update${task.name} Task`}
            // onClick={}
            >
            <p>
            <PencilIcon 
            strokeWidth={2} 
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