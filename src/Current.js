import React, { Component } from 'react';
import forecast from './sample_json/forecast.json'
import League from './League.js'
import axios from 'axios';

class Current extends Component {
  componentWillMount() {
  }
  getLastUpdated(){
    return axios.get('/last_updated');
  }
  getLeagues() {
    const leagues = [];
    let totalMatches = 0;
    for (var league in forecast) {
      const matches = forecast[league];
      totalMatches += matches.length;
      leagues.push(<League key={league} name={league} matches={matches}></League>)
    }
    return (
      <div>
        <div>{this.getLastUpdated()}</div>
        <div>Total matches: {totalMatches}</div>
        <div>{leagues}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="Current">
        {this.getLeagues()}
      </div>
    );
  }
}

export default Current;
