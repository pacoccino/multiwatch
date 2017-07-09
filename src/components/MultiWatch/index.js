import React, { Component } from 'react';
import { without } from 'lodash';
import Markets from "../Markets";
import Watchers from "../Watchers";

import './MultiWatch.css';
import Toolbar from "../Toolbar/index";

import storage from '../../helpers/storage';

class MultiWatch extends Component {
  constructor() {
    super();
    this.state = {
      watchers: [],

      showToolbar: false,
      showMarkets: false,
    };
  }

  componentDidMount() {
    storage.getStorage().then(
      store => {
        if(store.hasStore) {
          this.setState({
            watchers: store.watchers,
          })
        }
      }
    ).catch(() => 0);
  }

  addWatcher = (market) => {
    const watcher = {
      market,
    };
    const watchers = this.state.watchers.concat(watcher);
    this.setState({ watchers });
    storage.setStorage({ watchers });
  }

  deleteWatcher = (watcher) => {
    const watchers = without(this.state.watchers, watcher)
    this.setState({ watchers });
    storage.setStorage({ watchers });
  }


  showToolbar = () => {
    this.setState({ showToolbar: true });
  }
  showMarkets = () => {
    this.setState({ showMarkets: true });
  }

  hideToolbar = () => {
    this.setState({ showToolbar: false });
  }
  hideMarkets = () => {
    this.setState({ showMarkets: false });
  }

  render() {
    return (
      <div className="MultiWatch">
        <div className="MultiWatch-Watchers">
          <Watchers
            deleteWatcher={this.deleteWatcher}
            watchers={this.state.watchers}
          />
        </div>
        <div
          className="MultiWatch-Markets"
          onMouseLeave={this.hideMarkets}
        >
          <div
            className="MultiWatch-Markets-opener"
            onMouseEnter={this.showMarkets}
          >
            >
          </div>
          {this.state.showMarkets &&
          <Markets
            addWatcher={this.addWatcher}
          />
          }
        </div>
        <div
          className="MultiWatch-Toolbar"
          onMouseLeave={this.hideToolbar}
        >
          <div
            className="MultiWatch-Toolbar-opener"
            onMouseEnter={this.showToolbar}
          >
            v
          </div>
          {this.state.showToolbar &&
          <Toolbar />
          }
        </div>
      </div>
    );
  }
}

export default MultiWatch;
