import React, { Component } from 'react';
import CryptoEmbed from '../CryptoEmbed';
import {formatCurrencyPair} from "../../helpers/formatter";

import './Watchers.css';

class Watchers extends Component {
  render() {
    return (
      <div className="Watchers">
        {this.props.watchers.map((watcher, index) =>
          <div key={index}>
            <div className="Watchers-header">
              <span
                onClick={() => this.props.deleteWatcher(watcher)}
                className="Watchers-closer"
              >
                X
              </span>
              <span
                className="Watchers-name"
              >
                {formatCurrencyPair(watcher.market.currencyPair)}
              </span>
              <span
                className="Watchers-price"
              >0.001$</span>
            </div>
            <div className="Watchers-embedContainer">
              <CryptoEmbed
                market={watcher.market}
                timePeriod={this.props.timePeriod}
              />
              {this.props.lock && <div className="Watchers-locker"/>}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Watchers;
