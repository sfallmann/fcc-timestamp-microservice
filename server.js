'use strict';

const express = require('express');
const moment = require('moment');
const RateLimit = require('express-rate-limit');
const {timeInMs} = require('./helper');

const app = express();
const port =  process.env.PORT || 3000;

app.enable('trust proxy');
app.use(express.static('public'));
app.disable('x-powered-by');

const apiLimiter = new RateLimit({
  // allow 100 requests/hour
  windowMs: 60 * 60 * 1000,
  max: 100,
  delayMs: 0
});

// A good solution found here:
// http://stackoverflow.com/questions/35408729/express-js-prevent-get-favicon-ico
app.get('/favicon.ico', function(req, res) {
  res.sendStatus(204);
});

app.get('/:date', apiLimiter, function(req, res) {
  let dateObj;
  const time = timeInMs(req.params.date);
  res.set({
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Origin': '*'
  });

  if (time === null) {
    dateObj = {
      unix: null,
      natural: null
    };
  } else {
    let date = new Date(time);
    dateObj = {
      unix: moment(date).unix(),
      natural: moment(date).utcOffset(0).format('MMMM Do, YYYY'),
      timezone: 'UTC'
    };
  }

  res.json(dateObj);

});

app.listen(port);
