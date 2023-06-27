import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";
import TaskContext from "./context/TaskContext";

function App() {
  return (
    <>
      <TaskContext>
        <TaskForm>
          <TaskCard />
        </TaskForm>
      </TaskContext>
    </>
  );
}

export default App;
