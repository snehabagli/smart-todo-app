import { useState, useEffect } from "react";
import axios from "axios";
import Auth from "./Auth";
import "./App.css";

const API = "http://localhost:5000/api/tasks";

function App() {
  //Auth state
  const [loggedIn, setLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  //Tasks
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  //UI
  const [dark, setDark] = useState(false);

  const token = localStorage.getItem("token");

  //Hooks MUST be at top level
  useEffect(() => {
    if (token) {
      setLoggedIn(true);
      fetchTasks();
    }
    // eslint-disable-next-line
  }, []);

  //Fetch tasks
  const fetchTasks = async () => {
    try {
      const res = await axios.get(API, {
        headers: { Authorization: token },
      });
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  //Add task
  const addTask = async () => {
    if (!task.trim()) return;

    await axios.post(
      API,
      { title: task },
      { headers: { Authorization: token } }
    );

    setTask("");
    fetchTasks();
  };

  //Toggle task
  const toggleTask = async (id) => {
    await axios.put(
      `${API}/${id}`,
      {},
      { headers: { Authorization: token } }
    );
    fetchTasks();
  };

  //Delete task
  const deleteTask = async (id) => {
    await axios.delete(`${API}/${id}`, {
      headers: { Authorization: token },
    });
    fetchTasks();
  };

  //Logout
  const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setTasks([]);
  };

  //Render Auth if not logged in
  if (!loggedIn) {
    return <Auth onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div className={dark ? "app-container dark" : "app-container"}>
      <div className="todo-card">
        <div className="top-bar">
          <button className="mode-btn" onClick={() => setDark(!dark)}>
            {dark ? "☀ Light" : "🌙 Dark"}
          </button>

          <button className="logout-btn" onClick={logout}>
            Logout 
          </button>
        </div>

        <h2> My Creative To-Do </h2>

        <div className="input-group">
          <input
            type="text"
            placeholder="Write something magical..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>

        <ul>
          {tasks.map((t) => (
            <li key={t._id} className={t.completed ? "completed" : ""}>
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleTask(t._id)}
              />
              <span onClick={() => toggleTask(t._id)}>
                {t.title}
              </span>
              <button
                className="delete-btn"
                onClick={() => deleteTask(t._id)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
