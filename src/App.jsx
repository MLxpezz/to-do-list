import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";
import TaskContext from "./context/TaskContext";

function App() {
  return (
    <section className="App">
      <TaskContext>
        <TaskForm>
          <TaskCard />
        </TaskForm>
      </TaskContext>
    </section>
  );
}

export default App;
