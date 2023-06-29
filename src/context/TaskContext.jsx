import { createContext, useReducer } from "react";

export const context = createContext();

const TaskContext = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "addTask":
        return {
          count: [...state.count, action.task],
        };
      case "deleteTask":
        return {
          count: state.count.filter((task) => task.id !== action.taskId),
        };
      case "taskDone":
        return {
          count: state.count.map((task) => {
            if (task.id === action.taskId) {
              task.done = true;
            }
            return task;
          }),
        };
      case "taskCancel":
        return {
          count: state.count.map((task) => {
            if (task.id === action.taskId) {
              task.done = false;
            }
            return task;
          }),
        };
      case "deleteTasks":
        return {
          count: state.count.splice(0,-1)
        }
      case "orderTasks":
        return {
          count: state.count.sort((a,b) => {
            return a.done - b.done;
          })
        }
      default:
        throw new Error("se produjo un error");
    }
  };

  const initialState = { count: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTask = (newTask) => {
    dispatch({ type: "addTask", task: newTask });
  };

  const deleteTask = (id) => {
    dispatch({ type: "deleteTask", taskId: id });
  };

  const taskDone = (id) => {
    dispatch({ type: "taskDone", taskId: id });
  };

  const taskCancel = (id) => {
    dispatch({type: "taskCancel", taskId: id});
  }

  const deleteTasks = () => {
    dispatch({type: "deleteTasks"});
  }

  const orderTasks = () => {
    dispatch({type: "orderTasks"});
  }

  return (
    <context.Provider
      value={{
        state,
        addTask,
        deleteTask,
        taskDone,
        taskCancel,
        deleteTasks,
        orderTasks
      }}
    >
      {children}
    </context.Provider>
  );
};

export default TaskContext;
