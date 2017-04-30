'use strict';

const express = require('express');
const moment = require('moment');

const app = express();
const port = 3000 || process.env.PORT;


app.use(express.static('public'));

// A good solution found here:
// http://stackoverflow.com/questions/35408729/express-js-prevent-get-favicon-ico
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

  // check if the value sent can be coerced to a number
  // if it can't, use the string sent
  // otherwise coerce to a number
  if (Number(req.params.dateStr).toString() === 'NaN') {
    date = req.params.dateStr;
  } else {
    date = Number(req.params.dateStr);
  }

  // set date to a Date object

  date = new Date(date);

  // check the validity of date
  // and format accordingly
  if (moment(date).isValid()) {
    // same as Date.getTime(), decided to use moment for consistency
    dateObj.unix = moment(date).unix();
    dateObj.natural = moment(date).format('MMMM Do, YYYY');
  }

  res.json(dateObj);
});

app.listen(port);
