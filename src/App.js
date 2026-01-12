import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      { id: Date.now(), text: task, completed: false }
    ]);
    setTask("");
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: true } : t
      )
    );
  };

  const clearAllTasks = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <h1>Task Tracker</h1>

      <p style={{ textAlign: "center", color: "#666", fontSize: "14px" }}>
        {tasks.length} task{tasks.length !== 1 && "s"}
      </p>

      <div className="input-box">
        <input
          type="text"
          value={task}
          placeholder="Enter a task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul>
        {tasks.map((t) => (
          <li key={t.id} className={t.completed ? "completed" : ""}>
            <span>
              {t.text} ({t.completed ? "Completed" : "Pending"})
            </span>

            {!t.completed && (
              <button onClick={() => completeTask(t.id)}>
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>

      {tasks.length > 0 && (
        <button
          onClick={clearAllTasks}
          style={{ marginTop: "10px" }}
        >
          Clear All
        </button>
      )}
    </div>
  );
}

export default App;
