"use client"; 

import React, {useState} from 'react'
import TaskList from './TaskList'
import TaskForm from './TaskForm'


const demo = [{
    text: "My first to do item",
    date: "2023-11-15",
    complete: false
},
{
    text: "My second to do item",
    date: "2023-11-15",
    complete: false
}
]

const TaskMain:React.FC = () => {
    // This is the original code, which was commented out to test the dummy demo. 
    //const [tasks,setTasks] = useState<{ text: string, date: string, complete: boolean }[]>([]);
    const [tasks, setTasks] = useState<{ text: string, date: string, complete: boolean }[]>(demo);

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
            <TaskList tasks={tasks} onCompleteToggle={toggleComplete} />
            <TaskForm onTaskAdd={addTask} />
        </>
    )
}

export default TaskMain