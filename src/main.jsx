import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TasksContextProvider } from './context/tasksContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <TasksContextProvider> 
      <App />
     </TasksContextProvider>
  </React.StrictMode>,
)
