import React, { Component } from 'react'

export class TaskItem extends Component {
  render() {
    return (
      <div>
        <p>
            { this.props.task.title }
            <button onClick={this.props.delTask.bind(this, this.props.task.id)}>x</button>
        </p>
      </div>
    )
  }
}

export default TaskItem