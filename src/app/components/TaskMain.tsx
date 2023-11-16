"use client"; 

import React, { useState, useEffect } from 'react'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import { itemGetter } from "../../utilities/localStorage-utility";
import { itemSetter } from "../../utilities/localStorage-utility";


interface ObjectType {
    text: string;
    date: string;
    complete: boolean;
    creationDate: string;
}
// { text: string, date: string, complete: boolean, creationDate: string; }

const TaskMain:React.FC = () => {
    const [tasks, setTasks] = useState<ObjectType[]>([]);
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                let storedTasks = itemGetter("user");
                if (storedTasks != null){
                    setTasks(storedTasks);
                } 
            } catch (err) {
                console.error("Error fetching data: ", err);
            }
        } 
        fetchData();
    }, [])

    useEffect(() => {
        const updateData = async () => {
            try {
                itemSetter("user", { array: tasks })
            } catch (err) {
                console.error("Error saving data: ", err);
            }
        }
        updateData();
    }, [tasks])
  
    const addTask = (data: ObjectType) => {
        setTasks([...tasks, data]);
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