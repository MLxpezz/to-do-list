import "../css/TaskForm.css";
import { useContext, useState } from "react";
import { context } from "../context/TaskContext";
import { Task } from "../data/task";

const TaskForm = ({ children }) => {
  const { addTask, state, deleteTasks, orderTasks } = useContext(context);
  const [taskName, setTaskName] = useState("");

  const handleChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskName) {
      const newTask = new Task(taskName, state.count.length);
      addTask(newTask);
      setTaskName("");
      console.log(newTask);
    }
  };

  let newState = [...state.count];

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-container__input-container">
        <input
          className="form-container__TaskName"
          type="text"
          value={taskName}
          onChange={handleChange}
          placeholder="Tarea..."
        />
        <button className="form-container__addTask-btn" type="submit">
          Agregar Tarea
        </button>
        {children}
      </div>
      <div className="form-container__taskInfo">
        <p>
          {state.count.length < 1
            ? "No hay tareas por el momento."
            : `Hay ${
                newState.filter((task) => task.done === false).length
              } tareas pendientes`}
        </p>
        {state.count.length > 0 && (
          <>
            <button
              onClick={() => {
                deleteTasks();
              }}
            >
              Eliminar todas las tareas
            </button>
            <button onClick={() => {orderTasks()}}>Ordenar tareas</button>
          </>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
