import React from 'react';
import { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      const users = res.data;
      this.setState( {users} )
      // console.log(res.data)
      // console.log( {res} )
    })
  }
  render() {
    return (
      <div>
        { this.state.users.map( person => 
          <p key={person.id}>{person.name}
          <span> {person.email}</span>
          <span> {person.address.city}</span>
          <span> {person.address.street}</span>
          </p>
        ) }
      </div>
    );
  }
}
export default App;







// res это сокращенно от result 
// https://jsonplaceholder.typicode.com/users 
// обратить внимание, здесь НЕТ ;
// кладем все в тег <p> <span></span> </p> чтобы отобразить все на одной строке
