import React, { Component } from 'react';
import './TimePeriod.css';

import timePeriods from '../../constants/timePeriods';

class TimePeriod extends Component {
  render() {
    return (
      <div className="TimePeriod">
        <div
          className="TimePeriod-title"
        >
          Time period:
        </div>
        {timePeriods.map((timePeriod, index) =>
          <div
            className={`TimePeriod-col ${this.props.timePeriod === timePeriod && 'TimePeriod-selected'}`}
            onClick={() => this.props.setTimePeriod(timePeriod)}
            key={index}
          >
            {timePeriod}
          </div>
        )}
        <div
          className={`TimePeriod-lock ${this.props.lock && 'TimePeriod-selected'}`}
          onClick={this.props.switchLocker}
        >
          {this.props.lock ? 'Unlock' : 'Lock'} iframes
        </div>
      </div>
    );
  }
}

export default TimePeriod;
