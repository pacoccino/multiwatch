import React, { Component } from 'react';
import './Toolbar.css';

import timePeriods from '../../constants/timePeriods';

// TODO Fullscreen
class Toolbar extends Component {
  render() {
    return (
      <div className="Toolbar">
        <div
          className={`Toolbar-markets ${this.props.showMarkets ? 'TimePeriod-markets-hide' : 'TimePeriod-markets-show'}`}
          onClick={this.props.switchMarkets}
        >
          {this.props.showMarkets ? 'Hide' : 'Show'} markets
        </div>
        {timePeriods.map((timePeriod, index) =>
          <div
            className={`Toolbar-col ${this.props.timePeriod === timePeriod && 'TimePeriod-selected'}`}
            onClick={() => this.props.setTimePeriod(timePeriod)}
            key={index}
          >
            {timePeriod}
          </div>
        )}
        <div
          className={`Toolbar-lock ${this.props.lock && 'TimePeriod-selected'}`}
          onClick={this.props.switchLocker}
        >
          {this.props.lock ? 'Unlock' : 'Lock'} iframes
        </div>
        <div
          className={`Toolbar-FullScreen`}
          onClick={this.props.switchFullScreen}
        >
          F
        </div>
      </div>
    );
  }
}

export default Toolbar;
