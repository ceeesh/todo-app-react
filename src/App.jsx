import { useEffect } from "react";
import { useState, useContext } from "react"
import CustomForm from "./components/CustomForm"
import EditForm from "./components/EditForm";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { TasksContext, TasksContextProvider } from "./context/tasksContext";

function App() {
 const { isEditing, tasks, setTasks } = useContext(TasksContext)
 useEffect(() => {
  console.log(tasks)
  // setTasks(prevState => [...prevState])
  
 },[])

  return (
    <TasksContextProvider>
    <div className="text-3xl font-bold">
            <Header/>
      {
        isEditing && (
          <EditForm/>
        )
      }
       <CustomForm/>
       {tasks && (
       <TaskList 
       />
      )}
    </div>
    </TasksContextProvider>
  )
}

export default App
