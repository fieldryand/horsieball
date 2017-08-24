import React, { Component } from 'react';
import forecast from './sample_json/forecast.json'
import League from './League.js'
import axios from 'axios';

class Current extends Component {
  constructor() {
    super();
    this.state = {
      lastUpdated: [],
      forecast: {}
    };
  }
  componentWillMount(){
    var self = this;
    axios.get('/last_updated').then(function(result) {
      self.setState({
            lastUpdated: result.data
          });
    })
    axios.get('/forecast').then(function(result) {
      self.setState({
            forecast: result.data
          });
    })
  }
  getLeagues() {
    const forecast = this.state.forecast;
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
        Last updated: {this.state.lastUpdated}
        {this.getLeagues()}
      </div>
    );
  }
}

export default Current;
