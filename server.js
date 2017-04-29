const express = require('express');
const moment = require('moment');

const app = express();
const port = 3000 || process.env.PORT;

app.get('/:date', function(req, res){
  const date = req.params.date;
  res.send(`You sent ${date}`);
});

app.listen(port);
