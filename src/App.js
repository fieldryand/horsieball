import React, { Component } from 'react';
import soccerball from './Soccerball.svg';
import './App.css';
import Current from './Current.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <img src={soccerball} className="header-soccerball" alt="Touchline90 spinny ball :D" />
        </div>
        <Current/>
      </div>
    );
  }
}

export default App;
