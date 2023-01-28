import { useState } from "react";
import Header from "./components/Header";
import Overview from "./components/Overview";

const App = () => {
  const [text, setText] = useState('')
  const [tasks, setTask] = useState([])

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
    setTask([...tasks, newTask])
  }

  const delTask = (id) => {
    this.setState({ tasks: [...this.state.tasks.filter(task => task.id !==id)]})
  }

    return (
      <div>
        <Header />
        <form onSubmit={onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text"
            id="taskInput"
          />
          <button type="submit">Add Task</button>
        </form>
        <Overview 
          tasks={tasks} 
          delTask={delTask}
        />
      </div>
    );
}

export default App;
