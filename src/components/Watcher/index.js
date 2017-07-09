import React, { Component } from 'react';
import { connect } from 'react-redux';
import CryptoEmbed from '../CryptoEmbed';
import {formatCurrencyPair} from "../../helpers/formatter";
import { selSummaries, selTimePeriod, selLocker } from '../../business/selectors';

import './Watcher.css';

class Watcher extends Component {
  state = {
    show: true
  };

  switchShow = () => {
    this.setState({
      show: !this.state.show,
    });
  }

  getCurrentPrice(market) {
    const data = this.props.summaries[`${market.exchange}:${market.currencyPair}`];
    return data.price.last;
  }

  getChange(market) {
    const data = this.props.summaries[`${market.exchange}:${market.currencyPair}`];
    const change = data.price.change.percentage;
    return (
      <span>
        {change > 0 ? '+' : '-'} {change}
      </span>
    );
  }

  render() {
    const { lock, watcher, deleteWatcher } = this.props;
    return (
      <div className="Watcher-container">
        <div className="Watcher-header">
          <div>
            <div
              onClick={() => deleteWatcher(watcher)}
              className="Watcher-closer"
            >
              X
            </div>
            <div
              onClick={this.switchShow}
              className={`Watcher-hider ${this.state.show ? 'Watcher-hider-show' : 'Watcher-hider-hide'}`}
            >
              {this.state.show ? 'Hide' : 'Show'}
            </div>
          </div>
          <span
            className="Watcher-name"
          >
              {formatCurrencyPair(watcher.market.currencyPair)}
            </span>
          <span
            className="Watcher-change"
          >{this.getChange(watcher.market)}</span>
          <span
            className="Watcher-price"
          >{this.getCurrentPrice(watcher.market)}</span>
        </div>
        <div className={`Watcher-embedContainer ${!this.state.show && 'Watcher-embedContainer-hide'}`}>
          <CryptoEmbed
            market={watcher.market}
            timePeriod={this.props.timePeriod}
          />
          {lock && <div className="Watcher-locker"/>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  summaries: selSummaries(state),
  timePeriod: selTimePeriod(state),
  lock: selLocker(state),
});



export default connect(mapStateToProps, null)(Watcher);
