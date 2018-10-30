import React, { Component } from 'react';

import ListComponent from './Components/ListComponent';
import ClientsDetailsContainer from './Containers/ClientsDetailsContainer'

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="listBox">
          <ListComponent/>
        </div>
        <ClientsDetailsContainer/>
      </div>
    );
  }
}

export default App;
