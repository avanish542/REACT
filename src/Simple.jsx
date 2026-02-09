import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, done: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h2>📝 Simple Task App</h2>

      <div>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task..."
          style={styles.input}
        />
        <button onClick={addTask} style={styles.button}>Add</button>
      </div>

      <ul style={styles.list}>
        {tasks.map((t, index) => (
          <li key={index} style={styles.item}>
            <span
              onClick={() => toggleTask(index)}
              style={{
                textDecoration: t.done ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {t.text}
            </span>
            <button onClick={() => deleteTask(index)} style={styles.delete}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial"
  },
  input: {
    padding: "8px",
    width: "70%"
  },
  button: {
    padding: "8px",
    marginLeft: "5px"
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px"
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px"
  },
  delete: {
    border: "none",
    background: "transparent",
    cursor: "pointer"
  }
};
