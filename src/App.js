import React, { Component } from "react";
import uniqid from 'uniqid';
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Overview from "./components/Overview";

class App extends Component {
  state = {
    tasks: [
      {
        id: '',
        title: ''
      }
    ]
  }

  delTask = (id) => {
    this.setState({ tasks: [...this.state.tasks.filter(task => task.id !=id)]})
  }

  addTask = (title) => {
    const newTask = {
      id: uniqid(),
      title
    }
    this.setState({ tasks: [...this.state.tasks, newTask]})
  }  

  render() {
    return (
      <div className="App">
       <div className="container">
        <Header />
        <AddTask />
        <Overview tasks={this.state.tasks} delTask={this.delTask}/>
       </div>
      </div>
    );
  }
}

export default App;
