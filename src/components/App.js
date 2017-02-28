import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import UserList from './../containers/user-list';
import UserDetail from './../containers/user-detail';

class App extends Component {
  render() {
    return (
      <div>
       <h2>User Names</h2>
          <UserList> </UserList>
          <hr/>
          <h2>User Detail</h2>
          <UserDetail/>
      </div>
    );
  }
}

export default App;
