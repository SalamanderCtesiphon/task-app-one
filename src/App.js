import { useState } from "react";
import Header from "./components/Header";
import Overview from "./components/Overview";
import './App.css'

const App = () => {
  const [text, setText] = useState('')
  const [tasks, setTasks] = useState([])
  const [todoEditing, settodoEditing] = useState(null)
  const [editngText, setEditingText] = useState('')

  const onSubmitTask = (e) => {
    e.preventDefault();
    
    if(!text) {
      alert('Please add a task')
      return
    }
    addTask({ text })

    setText('')
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const delTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id))
  }

  const submitEdits = (id) => {
    const updatedTasks = [...tasks].map((task) => {
      if (task.id === id) {
        task.text = editngText;
      }
      return task;
    });
    setTasks(updatedTasks);
    settodoEditing(null)
  }

    return (
      <div className="App">
        <Header />
        <form onSubmit={onSubmitTask}>
          <label htmlFor="taskInput">Enter task:     </label>
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text"
            id="taskInput"
          /><span>    </span>
          <button type="submit">Add Task</button>
        </form>
        <Overview 
          tasks={tasks} 
          delTask={delTask}
          setEditingText={setEditingText}
          submitEdits={submitEdits}
          todoEditing={todoEditing}
          settodoEditing={settodoEditing}
        />
      </div>
    );
}

export default App;
