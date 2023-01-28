import React from "react";
import "../App.css";

const Overview = ({ tasks, delTask, submitEdits, todoEditing, settodoEditing, setEditingText }) => {

  return (
    <div className="list">
      <ul>
        { tasks.length === 0 &&
          <div className="unicorn">No more tasks to complete ...</div>
        }
        {tasks.map((task) => (
          <li key={task.id} className='listItems'>
            <div className="numbers">{tasks.indexOf(task) + 1 }. {""}</div>
            {task.id === todoEditing ? (
              <input
                type='text'
                placeholder={task.text}
                onChange={(e) => setEditingText(e.target.value)}
                
              />
            ) : (
              <div className="taskText">
                <div className="text">{task.text}</div>
              </div>
            )}  
            <div className="btnBox">
              {task.id === todoEditing ? (
                <button onClick={() => submitEdits(task.id)}>Submit</button>
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