import { useContext, useState } from "react";
import { context } from "../context/TaskContext";
import { Task } from "../data/task";

const TaskForm = ({children}) => {

    const {addTask, state} = useContext(context);
    const [taskName, setTaskName] = useState('');

    const handleChange = (event) => {
        setTaskName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTask = new Task(taskName, state.count.length);
        addTask(newTask);
        setTaskName('');
        console.log(newTask);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={taskName} onChange={handleChange}/>
            <button type="submit">Agregar Tarea</button>
            {children}
        </form>
    );
}

export default TaskForm;