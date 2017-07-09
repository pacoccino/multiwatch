import React, { Component } from 'react';
import { connect } from 'react-redux';

import Watcher from '../Watcher';
// import { selTimePeriod, selLocker } from '../../business/selectors';

import './Watchers.css';
import logo from '../../resources/multiwatch-trans.png';

class Watchers extends Component {
  state = {};

  renderWelcome() {
    return (
      <div className="Watchers">
        <div className="Watchers-welcome">
          <img src={logo} className="Watchers-logo" alt="logo" />
          <h2>Welcome to MultiWatch</h2>
          <p>This tool allows you to watch multiple cryptocurrencies on one page.</p>
          <p>To begin, add a watcher from the left Markets menu.</p>
          <span className="Watchers-welcome-left">{'<'}</span>
        </div>
      </div>
    );
  }

  render() {
    if(this.props.watchers.length === 0) {
      return this.renderWelcome();
    }
    return (
      <div className="Watchers">
        {this.props.watchers.map((watcher, index) =>
          <Watcher
            key={index}
            watcher={watcher}
            deleteWatcher={this.props.deleteWatcher}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, null)(Watchers);
