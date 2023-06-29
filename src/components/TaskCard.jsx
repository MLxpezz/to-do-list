import "../css/TaskCard.css";
import { useContext } from "react";
import { context } from "../context/TaskContext";

const TaskCard = () => {
  const { state, deleteTask, taskDone, taskCancel } = useContext(context);

  return (
    <>
      {state.count.length > 0 && (
        <div className="Task-container">
          {state.count.map((task) => (
            <div className={`Task ${task.done ? "done" : ""}`} key={task.id}>
              <p className="Task__name">{task.name}</p>
              <div className="Task__btns-container">
                <button
                  className="Task__btn-done"
                  onClick={() => {
                    !task.done ? taskDone(task.id) : taskCancel(task.id);
                  }}
                >
                  <img
                    src={`${
                      !task.done
                        ? "/src/assets/done.svg"
                        : "/src/assets/close.svg"
                    }`}
                    alt="done"
                  />
                </button>
                <button
                  className="Task__btn-delete"
                  onClick={() => {
                    deleteTask(task.id);
                  }}
                >
                  <img src="/src/assets/delete.svg" alt="delete" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TaskCard;
