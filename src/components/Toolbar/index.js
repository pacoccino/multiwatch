import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Toolbar.css';

import timePeriods from '../../constants/timePeriods';
import { selTimePeriod, selLocker } from '../../business/selectors';
import { setTimePeriod, switchLocker } from '../../business/actions';

class Toolbar extends Component {
  render() {
    return (
      <div className="Toolbar">
        {timePeriods.map((timePeriod, index) =>
          <div
            className={`Toolbar-col ${this.props.timePeriod === timePeriod && 'Toolbar-selected'}`}
            onClick={() => this.props.setTimePeriod(timePeriod)}
            key={index}
          >
            {timePeriod}
          </div>
        )}
        <div
          className={`Toolbar-lock ${this.props.lock && 'Toolbar-selected'}`}
          onClick={this.props.switchLocker}
        >
          {this.props.lock ? 'Unlock' : 'Lock'} iframes
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  timePeriod: selTimePeriod(state),
  lock: selLocker(state),
});

const mapDispatchToProps = {
  setTimePeriod,
  switchLocker,
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
