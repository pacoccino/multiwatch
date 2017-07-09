import React, { Component } from 'react';
import uuid from 'uuid';
import CryptowatchEmbed from 'cryptowatch-embed';

import './CryptoEmbed.css';

const customColorScheme = {
  bg:           "1e2b34",
  text:         "5b656b",
  textStrong:   "87959e", // Emphasized text
  textWeak:     "676c6f", // De-emphasized text
  short:        "f37851", // Stroke color of decreasing candlesticks, ask orders, and other "short" related UI
  shortFill:    "f37851", // Fill color of decreasing candlesticks
  long:         "7fed63", // Color of increasing candlesticks, bid orders, and other "long" related UI
  longFill:     "7fed63", // Fill color of increasing candlesticks
  cta:          "363D52", // Color of buttons and other prominent UI elements
  ctaHighlight: "414A67", // Color of buttons and other prominent UI elements when hovered over
  alert:        "FFD506", // Color associated with price & volume alerts

  // Optionally also provide an object defining colors for various TA
  ta: {
    lines:       ["2BC400", "E01500", "22A9CB", "C31B64", "E3C22D"], // EMA, MA, and other lies
    channel:     "68C01C", // Keltner channel, bollinger bands
    // Ichimoku lines
    tenkanSen:   "5BA6B3",
    kijunSen:    "CD66A9",
    chikouSpan:  "626174",
    senkouSpanA: "6CB57E",
    senkouSpanB: "C86C64"
  }
};

class CryptoEmbed extends Component {
  constructor() {
    super();
    this.state = {
      id: 'id-' + uuid().substr(0, 5),
    };
  }

  componentDidMount() {
    this.mount(this.props.timePeriod);
  }
  mount(timePeriod = '4H') {
    if(this.ref.childNodes.length > 0) {
      this.ref.removeChild(this.ref.childNodes[0]);
    }
    const { exchange, currencyPair } = this.props.market;
    this.chart = new CryptowatchEmbed(exchange, currencyPair, {
      timePeriod,
      customColorScheme,
    });

    this.chart.mount(`#${this.state.id}`);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.timePeriod !== this.props.timePeriod) {
      this.mount(newProps.timePeriod);
    }
  }

  render() {
    return (
      <div id={this.state.id} className="CryptoEmbed" ref={c => {this.ref = c}} />
    );
  }
}

export default CryptoEmbed;
