import React, { Component } from 'react'

export default class Randomuser extends Component {
  state = {
    loading: true,
    data: [],
  }

  async componentDidMount(){
   const API = await fetch('https://api.randomuser.me/');
   const json = await API.json();
   this.setState({
    loading: false,
    data: json.results
  })
  }

  render() {
    const { loading, data } = this.state;
    const load = <p>Carregando...</p>
    return (
      <div>
        {loading ? load : data.map()}
      </div>
    )
  }
}
