import React, { Component } from 'react'

export default class Randomuser extends Component {
  state = {
    data: [],
    loading: true,
  }

  fetchAPI = () => {
    this.setState({loading:true}, async () => {
      const API = await fetch('https://api.randomuser.me/');
      const json = await API.json();
      this.setState({
        loading: false,
        data: json.results
      })
    })
  }

  async componentDidMount(){
   this.fetchAPI();
  }

  render() {
    const { loading, data } = this.state;
    const load = <p>Carregando...</p>
    return (
      <div>
        {loading ? load : data.map((e) => (
          <div key={e.name.first}>
            <img src={e.picture.large} alt={e.name.first} />
            <h1>{`${e.name.title}. ${e.name.first} ${e.name.last}`}</h1>
            <p>{`Email: ${e.email}`}</p>
            <p>{`idade: ${e.dob.age}`}</p>
          </div>
        ))}
      </div>
    )
  }
}
