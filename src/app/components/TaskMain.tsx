"use client"; 

import React, { useState, useEffect } from 'react'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import { itemGetter } from "../../utilities/localStorage-utility";
import { itemSetter } from "../../utilities/localStorage-utility";
import { ObjectType } from "../../utilities/task-utility"
import TaskIntroImage from './TaskIntroImage';
import DetectWindowSize from '../state/hooks/DetectWindowSize';

const TaskMain:React.FC = () => {
    const [tasks, setTasks] = useState<ObjectType[]>([]);

    const windowSize = DetectWindowSize()

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
  
    // addTask() adds a new tak to the 'task' state.
    const addTask = (data: ObjectType) => {
        setTasks([...tasks, data]);
    }

    // toggleComplete() updates the 'complete' field of the 'task' state as true or false. 
    const toggleComplete = (index: number) => {
        const updatedTask = [...tasks];
        updatedTask[index].complete = !updatedTask[index].complete;
        setTasks(updatedTask);
    } 

    // deleteEntry() deletes the entry located in the TaskList comp, and found in the TaskItem comp. 
    const deleteEntry = (index: number) => {
        const updatedTask = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
        setTasks(updatedTask);
    } 

    return(
        <>
            <div className="md:grid md:grid-cols-2 md:gap-3 ">
                <div className=" md:order-2 ">
                    <div className="rounded-lg  bg-[#002b59] py-3 px-10 mb-5 text-xl text-center text-white font-bold">Planner</div>
                    <div className="">
                        <TaskForm onTaskAdd={addTask} />
                    </div>
                </div>
                <div className="mt-3 md:mt-0 md:order-1">
                    { typeof tasks !== undefined && tasks.length == 0 && windowSize.width > 768
                        ?
                            <div className=" md:h-[70vh] flex justify-end items-start">
                                <TaskIntroImage />
                            </div>
                        :
                            <div className=" md:h-[70vh] overflow-auto overflow-x-hidden">
                                <TaskList tasks={tasks} onCompleteToggle={toggleComplete} onDeleteEntry={deleteEntry}/>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default TaskMain