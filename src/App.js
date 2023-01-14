import React, { Component } from "react";
import uniqid from 'uniqid';
import AddTask from "./components/AddTask";

class App extends Component {
  state = {
    tasks: [
      {
        id: '',
        title: ''
      }
    ]
  }

  addTask = (title) => {
    const newTask = {
      id: uniqid(),
      title
    }
  }  

  render() {
    return (
      <div className="App">
       <div className="container">
        <AddTask />
       </div>
      </div>
    );
  }
}

export default App;
