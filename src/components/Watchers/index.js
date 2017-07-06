import React, { Component } from 'react';
import { cwRequest } from '../../helpers/http';

import Watcher from '../Watcher';

import './Watchers.css';

class Watchers extends Component {

  componentDidMount() {
    const summariesUrl = 'https://api.cryptowat.ch/markets/summaries';

    cwRequest(summariesUrl).then(summaries => this.setState({ summaries }));
  }

  render() {
    return (
      <div className="Watchers">
        {this.props.watchers.map((watcher, index) =>
          <Watcher
            key={index}
            watcher={watcher}
            deleteWatcher={this.props.deleteWatcher}
            lock={this.props.lock}
            summaries={this.state.summaries}
          />
        )}
      </div>
    );
  }
}

export default Watchers;
