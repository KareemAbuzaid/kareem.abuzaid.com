'use strict';

const express = require('express');
const path    = require('path');
const favicon = require('serve-favicon');

const app = express();

app.set('view engine', 'pug'); 
app.set("views", path.join(__dirname, "views"));

app.use(favicon(__dirname + '/static/images/favicon.ico'));

app.route('/')
  .get((req, res) => {
    res.render('index', {
      title: 'Home',
      firstname: 'Kareem',
      lastname: 'Abuzaid',
    });
  });

app.route('/about')
  .get((req, res) => {
    res.render('about', {
      title: 'About',
    })
  });
  
 app.route('/contact')
  .get((req, res) => {
    res.render('contact', {
      title: 'Contact',
    })
  })
  
app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port " + 3000);
  });
  