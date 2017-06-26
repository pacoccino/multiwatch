const express = require('express');
const superagent = require('superagent');
const app = express();

app.get('/', function (req, res) {
  res.send('CORS Proxy ready. Call /cors?url=yoururl to add a CORS header to any api call')
});

app.get('/cors', function (req, res) {
  const { query } = req;
  res.set('Access-Control-Allow-Origin', '*');

  superagent.get(query.url).end((err, data) => {
    if(err) {
      return res.status(500).send(err);
    }
    res.send(data.body);
  })
});

const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log(`CORS proxy listening on port ${port}...`);
});