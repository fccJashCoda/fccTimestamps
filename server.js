// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
const e = require('express');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/timestamp/:time?', (req, res) => {
  Date.prototype.isValid = function () {
    return this.getTime() === this.getTime();
  };

  let date;
  if (!req.params.time) {
    date = new Date();
  } else if (new Date(req.params.time).isValid()) {
    date = new Date(req.params.time);
  } else if (new Date(Number(req.params.time)).isValid()) {
    date = new Date(Number(req.params.time));
  } else {
    return res.json({ error: 'Invalid Date' });
  }

  return res.json({ unix: date.getTime(), utc: date.toUTCString() });
});

const port = process.env.PORT || 5000;

// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
