"use client"; 
import React from 'react';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: { text: string; date: string; complete: boolean }[];
  onCompleteToggle: (index: number) => void;
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
          onToggle={() => onCompleteToggle(index)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
