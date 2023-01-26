import { useState } from "react"
import CustomForm from "./components/CustomForm"
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  return (
    <div className="text-3xl font-bold underline">
       <CustomForm addTask={addTask}/>
       {tasks && <TaskList tasks={tasks}/>}
    </div>
  )
}

export default App
