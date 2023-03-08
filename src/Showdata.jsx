import axios from "axios";
import React, { Component } from "react";

class Showdata extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/get')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        
      <table border={1}>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>language</th>
          <th>author</th>
          <th>price</th>
          <th>rating</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.language}</td>
            <td>{user.author}</td>
            <td>{user.price}</td>
            <td>{user.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
    );
  }}
  
export default Showdata;