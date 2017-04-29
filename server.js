const express = require('express');
const moment = require('moment');

const app = express();
const port = 3000 || process.env.PORT;


app.get('/favicon.ico', function(req, res) {
  res.sendStatus(204);
});

app.get('/:dateStr', function(req, res) {
  let date;
  const dateObj = {
    unix: null,
    natural: null
  };

  res.set({
    'Content-Type': 'application/json'
  });

  if (Number(req.params.dateStr).toString() === 'NaN') {
    date = req.params.dateStr;
  } else {
    date = Number(req.params.dateStr);
  }

  if (moment(date).isValid()) {
    dateObj.unix = moment(date).unix();
    dateObj.natural = moment(date).format('MMMM Do, YYYY');
  }

  res.json(dateObj);
});

app.listen(port);
