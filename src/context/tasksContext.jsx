import React, { createContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export let TasksContext = createContext({});

export const TasksContextProvider = ({children}) => {
  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing ] = useState(false);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  // useState(
  //   localStorage.getItem('theme') === null ? "dark" : JSON.parse(localStorage.getItem('theme'))
  //   );

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
    previousFocusEl.focus()
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true)
    setPreviousFocusEl(document.activeElement);
  }

  return (
    <TasksContext.Provider value={{ 
      tasks, 
      setTasks, 
      editedTask, 
      setEditedTask, 
      isEditing, 
      setIsEditing, 
      previousFocusEl, 
      setPreviousFocusEl, 
      addTask, 
      deleteTask, 
      toggleTask, 
      updateTask,
      closeEditMode,
      enterEditMode,
      theme, 
      setTheme
      }}>
        {children}
    </TasksContext.Provider>
  )
}
