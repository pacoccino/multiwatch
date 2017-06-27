import React, { Component } from 'react';
import './Toolbar.css';

import timePeriods from '../../constants/timePeriods';

// TODO Fullscreen
class Toolbar extends Component {
  render() {
    return (
      <div className="TimePeriod">
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
        <div
          className={`TimePeriod-FullScreen`}
          onClick={this.props.switchFullScreen}
        >
          F
        </div>
      </div>
    );
  }
}

export default Toolbar;
