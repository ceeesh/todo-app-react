import TaskItem from './TaskItem';


const TaskList = ({tasks}) => {
  return (
    <ul className="">
        {
            tasks.sort((a, b) => b.id - a.id).map(task => (
                <TaskItem key={task.id} 
                task={task}
                />
            ))
        }
    </ul>
  )
}

export default TaskList