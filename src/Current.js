import React, { Component } from 'react';
import forecast from './sample_json/forecast.json'
import League from './League.js'
import axios from 'axios';

class Current extends Component {
  componentWillMount() {
    console.log(forecast);
  }
  getLastUpdated(){
    let lastUpdated;
    axios.get('/last_updated').then(response => {lastUpdated = response.data});
    return lastUpdated;
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
        <div>Total matches: {totalMatches}</div>
        <div>{leagues}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="Current">
        {this.getLastUpdated()}
        {this.getLeagues()}
      </div>
    );
  }
}

export default Current;
