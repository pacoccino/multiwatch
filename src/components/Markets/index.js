import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Markets.css';

import { selExchanges, selPairsByExchange } from '../../business/selectors';
import {formatCurrencyPair} from "../../helpers/formatter";

class Markets extends Component {
  constructor() {
    super();

    this.state = {
      exchangesOpen: {},
    };
  }

  switchExchange(exchange) {
    this.setState({
      exchangesOpen: {
        ...this.state.exchangesOpen,
        [exchange]: !this.state.exchangesOpen[exchange],
      }
    })
  }

  addWatcher = (exchange, currencyPair) => (e) => {
    e.stopPropagation();
    this.props.addWatcher({ exchange, currencyPair });
  }

  render() {
    return (
      <div className="Markets">
        {this.props.exchanges.map((exchange, iE) =>
          <div
            key={iE}
            className="Markets-exchange"
            onClick={() => this.switchExchange(exchange)}
          >
            {this.state.exchangesOpen[exchange] ? '^' : '>'} {exchange}
            {this.state.exchangesOpen[exchange] &&
            <div>
              {this.props.pairsByExchange[exchange].map((currencyPair, iM) =>
                <div
                  onClick={this.addWatcher(exchange, currencyPair)}
                  key={iM}
                  className="Markets-currency">
                  + {formatCurrencyPair(currencyPair)}
                </div>
              )}
            </div>
            }
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  exchanges: selExchanges(state),
  pairsByExchange: selPairsByExchange(state),
});

export default connect(mapStateToProps, null)(Markets);
