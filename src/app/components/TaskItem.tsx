"use client"; 

import React, { useState } from "react";

interface TaskItemProps {
    text: string;
    date: string;
    complete: boolean;
    onCompleteToggle: () => void;
    onDeleteEntry: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ text, date, complete, onCompleteToggle, onDeleteEntry }) => {
    const [deleteConfirm, setDeleteConfirm] = useState<Boolean>(false)

    const toggleDeleteConfirm = () => {
        setDeleteConfirm(!deleteConfirm);
    }

    const onCompleteHandler = () => {
        onCompleteToggle();
        if (complete == false){
            setDeleteConfirm(false);
        }
    }

    return (
        <li className="flex flex-col justify-between border-2 rounded-xl border-pink-100 p-2 mb-2">
            <div className="flex-1 p-1">
                <div >{text}</div>
            </div>
            <div className="flex justify-between">
                <div className="p-1">Date: {date}</div>
                { complete && 
                    <>
                        { deleteConfirm ?
                            <>
                                <button className="p-1 text-red-400"
                                    onClick={onDeleteEntry}
                                    >delete?</button>

                                <button className=" text-white px-2 border-2 rounded-sm"
                                    onClick={toggleDeleteConfirm}
                                    >cancel</button>
                            </>
                            :
                            <>
                                <button className="p-1 text-red-400"
                                    onClick={toggleDeleteConfirm}
                                    >Delete</button>
                            </>
                        }
                    </>
                }
                <div className="p-1">Completed: <input type="checkbox" checked={complete} onChange={onCompleteHandler}/></div>   
            </div> 
        </li>
    );
};

export default TaskItem;
