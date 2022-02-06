'use strict';

const express = require('express');
const path    = require('path');
const favicon = require('serve-favicon');
const moment = require('moment')

const app = express();

app.set('view engine', 'pug'); 
app.set("views", path.join(__dirname, "views"));

app.use(express.static('static'))
app.use(favicon(__dirname + '/static/images/favicon.ico'));

app.route('/')
  .get((req, res) => {
    res.render('index', {
      title: 'Home',
      date: moment().format('LL'),
    });
  });

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port " + 3000);
  });
