import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loader from '../components/Loader';

import { getMarkets } from '../business/action-creators';

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
      this.props.getMarkets(),
    ])
      .then(() => {
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
  getMarkets,
};

export default connect(null, mapDispatchToProps)(InitializerComponent);
