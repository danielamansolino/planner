"use client"; 

import React from 'react';
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: {text: string; date: string; complete: boolean }[];
    onCompleteToggle: (index: number) =>void;
}

// [{"task": "sdfskl", "date":"20231115"}, {"task": "sdfskl", "date":"20231115"}]

const TaskList: React.FC<TaskListProps> = ({ tasks, onCompleteToggle }) => {

    return(
        <>
            <ul>
                {tasks.map((task, index) => 
                        <TaskItem key={index} {...task} />
                    )}
                {/* {tasks.map((task, index) => (
                    <li key={index}>
                        <input
                        className="complete"></input>
                    </li>

                ))} */}

            </ul>
        </>
    );
};

export default TaskList;