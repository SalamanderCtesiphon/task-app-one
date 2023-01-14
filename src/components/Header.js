import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <h1 style={headerStyle}>Task App</h1>
    )
  }
}

const headerStyle = {
    background:'#333',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '6vh'
}

export default Header