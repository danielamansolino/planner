"use client"; 

import React from 'react';
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: ObjectType[];
     onCompleteToggle: (index: number) => void;
}

interface ObjectType {
    text: string;
    date: string | Date;
    complete: boolean;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onCompleteToggle }) => {
    console.log(tasks)
    return (
        <ul>
            {tasks.map((task, index) => (
                <TaskItem
                key={index}
                text={task.text}
                date={task.date}
                complete={task.complete}
                onToggle={() => onCompleteToggle(index)}
                />
            ))}
        </ul>
    );
};

export default TaskList;
