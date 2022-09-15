import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <label htmlFor="email">
          Email:
          <input type="email" name='email' id="email" />
        </label>
      </div>
    )
  }
}

