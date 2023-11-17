import React from "react";

interface TaskItemProps {
    text: string;
    date: string;
    complete: boolean;
    onCompleteToggle: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ text, date, complete, onCompleteToggle }) => {
    return (
        <li className="flex flex-col justify-between border-2 rounded-xl border-pink-100 p-2 mb-2">
            <div className="flex-1 p-1">
                <div >{text}</div>
            </div>
            <div className="flex justify-between">
                <div className="p-1">Date: {date}</div>
                <div className="p-1">Completed: <input type="checkbox" checked={complete} onChange={onCompleteToggle}/></div>   
            </div> 
        </li>
    );
};

export default TaskItem;
