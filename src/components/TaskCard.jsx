import { useContext } from "react";
import { context } from "../context/TaskContext";

const TaskCard = () => {
    const { state, deleteTask } = useContext(context);

    return (
        <>
            {state.count.map((task, index) => (
                <div key={task.id}>
                    <p>{task.name}</p>
                    <button onClick={() => { deleteTask(task.id) }}>Delete</button>
                </div>
            ))}
        </>
    );
};

export default TaskCard;