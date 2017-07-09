import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Markets.css';

import {
  selSearch,
  selPairsByExchange,
  selExchanges,
  selFilteredPairsByExchange,
  selFilteredExchanges
} from '../../business/selectors';
import { setSearch } from '../../business/actions';
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

  handleSearch = (e) => {
    this.props.setSearch(e.target.value);
  }
  resetSearch = (e) => {
      this.props.setSearch('');
    }
  handleEscape = (e) => {
    if (e.keyCode === 27) {
      this.resetSearch();
    }
  }
  render() {
    return (
      <div className="Markets">
        <div className="Markets-search">
          <input
            type="text"
            className="Markets-search-input"
            placeholder="Search ..."
            value={this.props.search}
            onChange={this.handleSearch}
            onKeyDown={this.handleEscape}
          />
          <div
            className="Markets-search-reset"
            onClick={this.resetSearch}
          >X</div>
        </div>
        {this.props.exchanges.map((exchange, iE) =>
          <div
            key={iE}
            className="Markets-exchange"
            onClick={() => this.switchExchange(exchange)}
          >
            {(this.props.search || this.state.exchangesOpen[exchange]) ? '^' : '>'} {exchange}
            {(this.props.search || this.state.exchangesOpen[exchange]) &&
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
  search: selSearch(state),
  exchanges: selExchanges(state),
  pairsByExchange: selFilteredPairsByExchange(state),
});

const mapDispatchToProps = {
  setSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Markets);
