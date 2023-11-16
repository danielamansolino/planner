"use client"; 

import React, { useState, useEffect } from 'react'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import { itemSetter } from "../../utilities/localStorage-utility";
import { itemGetter } from "../../utilities/localStorage-utility";


const TaskMain:React.FC = () => {
    const [tasks,setTasks] = useState<{ text: string, date: string, complete: boolean }[]>([]);
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                let storedTasks = itemGetter("user")
                if (storedTasks == null){
                    // pass
                } else{
                    setTasks(storedTasks)
                }
            } catch (err) {
                console.error("Error fetching data: ", err)
            }
        } 
        console.log(tasks)

        fetchData();
    }, [])
  
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