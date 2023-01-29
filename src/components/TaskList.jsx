import TaskItem from './TaskItem';


const TaskList = ({tasks, deleteTask, toggleTask, enterEditMode}) => {
  return (
    <ul className="flex flex-col justify-center text-left container mx-auto w-24 ">
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