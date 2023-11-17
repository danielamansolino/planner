import React, { ChangeEvent, useState } from 'react';
import { Interface } from 'readline';

interface TextAreaProps {
    task: string;
    setTask: (value:string) => void;
}


const TextAreaResize: React.FC<TextAreaProps> = ({ task, setTask}) => {

    const handleChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setTask(e.target.value)
    };

    const calculateRows = (text:string): number => {
        const rows = task.split('\n').length
        return rows < 4 ? 4 : rows;
    };
    return (
        <>
            <textarea 
                className=" text-black w-full resize-y"
                value={task}
                onChange={handleChange}
                rows={calculateRows(task)}
                placeholder="Enter task"
            />
        </>
            

    )


}

export default TextAreaResize;