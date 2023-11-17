"use client"; 

import React, { useState } from "react";
import TextAreaResize from "./TextAreaResize";
import { ObjectType } from "../../utilities/task-utility"
import { currentDate } from "../../utilities/date-utility"

interface TaskFormProps {
    onTaskAdd: (data: ObjectType) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskAdd }) => {
    const [task, setTask] = useState<string>("");
    const [date, setDate] = useState<string>(currentDate());

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (task.trim() === "" || date === "") return;
        const creationDateTime = new Date();
        const creationDateTimeStr = creationDateTime.toISOString();
        const data = {
            text: task,
            date: date,
            complete: false,
            creationDate: creationDateTimeStr
        };
        onTaskAdd(data);
        setTask("");
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if ((e.metaKey || e.shiftKey) && e.key == 'Enter'){
            e.preventDefault();
            setTask((task) => task + '\n');   
        }
        else if (e.key == 'Enter') {
            e.preventDefault();
            handleSubmit(e);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}  className="flex flex-col  gap-2 ">
                <div className="flex-1 ">
                    <TextAreaResize task={task} setTask={setTask} />
                        <br />
                </div>
                <div className="flex justify-between gap-2">
                    <input
                        className="date text-black"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Select a date"
                        />  <br />
                    <button
                        type="submit"
                        className="bg-[#a7d2ff] text-[#002b59] py-1 px-5 rounded-md hover:cursor-pointer"

                        >
                        Add task
                    </button>
                </div>
            </form>
        </>
    );
};

export default TaskForm;
