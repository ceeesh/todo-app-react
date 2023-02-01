import { useState, useEffect, useContext } from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'
import { TasksContext } from '../context/tasksContext'

// editedTask, updateTask, closeEditMode
const EditForm = ({}) => {
    const { editedTask, updateTask, closeEditMode, theme } = useContext(TasksContext)
    const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name)

    useEffect(() => {
        const closeModalIfEscaped = (e) => {
            e.key === "Escape" && closeEditMode()
        }

    window.addEventListener('keydown', closeModalIfEscaped)

    return () => {
        window.removeEventListener('keydown', closeModalIfEscaped)
    }
    }, [closeEditMode])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        updateTask({...editedTask, name: updatedTaskName})
    }

  return (
    <div 
    role="dialog" 
    aria-labelledby="editTask" 
    onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}
    className='bg-opac w-full h-screen overflow-hidden absolute top-0'
    >
    <form 
    className="flex flex-col justify-center text-left container mx-auto w-full z-50 mt-72"
    onSubmit={handleFormSubmit}
    >
        <div className="flex justify-center">
            <input
            type="text"
            id="editTask"
            className="w-4/12 m-3 rounded-md p-2.5 "
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={12}
            placeholder="Update Task"
            />
            {/* <label 
            htmlFor="task"
            className=""
            >Enter Task</label> */}
            <button
            className={`w-auto p-5 rounded-md ${theme === 'light' ? 'bg-black' : 'bg-violet-600'}`}
            aria-label={`Confirm edited task to now read ${updatedTaskName}`}
            type="submit"
            >
            <CheckIcon className="w-9 text-blue-500" strokeWidth={2} height={24}/>
            </button>
        </div>
    </form>
    </div>
  )
}

export default EditForm