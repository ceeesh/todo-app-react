import { useState, useContext, useEffect } from "react"
import CustomForm from "./components/CustomForm"
import EditForm from "./components/EditForm";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { TasksContext, TasksContextProvider } from "./context/tasksContext";

function App() {
 const { isEditing, tasks, theme} = useContext(TasksContext)

 useEffect(() => {
  if(theme === 'light') {
    document.body.style.backgroundColor ='rgb(242, 243, 242)';
   }else {
    document.body.style.backgroundColor = 'rgb(15 23 42)';
   }
 },[theme])
 

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
