import React, { Component } from 'react';
import { without } from 'lodash';
import Markets from "../Markets";
import Watchers from "../Watchers";

import './MultiWatch.css';
import TimePeriod from "../TimePeriod/index";

import storage from '../../helpers/storage';

class MultiWatch extends Component {
  constructor() {
    super();
    this.state = {
      timePeriod: '4H',
      watchers: [],
      lock: true,
    };
  }

  componentDidMount() {
    storage.getStorage().then(
      store => {
        if(store.hasStore) {
          this.setState({
            watchers: store.watchers,
            timePeriod: store.timePeriod,
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

  setTimePeriod = (timePeriod) => {
    // const index = this.state.watchers.indexOf(watcher);
    const watchers = this.state.watchers;
    this.setState({
      timePeriod,
      watchers: [],
    }, () => {
      this.setState({
        timePeriod,
        watchers,
      });
    });
    storage.setStorage({ timePeriod });
  }

  switchLocker = () => {
    this.setState({
      lock: !this.state.lock,
    })
  }

  render() {
    return (
      <div className="MultiWatch">
        <div className="MultiWatch-TimePeriod">
          <TimePeriod
            setTimePeriod={this.setTimePeriod}
            timePeriod={this.state.timePeriod}
            switchLocker={this.switchLocker}
            lock={this.state.lock}
          />
        </div>
        <div className="MultiWatch-cols">
          <div className="MultiWatch-Markers">
            <Markets
              addWatcher={this.addWatcher}
            />
          </div>
          <div className="MultiWatch-Watchers">
            <Watchers
              deleteWatcher={this.deleteWatcher}
              watchers={this.state.watchers}
              timePeriod={this.state.timePeriod}
              lock={this.state.lock}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MultiWatch;
