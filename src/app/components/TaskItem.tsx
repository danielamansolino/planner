"use client"; 

import React, { useState } from "react";
import { currentDate } from "../../utilities/date-utility"

interface TaskItemProps {
    text: string;
    date: string;
    complete: boolean;
    onCompleteToggle: () => void;
    onDeleteEntry: () => void;
}

const now = new Date()

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
                <div >{text.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                    {line}
                    <br />
                    </React.Fragment>))}
                </div>
            </div>
            <div className="flex justify-between">
                <div className={`p-1 ${ currentDate() > date ? 'text-teal-400' : 'text-teal-100' }`}>Due: {date}</div>
                { complete && 
                    <>
                        { deleteConfirm ?
                            <>
                                <button className="p-1 text-red-400 hover:text-red-600"
                                    onClick={onDeleteEntry}
                                    >delete?</button>

                                <button className=" text-white px-2 border-2 rounded-sm hover:text-black hover:bg-white"
                                    onClick={toggleDeleteConfirm}
                                    >cancel</button>
                            </>
                            :
                            <>
                                <button className="p-1 text-white hover:text-red-400"
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
