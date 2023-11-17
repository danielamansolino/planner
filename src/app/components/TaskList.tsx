"use client"; 

import React from 'react';
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: ObjectType[];
     onCompleteToggle: (index: number) => void;
}

interface ObjectType {
    text: string;
    date: string;
    complete: boolean;
    creationDate: string;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onCompleteToggle }) => {
    return (
        <ul> 
            {tasks.map((task, index) => (
                <TaskItem
                key={index}
                text={task.text}
                date={task.date}
                complete={task.complete}
                onCompleteToggle={() => onCompleteToggle(index)}
                />
            ))}
        </ul>
    );
};

export default TaskList;
