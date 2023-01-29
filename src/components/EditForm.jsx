import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'
import { useEffect } from 'react'


const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
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
    >
    <form 
    className="flex flex-col justify-center text-left container mx-auto w-full"
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
            maxLength={60}
            placeholder="Update Task"
            />
            {/* <label 
            htmlFor="task"
            className=""
            >Enter Task</label> */}
            <button
            className="w-auto bg-violet-600 p-5 rounded-md"
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