import React, { Component } from 'react';
import uuid from 'uuid';
import CryptowatchEmbed from 'cryptowatch-embed';

import './CryptoEmbed.css';

class CryptoEmbed extends Component {
  constructor() {
    super();
    this.state = {
      id: 'id-' + uuid().substr(0, 5),
      customColorScheme: {
        bg: "000000",
        text: "b2b2b2",
        textStrong: "e5e5e5", // Emphasized text
        textWeak: "7f7f7f", // De-emphasized text
        short: "C60606", // Stroke color of decreasing candlesticks, ask orders, and other "short" related UI
        shortFill: "C60606", // Fill color of decreasing candlesticks
        long: "00B909", // Color of increasing candlesticks, bid orders, and other "long" related UI
        longFill: "000000", // Fill color of increasing candlesticks
        cta: "363D52", // Color of buttons and other prominent UI elements
        ctaHighlight: "414A67", // Color of buttons and other prominent UI elements when hovered over
        alert: "FFD506", // Color associated with price & volume alerts
      },
    };
  }

  componentDidMount() {
    const { exchange, currencyPair } = this.props.market;
    const timePeriod = this.props.timePeriod || '4H';
    const chart = new CryptowatchEmbed(exchange, currencyPair, {
      timePeriod,
      customColorScheme: this.state.customColorScheme,
    });

    chart.mount(`#${this.state.id}`);
  }

  render() {
    return (
      <div id={this.state.id} className="CryptoEmbed"/>
    );
  }
}

export default CryptoEmbed;
