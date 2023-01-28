import React from "react";
import "../App.css";

const Overview = ({ tasks, delTask, submitEdits, todoEditing, settodoEditing, setEditingText }) => {

  return (
    <div>
      <ul>
        { tasks.length === 0 &&
          <li>No more tasks to complete</li>
        }
        {tasks.map((task) => (
          <li key={task.id}>
            <div className="numbers">{tasks.indexOf(task) + 1 }. {""}</div>
            {task.id === todoEditing ? (
              <input
                type='text'
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div>
                <div>{"    "}</div>
                <div>{task.text}</div>
              </div>
            )}  
            <div className="btnBox">
              {task.id === todoEditing ? (
                <button onClick={() => submitEdits(task.id)}>Resubmit</button>
              ) : (
                <button onClick={() => settodoEditing(task.id)}>Edit</button>
              )}
              {' '}
              <button 
                onClick={() => delTask(task.id)}>
                  Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Overview;