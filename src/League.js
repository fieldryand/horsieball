import React, { Component } from 'react';

class League extends Component {
  getMatches(){
    const matches = this.props.matches;
    const matchTable = matches.map((match, index) => {
      const h = Math.round(100 * match.h);
      const d = Math.round(100 * match.d);
      const a = Math.round(100 * match.a);
      return (
        <div key={index} className="matchRow">
          <div className="matchCell">{match.match_timestamp}</div>
          <div className="matchCell-large">{match.home}</div>
          <div className="matchCell">
            <span className="prob-value">{h}%</span>
            <div className={`prob-indicator-` + h}></div>
          </div>
          <div className="matchCell">
            <span className="prob-value">{d}%</span>
            <div className={`prob-indicator-` + d}></div>
          </div>
          <div className="matchCell">
            <span className="prob-value">{a}%</span>
            <div className={`prob-indicator-` + a}></div>
          </div>
          <div className="matchCell-large">{match.away}</div>
        </div>
      )
    })
    return matchTable;
  }
  render() {
    return (
      <div className="league">
        <div className="league-name">{this.props.name}</div>
        <div className="matchRow">
          <div className="matchCell">Date</div>
          <div className="matchCell-large">Home</div>
          <div className="matchCell">H</div>
          <div className="matchCell">D</div>
          <div className="matchCell">A</div>
          <div className="matchCell-large">Away</div>
        </div>
        {this.getMatches()}
      </div>
    );
  }
}

export default League;
