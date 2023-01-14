import React, { Component } from 'react'

export class AddTask extends Component {
  state = {
    title: ''
  }

  render() {
    return (
    <form>
      <input
        type="text"
        name="title"
        placeholder="Add task ..."
        value={this.state.title}
        onChange={this.onChange}
      />
      <input
        type="submit"
        value="Submit"
        className="btn"
      />
    </form>
    )
  }
}

export default AddTask