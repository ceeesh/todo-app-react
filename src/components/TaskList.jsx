import { TasksContext } from '../context/tasksContext';
import TaskItem from './TaskItem';
import { useContext } from 'react';


const TaskList = ({}) => {
  const { tasks, deleteTask, toggleTask, enterEditMode} = useContext(TasksContext)
  return (
    <ul className="flex flex-col justify-center text-left container mx-auto w-24 laptop:mx-auto phone:mr-52">
        {
            tasks.sort((a, b) => b.id - a.id).map(task => 
              (
                <TaskItem 
                key={task.id} 
                task={task}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                enterEditMode={enterEditMode}
                />
            ))
        }
    </ul>
  )
}

export default TaskList