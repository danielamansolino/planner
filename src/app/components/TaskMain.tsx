"use client"; 

import React, {useState} from 'react'
import TaskList from './TaskList'
import TaskForm from './TaskForm'


const TaskMain:React.FC = () => {
    // This is the original code, which was commented out to test the dummy demo. 
    const [tasks,setTasks] = useState<{ text: string, date: string, complete: boolean }[]>([]);
    // const [tasks, setTasks] = useState<{ text: string, date: string, complete: boolean }[]>(demo);

  const addTask = (text: string, date: string) => {
    const newTask = {text, date, complete: false };
    setTasks([...tasks, newTask]);
  }

  const toggleComplete = (index: number) => {
    const updatedTask = [...tasks];
    updatedTask[index].complete = !updatedTask[index].complete;
    setTasks(updatedTask);
    
  } 

    return(
        <>
            <TaskForm onTaskAdd={addTask} />
            <TaskList tasks={tasks} onCompleteToggle={toggleComplete} />
        </>
    )
}

export default TaskMain