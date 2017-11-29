import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loader from '../components/Loader';
import storage from '../helpers/storage';

import { setSummaries } from '../business/actions';
import { getMarkets, setMarkets, getSummaries, checkCache } from '../business/action-creators';

const initstorage = require('../constants/storage.json');
const markets = require('../constants/markets.json').result;
const summaries = require('../constants/summaries.json').result;

class InitializerComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      ready: false,
      error: null,
    };
  }
  componentWillMount() {
    Promise.all([
      this.props.checkCache(),
      this.props.setMarkets(markets),
      this.props.setSummaries(summaries),
      // this.props.getMarkets(),
      this.props.getSummaries(),
    ])
      .then(() => {
        storage.setStorage(initstorage);
        this.setState(() => ({ ready: true }));
      })
      .catch((error) => {
        // this.setState(() => ({ error }));
        console.log(error);
      });
  }

  render() {
    if (this.state.error) {
      return (
        <p style={{ textAlign: 'center' }}>
          There was an error while loading the application.
        </p>
      );
    }
    return this.state.ready ? this.props.children : <Loader />;
  }
}

InitializerComponent.propTypes = {
  children: PropTypes.node,
};

InitializerComponent.defaultProps = {
  children: null,
};

const mapDispatchToProps = {
  checkCache,
  getMarkets,
  setMarkets,
  getSummaries,
  setSummaries,
};

export default connect(null, mapDispatchToProps)(InitializerComponent);
