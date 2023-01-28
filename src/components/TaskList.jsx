import TaskItem from './TaskItem';


const TaskList = ({tasks, deleteTask, toggleTask}) => {
  return (
    <ul className="flex flex-col justify-center text-left container mx-auto w-6/12 ">
        {
            tasks.sort((a, b) => b.id - a.id).map(task => 
              (
                <TaskItem 
                key={task.id} 
                task={task}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                />
            ))
        }
    </ul>
  )
}

export default TaskList