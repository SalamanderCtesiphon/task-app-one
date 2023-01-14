import React, { Component } from 'react'

export class AddTask extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.AddTask(this.state.title);
    this.setState({ title: '' })
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

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