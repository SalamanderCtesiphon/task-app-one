import React from "react";
import "../App.css";

const Overview = (props) => {
  const { tasks, id } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>{task.text}{''}
        <button onClick={task.delTask.bind(this, id)}>Delete</button></li>;
      })}
    </ul>
  );
};

export default Overview;