import { useState, useContext, useEffect } from "react"
import CustomForm from "./components/CustomForm"
import EditForm from "./components/EditForm";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { TasksContext, TasksContextProvider } from "./context/tasksContext";

function App() {
 const { isEditing, tasks} = useContext(TasksContext)

  return (
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
  )
}

export default App
