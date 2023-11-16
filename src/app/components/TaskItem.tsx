import React from "react";

interface TaskItemProps {
    text: string;
    date: string;
    complete: boolean;

}

const TaskItem:React.FC<TaskItemProps> = ({text, date, complete}) => {

return(
    <>
        <li className="flex justify-center border-2 border-red-100 m-3">
            <div>{text}</div>
            <div>{date}</div>
            <input type="checkbox" checked={complete}></input>
        </li>
    </>
)

}

export default TaskItem;