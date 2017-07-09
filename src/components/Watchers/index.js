import React, { Component } from 'react';
import { connect } from 'react-redux';

import Watcher from '../Watcher';
// import { selTimePeriod, selLocker } from '../../business/selectors';

import './Watchers.css';

class Watchers extends Component {
  state = {};

  render() {
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
