'use strict';

const express = require('express');
const moment = require('moment');
const {timeInMs} = require('./helper');

const app = express();
const port =  process.env.PORT || 3000;

app.use(express.static('public'));

// A good solution found here:
// http://stackoverflow.com/questions/35408729/express-js-prevent-get-favicon-ico
app.get('/favicon.ico', function(req, res) {
  res.sendStatus(204);
});

app.get('/:date', function(req, res) {
  let dateObj;
  const time = timeInMs(req.params.date);

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

  // if the request is an ajax request or the Accept header is json
  // return dateObj as json, otherwise return it as text\html
  if (req.xhr || req.headers.accept.indexOf('json') > -1) {
    res.json(dateObj);
  } else {
    res.send(JSON.stringify(dateObj));
  }

});

app.listen(port);
