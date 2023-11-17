"use client"; 

import React, { useState } from "react";
import { itemSetter } from "../../utilities/localStorage-utility";
import TextAreaResize from "./TextAreaResize";

interface TaskFormProps {
    onTaskAdd: (data: ObjectType) => void;
}

interface ObjectType {
    text: string;
    date: string;
    complete: boolean;
    creationDate: string;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskAdd }) => {
    const [task, setTask] = useState<string>("");
    const [date, setDate] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (task.trim() === "" || date === "") return;
        const creationDateTime = new Date()
        const creationDateTimeStr = creationDateTime.toISOString()
        const data = {
            text: task,
            date: date,
            complete: false,
            creationDate: creationDateTimeStr
        };
        onTaskAdd(data);
        setTask("")
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col  gap-2 ">
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
