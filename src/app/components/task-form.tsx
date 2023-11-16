import React,{ useState } from "react"; 

const TaskForm: React.FC = () => {
    const [task, setTask] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [complete, setComplete] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (task.trim() === "" || date === "" )return;

        //onTaskAdd(task, date);
        setTask("");
        setDate("");
        setComplete("");
    }
 //hey !!! 
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                className="taskText" 
                type="text" 
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder= "Add a task"
                />
                // tsc -v zsh: command not found: tsc
                <input/>
            </form>
        </>    
    );
}

export default TaskForm;