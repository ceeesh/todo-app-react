import { useState } from "react"
import CustomForm from "./components/CustomForm"
import EditForm from "./components/EditForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing ] = useState(false);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (
      t.id === id ? {... t, checked: !t.checked } : t
    )))
  }

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (
      t.id === task.id ? {... t, name: task.name } : t
    )))
    closeEditMode()
  }

  const closeEditMode = () => {
    setIsEditing(false)
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true)
  }

  return (
    <div className="text-3xl font-bold">
      <header className="flex justify-center">My Task List</header>
      {
        isEditing && (
          <EditForm 
          editedTask={editedTask}
          updateTask={updateTask}
          />
        )
      }
      
       <CustomForm addTask={addTask}/>
       {tasks && (
       <TaskList 
       tasks={tasks}
       deleteTask={deleteTask}
       toggleTask={toggleTask}
       enterEditMode={enterEditMode}
       />
      )}
    </div>
  )
}

export default App
