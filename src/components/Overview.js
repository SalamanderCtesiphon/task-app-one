import React from "react";
import "../App.css";

const Overview = ({ tasks, delTask }) => {

  return (
    <ul className="container">
      {tasks.map((task) => {
        return <li key={task.id}>
          {tasks.indexOf(task) + 1 }.{' '}
          {task.text}
          {''}
          <button 
            onClick={() => delTask(task.id)}>
              Delete
          </button>
        </li>;
      })}
    </ul>
  );
};

export default Overview;