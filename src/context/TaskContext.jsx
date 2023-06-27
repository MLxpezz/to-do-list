import { createContext, useReducer } from "react"

export const context = createContext();

const TaskContext = ({children}) => {

    const reducer = (state, action) => {
        switch(action.type) {
            case 'addTask':
                return {
                    count: [...state.count, action.task]
                };
            case 'deleteTask':
                return {
                    count: state.count.filter(task => task.id !== action.taskId)
                };
            default:
                throw new Error('se produjo un error');
        }
    };

    const initialState = {count : []};
    const [state, dispatch] = useReducer(reducer, initialState);

    const addTask = (newTask) => {
        dispatch({type: 'addTask', task: newTask});
    }

    const deleteTask = (id) => {
        dispatch({type: 'deleteTask', taskId: id});
    }

    

    return (
        <context.Provider
        value={{
            state,
            addTask,
            deleteTask
        }}>
        {children}
        </context.Provider>
    );

}

export default TaskContext;