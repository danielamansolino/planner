import React, { useState } from "react";
import { itemSetter } from "../../utilities/localStorage-utility";

interface TaskFormProps {
  onTaskAdd: (task: string, date: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskAdd }) => {
  const [task, setTask] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim() === "" || date === "") return;

    // const data = {
    //   task: task,
    //   date: date,
    // };

    // itemSetter(0, data)

    // onTaskAdd(task, date);
    // setTask("");
    // setDate("");
   
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex  flex-col items-center">
        <input
          className="taskText text-black"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />  <br />
        <input
          className="date text-black"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Select a date"
        />  <br />
        <button
          type="submit"
          style={{
            backgroundColor: "#a7d2ff",
            color: "#002b59",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add task
        </button>
      </form>
    </>
  );
};

export default TaskForm;
