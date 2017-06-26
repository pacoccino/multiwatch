const markets = [
  {
    "exchange": "bitfinex",
    "currencyPair": "btcusd",
    "route": "https://api.cryptowat.ch/markets/bitfinex/btcusd"
  },
  {
    "exchange": "bitfinex",
    "currencyPair": "ltcusd",
    "route": "https://api.cryptowat.ch/markets/bitfinex/ltcusd"
  },
  {
    "exchange": "bitfinex",
    "currencyPair": "ltcbtc",
    "route": "https://api.cryptowat.ch/markets/bitfinex/ltcbtc"
  },
  {
    "exchange": "bitfinex",
    "currencyPair": "ethusd",
    "route": "https://api.cryptowat.ch/markets/bitfinex/ethusd"
  },
  {
    "exchange": "bitfinex",
    "currencyPair": "ethbtc",
    "route": "https://api.cryptowat.ch/markets/bitfinex/ethbtc"
  },
  {
    "exchange": "bitfinex",
    "currencyPair": "etcbtc",
    "route": "https://api.cryptowat.ch/markets/bitfinex/etcbtc"
  },
  {
    "exchange": "bitfinex",
    "currencyPair": "etcusd",
    "route": "https://api.cryptowat.ch/markets/bitfinex/etcusd"
  },
  {
    "exchange": "bitfinex",
    "currencyPair": "bfxbtc",
    "route": "https://api.cryptowat.ch/markets/bitfinex/bfxbtc"
  },
  {
    "exchange": "bitfinex",
    "currencyPair": "bfxusd",
    "route": "https://api.cryptowat.ch/markets/bitfinex/bfxusd"
  },
  {
    "exchange": "bitfinex",
    "currencyPair": "bccusd",
    "route": "https://api.cryptowat.ch/markets/bitfinex/bccusd"
  },
  {
    "exchange": "bitfinex",
    "currencyPair": "bccbtc",
    "route": "https://api.cryptowat.ch/markets/bitfinex/bccbtc"
  },
  {
    "exchange": "bitfinex",
    "currencyPair": "bcuusd",
    "route": "https://api.cryptowat.ch/markets/bitfinex/bcuusd"
  },
  {
    "exchange": "bitfinex",
    "currencyPair": "bcubtc",
    "route": "https://api.cryptowat.ch/markets/bitfinex/bcubtc"
  },
  {
    "exchange": "coinbase",
    "currencyPair": "btcusd",
    "route": "https://api.cryptowat.ch/markets/coinbase/btcusd"
  },
  {
    "exchange": "coinbase",
    "currencyPair": "btceur",
    "route": "https://api.cryptowat.ch/markets/coinbase/btceur"
  },
  {
    "exchange": "coinbase",
    "currencyPair": "btcgbp",
    "route": "https://api.cryptowat.ch/markets/coinbase/btcgbp"
  },
  {
    "exchange": "coinbase",
    "currencyPair": "ethusd",
    "route": "https://api.cryptowat.ch/markets/coinbase/ethusd"
  },
  {
    "exchange": "coinbase",
    "currencyPair": "ethbtc",
    "route": "https://api.cryptowat.ch/markets/coinbase/ethbtc"
  },
  {
    "exchange": "coinbase",
    "currencyPair": "ltcusd",
    "route": "https://api.cryptowat.ch/markets/coinbase/ltcusd"
  },
  {
    "exchange": "coinbase",
    "currencyPair": "ltcbtc",
    "route": "https://api.cryptowat.ch/markets/coinbase/ltcbtc"
  },
  {
    "exchange": "bitstamp",
    "currencyPair": "btcusd",
    "route": "https://api.cryptowat.ch/markets/bitstamp/btcusd"
  },
  {
    "exchange": "bitstamp",
    "currencyPair": "btceur",
    "route": "https://api.cryptowat.ch/markets/bitstamp/btceur"
  },
  {
    "exchange": "bitstamp",
    "currencyPair": "xrpusd",
    "route": "https://api.cryptowat.ch/markets/bitstamp/xrpusd"
  },
  {
    "exchange": "bitstamp",
    "currencyPair": "xrpeur",
    "route": "https://api.cryptowat.ch/markets/bitstamp/xrpeur"
  },
  {
    "exchange": "kraken",
    "currencyPair": "btceur",
    "route": "https://api.cryptowat.ch/markets/kraken/btceur"
  },
  {
    "exchange": "kraken",
    "currencyPair": "btcusd",
    "route": "https://api.cryptowat.ch/markets/kraken/btcusd"
  },
  {
    "exchange": "kraken",
    "currencyPair": "btcgbp",
    "route": "https://api.cryptowat.ch/markets/kraken/btcgbp"
  },
  {
    "exchange": "kraken",
    "currencyPair": "btcjpy",
    "route": "https://api.cryptowat.ch/markets/kraken/btcjpy"
  },
  {
    "exchange": "kraken",
    "currencyPair": "btccad",
    "route": "https://api.cryptowat.ch/markets/kraken/btccad"
  },
  {
    "exchange": "kraken",
    "currencyPair": "ltceur",
    "route": "https://api.cryptowat.ch/markets/kraken/ltceur"
  },
  {
    "exchange": "kraken",
    "currencyPair": "ltcbtc",
    "route": "https://api.cryptowat.ch/markets/kraken/ltcbtc"
  },
  {
    "exchange": "kraken",
    "currencyPair": "ltccad",
    "route": "https://api.cryptowat.ch/markets/kraken/ltccad"
  },
  {
    "exchange": "kraken",
    "currencyPair": "ltcusd",
    "route": "https://api.cryptowat.ch/markets/kraken/ltcusd"
  },
  {
    "exchange": "kraken",
    "currencyPair": "ethbtc",
    "route": "https://api.cryptowat.ch/markets/kraken/ethbtc"
  },
  {
    "exchange": "kraken",
    "currencyPair": "ethusd",
    "route": "https://api.cryptowat.ch/markets/kraken/ethusd"
  },
  {
    "exchange": "kraken",
    "currencyPair": "etheur",
    "route": "https://api.cryptowat.ch/markets/kraken/etheur"
  },
  {
    "exchange": "kraken",
    "currencyPair": "ethcad",
    "route": "https://api.cryptowat.ch/markets/kraken/ethcad"
  },
  {
    "exchange": "kraken",
    "currencyPair": "ethgbp",
    "route": "https://api.cryptowat.ch/markets/kraken/ethgbp"
  },
  {
    "exchange": "kraken",
    "currencyPair": "ethjpy",
    "route": "https://api.cryptowat.ch/markets/kraken/ethjpy"
  },
  {
    "exchange": "kraken",
    "currencyPair": "etcbtc",
    "route": "https://api.cryptowat.ch/markets/kraken/etcbtc"
  },
  {
    "exchange": "kraken",
    "currencyPair": "etceth",
    "route": "https://api.cryptowat.ch/markets/kraken/etceth"
  },
  {
    "exchange": "kraken",
    "currencyPair": "etcusd",
    "route": "https://api.cryptowat.ch/markets/kraken/etcusd"
  },
  {
    "exchange": "kraken",
    "currencyPair": "etceur",
    "route": "https://api.cryptowat.ch/markets/kraken/etceur"
  },
  {
    "exchange": "kraken",
    "currencyPair": "gnobtc",
    "route": "https://api.cryptowat.ch/markets/kraken/gnobtc"
  },
  {
    "exchange": "kraken",
    "currencyPair": "gnoeth",
    "route": "https://api.cryptowat.ch/markets/kraken/gnoeth"
  },
  {
    "exchange": "kraken",
    "currencyPair": "gnousd",
    "route": "https://api.cryptowat.ch/markets/kraken/gnousd"
  },
  {
    "exchange": "kraken",
    "currencyPair": "gnoeur",
    "route": "https://api.cryptowat.ch/markets/kraken/gnoeur"
  },
  {
    "exchange": "kraken",
    "currencyPair": "icnbtc",
    "route": "https://api.cryptowat.ch/markets/kraken/icnbtc"
  },
  {
    "exchange": "kraken",
    "currencyPair": "icneth",
    "route": "https://api.cryptowat.ch/markets/kraken/icneth"
  },
  {
    "exchange": "kraken",
    "currencyPair": "mlnbtc",
    "route": "https://api.cryptowat.ch/markets/kraken/mlnbtc"
  },
  {
    "exchange": "kraken",
    "currencyPair": "mlneth",
    "route": "https://api.cryptowat.ch/markets/kraken/mlneth"
  },
  {
    "exchange": "kraken",
    "currencyPair": "repcad",
    "route": "https://api.cryptowat.ch/markets/kraken/repcad"
  },
  {
    "exchange": "kraken",
    "currencyPair": "repeth",
    "route": "https://api.cryptowat.ch/markets/kraken/repeth"
  },
  {
    "exchange": "kraken",
    "currencyPair": "repeur",
    "route": "https://api.cryptowat.ch/markets/kraken/repeur"
  },
  {
    "exchange": "kraken",
    "currencyPair": "repjpy",
    "route": "https://api.cryptowat.ch/markets/kraken/repjpy"
  },
  {
    "exchange": "kraken",
    "currencyPair": "repusd",
    "route": "https://api.cryptowat.ch/markets/kraken/repusd"
  },
  {
    "exchange": "kraken",
    "currencyPair": "repbtc",
    "route": "https://api.cryptowat.ch/markets/kraken/repbtc"
  },
  {
    "exchange": "kraken",
    "currencyPair": "zeccad",
    "route": "https://api.cryptowat.ch/markets/kraken/zeccad"
  },
  {
    "exchange": "kraken",
    "currencyPair": "zeceur",
    "route": "https://api.cryptowat.ch/markets/kraken/zeceur"
  },
  {
    "exchange": "kraken",
    "currencyPair": "zecgbp",
    "route": "https://api.cryptowat.ch/markets/kraken/zecgbp"
  },
  {
    "exchange": "kraken",
    "currencyPair": "zecjpy",
    "route": "https://api.cryptowat.ch/markets/kraken/zecjpy"
  },
  {
    "exchange": "kraken",
    "currencyPair": "zecusd",
    "route": "https://api.cryptowat.ch/markets/kraken/zecusd"
  },
  {
    "exchange": "kraken",
    "currencyPair": "zecbtc",
    "route": "https://api.cryptowat.ch/markets/kraken/zecbtc"
  },
  {
    "exchange": "kraken",
    "currencyPair": "xmrbtc",
    "route": "https://api.cryptowat.ch/markets/kraken/xmrbtc"
  },
  {
    "exchange": "kraken",
    "currencyPair": "xmreur",
    "route": "https://api.cryptowat.ch/markets/kraken/xmreur"
  },
  {
    "exchange": "kraken",
    "currencyPair": "xmrusd",
    "route": "https://api.cryptowat.ch/markets/kraken/xmrusd"
  },
  {
    "exchange": "kraken",
    "currencyPair": "dogebtc",
    "route": "https://api.cryptowat.ch/markets/kraken/dogebtc"
  },
  {
    "exchange": "kraken",
    "currencyPair": "strbtc",
    "route": "https://api.cryptowat.ch/markets/kraken/strbtc"
  },
  {
    "exchange": "kraken",
    "currencyPair": "streur",
    "route": "https://api.cryptowat.ch/markets/kraken/streur"
  },
  {
    "exchange": "kraken",
    "currencyPair": "strusd",
    "route": "https://api.cryptowat.ch/markets/kraken/strusd"
  },
  {
    "exchange": "kraken",
    "currencyPair": "xrpbtc",
    "route": "https://api.cryptowat.ch/markets/kraken/xrpbtc"
  },
  {
    "exchange": "kraken",
    "currencyPair": "xrpusd",
    "route": "https://api.cryptowat.ch/markets/kraken/xrpusd"
  },
  {
    "exchange": "kraken",
    "currencyPair": "xrpeur",
    "route": "https://api.cryptowat.ch/markets/kraken/xrpeur"
  },
  {
    "exchange": "kraken",
    "currencyPair": "xrpcad",
    "route": "https://api.cryptowat.ch/markets/kraken/xrpcad"
  },
  {
    "exchange": "kraken",
    "currencyPair": "xrpjpy",
    "route": "https://api.cryptowat.ch/markets/kraken/xrpjpy"
  },
  {
    "exchange": "kraken",
    "currencyPair": "dashbtc",
    "route": "https://api.cryptowat.ch/markets/kraken/dashbtc"
  },
  {
    "exchange": "kraken",
    "currencyPair": "dasheur",
    "route": "https://api.cryptowat.ch/markets/kraken/dasheur"
  },
  {
    "exchange": "kraken",
    "currencyPair": "dashusd",
    "route": "https://api.cryptowat.ch/markets/kraken/dashusd"
  },
  {
    "exchange": "kraken",
    "currencyPair": "usdtusd",
    "route": "https://api.cryptowat.ch/markets/kraken/usdtusd"
  },
  {
    "exchange": "btce",
    "currencyPair": "btcusd",
    "route": "https://api.cryptowat.ch/markets/btce/btcusd"
  },
  {
    "exchange": "btce",
    "currencyPair": "btceur",
    "route": "https://api.cryptowat.ch/markets/btce/btceur"
  },
  {
    "exchange": "btce",
    "currencyPair": "btcrur",
    "route": "https://api.cryptowat.ch/markets/btce/btcrur"
  },
  {
    "exchange": "btce",
    "currencyPair": "ltcusd",
    "route": "https://api.cryptowat.ch/markets/btce/ltcusd"
  },
  {
    "exchange": "btce",
    "currencyPair": "ltcbtc",
    "route": "https://api.cryptowat.ch/markets/btce/ltcbtc"
  },
  {
    "exchange": "btce",
    "currencyPair": "nmcusd",
    "route": "https://api.cryptowat.ch/markets/btce/nmcusd"
  },
  {
    "exchange": "btce",
    "currencyPair": "ppcusd",
    "route": "https://api.cryptowat.ch/markets/btce/ppcusd"
  },
  {
    "exchange": "btce",
    "currencyPair": "ethbtc",
    "route": "https://api.cryptowat.ch/markets/btce/ethbtc"
  },
  {
    "exchange": "btce",
    "currencyPair": "ethusd",
    "route": "https://api.cryptowat.ch/markets/btce/ethusd"
  },
  {
    "exchange": "btce",
    "currencyPair": "etheur",
    "route": "https://api.cryptowat.ch/markets/btce/etheur"
  },
  {
    "exchange": "btce",
    "currencyPair": "ethltc",
    "route": "https://api.cryptowat.ch/markets/btce/ethltc"
  },
  {
    "exchange": "btce",
    "currencyPair": "ethrur",
    "route": "https://api.cryptowat.ch/markets/btce/ethrur"
  },
  {
    "exchange": "cryptsy",
    "currencyPair": "btcusd",
    "route": "https://api.cryptowat.ch/markets/cryptsy/btcusd"
  },
  {
    "exchange": "cryptsy",
    "currencyPair": "btceur",
    "route": "https://api.cryptowat.ch/markets/cryptsy/btceur"
  },
  {
    "exchange": "cryptsy",
    "currencyPair": "ltcusd",
    "route": "https://api.cryptowat.ch/markets/cryptsy/ltcusd"
  },
  {
    "exchange": "cryptsy",
    "currencyPair": "ltcbtc",
    "route": "https://api.cryptowat.ch/markets/cryptsy/ltcbtc"
  },
  {
    "exchange": "cryptsy",
    "currencyPair": "dashusd",
    "route": "https://api.cryptowat.ch/markets/cryptsy/dashusd"
  },
  {
    "exchange": "cryptsy",
    "currencyPair": "dashbtc",
    "route": "https://api.cryptowat.ch/markets/cryptsy/dashbtc"
  },
  {
    "exchange": "cryptsy",
    "currencyPair": "ethusd",
    "route": "https://api.cryptowat.ch/markets/cryptsy/ethusd"
  },
  {
    "exchange": "cryptsy",
    "currencyPair": "ethbtc",
    "route": "https://api.cryptowat.ch/markets/cryptsy/ethbtc"
  },
  {
    "exchange": "cexio",
    "currencyPair": "btcusd",
    "route": "https://api.cryptowat.ch/markets/cexio/btcusd"
  },
  {
    "exchange": "cexio",
    "currencyPair": "btceur",
    "route": "https://api.cryptowat.ch/markets/cexio/btceur"
  },
  {
    "exchange": "cexio",
    "currencyPair": "ltcusd",
    "route": "https://api.cryptowat.ch/markets/cexio/ltcusd"
  },
  {
    "exchange": "cexio",
    "currencyPair": "ltcbtc",
    "route": "https://api.cryptowat.ch/markets/cexio/ltcbtc"
  },
  {
    "exchange": "gemini",
    "currencyPair": "btcusd",
    "route": "https://api.cryptowat.ch/markets/gemini/btcusd"
  },
  {
    "exchange": "gemini",
    "currencyPair": "ethbtc",
    "route": "https://api.cryptowat.ch/markets/gemini/ethbtc"
  },
  {
    "exchange": "gemini",
    "currencyPair": "ethusd",
    "route": "https://api.cryptowat.ch/markets/gemini/ethusd"
  },
  {
    "exchange": "quoine",
    "currencyPair": "btcjpy",
    "route": "https://api.cryptowat.ch/markets/quoine/btcjpy"
  },
  {
    "exchange": "quoine",
    "currencyPair": "btcusd",
    "route": "https://api.cryptowat.ch/markets/quoine/btcusd"
  },
  {
    "exchange": "quoine",
    "currencyPair": "btceur",
    "route": "https://api.cryptowat.ch/markets/quoine/btceur"
  },
  {
    "exchange": "quoine",
    "currencyPair": "btcsgd",
    "route": "https://api.cryptowat.ch/markets/quoine/btcsgd"
  },
  {
    "exchange": "quoine",
    "currencyPair": "btchkd",
    "route": "https://api.cryptowat.ch/markets/quoine/btchkd"
  },
  {
    "exchange": "quoine",
    "currencyPair": "btcidr",
    "route": "https://api.cryptowat.ch/markets/quoine/btcidr"
  },
  {
    "exchange": "quoine",
    "currencyPair": "btcaud",
    "route": "https://api.cryptowat.ch/markets/quoine/btcaud"
  },
  {
    "exchange": "quoine",
    "currencyPair": "btcphp",
    "route": "https://api.cryptowat.ch/markets/quoine/btcphp"
  },
  {
    "exchange": "quoine",
    "currencyPair": "btccny",
    "route": "https://api.cryptowat.ch/markets/quoine/btccny"
  },
  {
    "exchange": "quoine",
    "currencyPair": "btcinr",
    "route": "https://api.cryptowat.ch/markets/quoine/btcinr"
  },
  {
    "exchange": "quoine",
    "currencyPair": "ethusd",
    "route": "https://api.cryptowat.ch/markets/quoine/ethusd"
  },
  {
    "exchange": "quoine",
    "currencyPair": "etheur",
    "route": "https://api.cryptowat.ch/markets/quoine/etheur"
  },
  {
    "exchange": "quoine",
    "currencyPair": "ethjpy",
    "route": "https://api.cryptowat.ch/markets/quoine/ethjpy"
  },
  {
    "exchange": "quoine",
    "currencyPair": "ethsgd",
    "route": "https://api.cryptowat.ch/markets/quoine/ethsgd"
  },
  {
    "exchange": "quoine",
    "currencyPair": "ethhkd",
    "route": "https://api.cryptowat.ch/markets/quoine/ethhkd"
  },
  {
    "exchange": "quoine",
    "currencyPair": "ethidr",
    "route": "https://api.cryptowat.ch/markets/quoine/ethidr"
  },
  {
    "exchange": "quoine",
    "currencyPair": "ethaud",
    "route": "https://api.cryptowat.ch/markets/quoine/ethaud"
  },
  {
    "exchange": "quoine",
    "currencyPair": "ethphp",
    "route": "https://api.cryptowat.ch/markets/quoine/ethphp"
  },
  {
    "exchange": "quoine",
    "currencyPair": "ethcny",
    "route": "https://api.cryptowat.ch/markets/quoine/ethcny"
  },
  {
    "exchange": "quoine",
    "currencyPair": "ethinr",
    "route": "https://api.cryptowat.ch/markets/quoine/ethinr"
  },
  {
    "exchange": "quoine",
    "currencyPair": "ethbtc",
    "route": "https://api.cryptowat.ch/markets/quoine/ethbtc"
  },
  {
    "exchange": "qryptos",
    "currencyPair": "zecbtc",
    "route": "https://api.cryptowat.ch/markets/qryptos/zecbtc"
  },
  {
    "exchange": "qryptos",
    "currencyPair": "repbtc",
    "route": "https://api.cryptowat.ch/markets/qryptos/repbtc"
  },
  {
    "exchange": "qryptos",
    "currencyPair": "xmrbtc",
    "route": "https://api.cryptowat.ch/markets/qryptos/xmrbtc"
  },
  {
    "exchange": "qryptos",
    "currencyPair": "ethbtc",
    "route": "https://api.cryptowat.ch/markets/qryptos/ethbtc"
  },
  {
    "exchange": "qryptos",
    "currencyPair": "etcbtc",
    "route": "https://api.cryptowat.ch/markets/qryptos/etcbtc"
  },
  {
    "exchange": "qryptos",
    "currencyPair": "xrpbtc",
    "route": "https://api.cryptowat.ch/markets/qryptos/xrpbtc"
  },
  {
    "exchange": "qryptos",
    "currencyPair": "ltcbtc",
    "route": "https://api.cryptowat.ch/markets/qryptos/ltcbtc"
  },
  {
    "exchange": "bitflyer",
    "currencyPair": "btcjpy",
    "route": "https://api.cryptowat.ch/markets/bitflyer/btcjpy"
  },
  {
    "exchange": "bitflyer",
    "currencyPair": "ethbtc",
    "route": "https://api.cryptowat.ch/markets/bitflyer/ethbtc"
  },
  {
    "exchange": "bitflyer",
    "currencyPair": "btcfxjpy",
    "route": "https://api.cryptowat.ch/markets/bitflyer/btcfxjpy"
  },
  {
    "exchange": "bitflyer",
    "currencyPair": "btcjpy-weekly-futures",
    "route": "https://api.cryptowat.ch/markets/bitflyer/btcjpy-weekly-futures"
  },
  {
    "exchange": "bitflyer",
    "currencyPair": "btcjpy-biweekly-futures",
    "route": "https://api.cryptowat.ch/markets/bitflyer/btcjpy-biweekly-futures"
  },
  {
    "exchange": "okcoin",
    "currencyPair": "btccny",
    "route": "https://api.cryptowat.ch/markets/okcoin/btccny"
  },
  {
    "exchange": "okcoin",
    "currencyPair": "ltccny",
    "route": "https://api.cryptowat.ch/markets/okcoin/ltccny"
  },
  {
    "exchange": "okcoin",
    "currencyPair": "btcusd",
    "route": "https://api.cryptowat.ch/markets/okcoin/btcusd"
  },
  {
    "exchange": "okcoin",
    "currencyPair": "ltcusd",
    "route": "https://api.cryptowat.ch/markets/okcoin/ltcusd"
  },
  {
    "exchange": "okcoin",
    "currencyPair": "ltcusd-weekly-futures",
    "route": "https://api.cryptowat.ch/markets/okcoin/ltcusd-weekly-futures"
  },
  {
    "exchange": "okcoin",
    "currencyPair": "ltcusd-biweekly-futures",
    "route": "https://api.cryptowat.ch/markets/okcoin/ltcusd-biweekly-futures"
  },
  {
    "exchange": "okcoin",
    "currencyPair": "ltcusd-quarterly-futures",
    "route": "https://api.cryptowat.ch/markets/okcoin/ltcusd-quarterly-futures"
  },
  {
    "exchange": "okcoin",
    "currencyPair": "btcusd-weekly-futures",
    "route": "https://api.cryptowat.ch/markets/okcoin/btcusd-weekly-futures"
  },
  {
    "exchange": "okcoin",
    "currencyPair": "btcusd-biweekly-futures",
    "route": "https://api.cryptowat.ch/markets/okcoin/btcusd-biweekly-futures"
  },
  {
    "exchange": "okcoin",
    "currencyPair": "btcusd-quarterly-futures",
    "route": "https://api.cryptowat.ch/markets/okcoin/btcusd-quarterly-futures"
  },
  {
    "exchange": "796",
    "currencyPair": "btcusd-weekly-futures",
    "route": "https://api.cryptowat.ch/markets/796/btcusd-weekly-futures"
  },
  {
    "exchange": "796",
    "currencyPair": "ltcusd-weekly-futures",
    "route": "https://api.cryptowat.ch/markets/796/ltcusd-weekly-futures"
  },
  {
    "exchange": "bitvc",
    "currencyPair": "btccny-weekly-futures",
    "route": "https://api.cryptowat.ch/markets/bitvc/btccny-weekly-futures"
  },
  {
    "exchange": "bitvc",
    "currencyPair": "btccny-quarterly-futures",
    "route": "https://api.cryptowat.ch/markets/bitvc/btccny-quarterly-futures"
  },
  {
    "exchange": "bitvc",
    "currencyPair": "ltccny-weekly-futures",
    "route": "https://api.cryptowat.ch/markets/bitvc/ltccny-weekly-futures"
  },
  {
    "exchange": "bitvc",
    "currencyPair": "ltccny-quarterly-futures",
    "route": "https://api.cryptowat.ch/markets/bitvc/ltccny-quarterly-futures"
  },
  {
    "exchange": "btc-china",
    "currencyPair": "btccny",
    "route": "https://api.cryptowat.ch/markets/btc-china/btccny"
  },
  {
    "exchange": "btc-china",
    "currencyPair": "ltccny",
    "route": "https://api.cryptowat.ch/markets/btc-china/ltccny"
  },
  {
    "exchange": "btc-china",
    "currencyPair": "ltcbtc",
    "route": "https://api.cryptowat.ch/markets/btc-china/ltcbtc"
  },
  {
    "exchange": "bitmex",
    "currencyPair": "xbj-daily-futures",
    "route": "https://api.cryptowat.ch/markets/bitmex/xbj-daily-futures"
  },
  {
    "exchange": "bitmex",
    "currencyPair": "xmr-weekly-futures",
    "route": "https://api.cryptowat.ch/markets/bitmex/xmr-weekly-futures"
  },
  {
    "exchange": "bitmex",
    "currencyPair": "bfx-monthly-futures",
    "route": "https://api.cryptowat.ch/markets/bitmex/bfx-monthly-futures"
  },
  {
    "exchange": "bitmex",
    "currencyPair": "eth-perpetual-futures",
    "route": "https://api.cryptowat.ch/markets/bitmex/eth-perpetual-futures"
  },
  {
    "exchange": "bitmex",
    "currencyPair": "fct-perpetual-futures",
    "route": "https://api.cryptowat.ch/markets/bitmex/fct-perpetual-futures"
  },
  {
    "exchange": "bitmex",
    "currencyPair": "xbt-monthly-futures",
    "route": "https://api.cryptowat.ch/markets/bitmex/xbt-monthly-futures"
  },
  {
    "exchange": "bitmex",
    "currencyPair": "xbt-perpetual-futures",
    "route": "https://api.cryptowat.ch/markets/bitmex/xbt-perpetual-futures"
  },
  {
    "exchange": "bitmex",
    "currencyPair": "etc-weekly-futures",
    "route": "https://api.cryptowat.ch/markets/bitmex/etc-weekly-futures"
  },
  {
    "exchange": "bitmex",
    "currencyPair": "lsk-perpetual-futures",
    "route": "https://api.cryptowat.ch/markets/bitmex/lsk-perpetual-futures"
  },
  {
    "exchange": "bitmex",
    "currencyPair": "zec-quarterly-futures",
    "route": "https://api.cryptowat.ch/markets/bitmex/zec-quarterly-futures"
  },
  {
    "exchange": "bitmex",
    "currencyPair": "ltc-perpetual-futures",
    "route": "https://api.cryptowat.ch/markets/bitmex/ltc-perpetual-futures"
  },
  {
    "exchange": "mexbt",
    "currencyPair": "btcmxn",
    "route": "https://api.cryptowat.ch/markets/mexbt/btcmxn"
  },
  {
    "exchange": "mexbt",
    "currencyPair": "btcusd",
    "route": "https://api.cryptowat.ch/markets/mexbt/btcusd"
  },
  {
    "exchange": "huobi",
    "currencyPair": "btccny",
    "route": "https://api.cryptowat.ch/markets/huobi/btccny"
  },
  {
    "exchange": "huobi",
    "currencyPair": "ltccny",
    "route": "https://api.cryptowat.ch/markets/huobi/ltccny"
  },
  {
    "exchange": "vault-of-satoshi",
    "currencyPair": "btccad",
    "route": "https://api.cryptowat.ch/markets/vault-of-satoshi/btccad"
  },
  {
    "exchange": "vault-of-satoshi",
    "currencyPair": "ltccad",
    "route": "https://api.cryptowat.ch/markets/vault-of-satoshi/ltccad"
  },
  {
    "exchange": "bitx",
    "currencyPair": "btczar",
    "route": "https://api.cryptowat.ch/markets/bitx/btczar"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "ethbtc",
    "route": "https://api.cryptowat.ch/markets/poloniex/ethbtc"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "ethusd",
    "route": "https://api.cryptowat.ch/markets/poloniex/ethusd"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "etcbtc",
    "route": "https://api.cryptowat.ch/markets/poloniex/etcbtc"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "etceth",
    "route": "https://api.cryptowat.ch/markets/poloniex/etceth"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "etcusd",
    "route": "https://api.cryptowat.ch/markets/poloniex/etcusd"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "dashbtc",
    "route": "https://api.cryptowat.ch/markets/poloniex/dashbtc"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "dashusd",
    "route": "https://api.cryptowat.ch/markets/poloniex/dashusd"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "daobtc",
    "route": "https://api.cryptowat.ch/markets/poloniex/daobtc"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "daoeth",
    "route": "https://api.cryptowat.ch/markets/poloniex/daoeth"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "lskbtc",
    "route": "https://api.cryptowat.ch/markets/poloniex/lskbtc"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "lsketh",
    "route": "https://api.cryptowat.ch/markets/poloniex/lsketh"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "repbtc",
    "route": "https://api.cryptowat.ch/markets/poloniex/repbtc"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "repeth",
    "route": "https://api.cryptowat.ch/markets/poloniex/repeth"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "repusd",
    "route": "https://api.cryptowat.ch/markets/poloniex/repusd"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "gnobtc",
    "route": "https://api.cryptowat.ch/markets/poloniex/gnobtc"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "gnoeth",
    "route": "https://api.cryptowat.ch/markets/poloniex/gnoeth"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "maidbtc",
    "route": "https://api.cryptowat.ch/markets/poloniex/maidbtc"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "navbtc",
    "route": "https://api.cryptowat.ch/markets/poloniex/navbtc"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "sdcbtc",
    "route": "https://api.cryptowat.ch/markets/poloniex/sdcbtc"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "btsbtc",
    "route": "https://api.cryptowat.ch/markets/poloniex/btsbtc"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "fctbtc",
    "route": "https://api.cryptowat.ch/markets/poloniex/fctbtc"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "btcusd",
    "route": "https://api.cryptowat.ch/markets/poloniex/btcusd"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "zecbtc",
    "route": "https://api.cryptowat.ch/markets/poloniex/zecbtc"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "zeceth",
    "route": "https://api.cryptowat.ch/markets/poloniex/zeceth"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "zecxmr",
    "route": "https://api.cryptowat.ch/markets/poloniex/zecxmr"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "zecusd",
    "route": "https://api.cryptowat.ch/markets/poloniex/zecusd"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "ltcbtc",
    "route": "https://api.cryptowat.ch/markets/poloniex/ltcbtc"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "ltcusd",
    "route": "https://api.cryptowat.ch/markets/poloniex/ltcusd"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "nxtbtc",
    "route": "https://api.cryptowat.ch/markets/poloniex/nxtbtc"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "nxtxmr",
    "route": "https://api.cryptowat.ch/markets/poloniex/nxtxmr"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "nxtusd",
    "route": "https://api.cryptowat.ch/markets/poloniex/nxtusd"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "xmrusd",
    "route": "https://api.cryptowat.ch/markets/poloniex/xmrusd"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "xmrbtc",
    "route": "https://api.cryptowat.ch/markets/poloniex/xmrbtc"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "xrpusd",
    "route": "https://api.cryptowat.ch/markets/poloniex/xrpusd"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "xrpbtc",
    "route": "https://api.cryptowat.ch/markets/poloniex/xrpbtc"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "strusd",
    "route": "https://api.cryptowat.ch/markets/poloniex/strusd"
  },
  {
    "exchange": "poloniex",
    "currencyPair": "strbtc",
    "route": "https://api.cryptowat.ch/markets/poloniex/strbtc"
  },
  {
    "exchange": "mtgox",
    "currencyPair": "btcusd",
    "route": "https://api.cryptowat.ch/markets/mtgox/btcusd"
  },
  {
    "exchange": "bitsquare",
    "currencyPair": "btceur",
    "route": "https://api.cryptowat.ch/markets/bitsquare/btceur"
  },
  {
    "exchange": "bitsquare",
    "currencyPair": "btcusd",
    "route": "https://api.cryptowat.ch/markets/bitsquare/btcusd"
  },
  {
    "exchange": "bitsquare",
    "currencyPair": "btcaud",
    "route": "https://api.cryptowat.ch/markets/bitsquare/btcaud"
  },
  {
    "exchange": "bitsquare",
    "currencyPair": "ethbtc",
    "route": "https://api.cryptowat.ch/markets/bitsquare/ethbtc"
  },
  {
    "exchange": "bitsquare",
    "currencyPair": "etcbtc",
    "route": "https://api.cryptowat.ch/markets/bitsquare/etcbtc"
  },
  {
    "exchange": "bitsquare",
    "currencyPair": "ltcbtc",
    "route": "https://api.cryptowat.ch/markets/bitsquare/ltcbtc"
  },
  {
    "exchange": "bithumb",
    "currencyPair": "btckrw",
    "route": "https://api.cryptowat.ch/markets/bithumb/btckrw"
  },
  {
    "exchange": "bithumb",
    "currencyPair": "dashkrw",
    "route": "https://api.cryptowat.ch/markets/bithumb/dashkrw"
  },
  {
    "exchange": "bithumb",
    "currencyPair": "ethkrw",
    "route": "https://api.cryptowat.ch/markets/bithumb/ethkrw"
  },
  {
    "exchange": "bithumb",
    "currencyPair": "etckrw",
    "route": "https://api.cryptowat.ch/markets/bithumb/etckrw"
  },
  {
    "exchange": "bithumb",
    "currencyPair": "ltckrw",
    "route": "https://api.cryptowat.ch/markets/bithumb/ltckrw"
  }
];

export default markets;
