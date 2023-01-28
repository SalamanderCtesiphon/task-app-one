import React from "react";
import "../App.css";

const Overview = ({ tasks, delTask }) => {

  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>{task.text}{''}
        <button onClick={() => delTask(task.id)}>Delete</button></li>;
      })}
    </ul>
  );
};

export default Overview;