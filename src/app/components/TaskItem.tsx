import React from "react";

interface TaskItemProps {
    text: string;
    date: string;
    complete: boolean;
    onCompleteToggle: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ text, date, complete, onCompleteToggle }) => {
    return (
        <li className="flex justify-between border-2 border-pink-100 m-3 p-3">
            <div className="flex justify-between ">
                <div style={{ marginRight: '20px' }}>Task: {text}</div>
                <div style={{ marginRight: '20px' }}>Date: {date}</div>
            </div>
            <div>Completed: 
                <input type="checkbox" checked={complete} onChange={onCompleteToggle}/>
            </div> 
        </li>
    );
};

export default TaskItem;
