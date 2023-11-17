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
    
    // useEffect to fetch data from local storage, when the component mounts.
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Retrieve tasks from local storage using the itemGetter utility function
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

    // useEffect to set data to local storage, when the tasks state is changed. 
    useEffect(() => {
        const updateData = async () => {
            try {
                // Saves tasks to local storage using the itemSetter utility function
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
            <div className="md:grid md:grid-cols-2 md:gap-3">
                <div className=" right md:order-2">
                    <div className="rounded-lg  bg-[#002b59] py-3 px-10 mb-5 text-xl text-center text-white font-bold">Planner</div>
                    <div className="">
                        <TaskForm onTaskAdd={addTask} />
                    </div>
                </div>
                <div className="md:order-1">
                    <TaskList tasks={tasks} onCompleteToggle={toggleComplete} />
                </div>
            </div>
        </>
    )
}

export default TaskMain