'use strict';

const express = require('express');
const d3 = require('d3');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const app = express();

app.set('view engine', 'pug'); 


app.route('/')
  .get((req, res) => {
    res.render('index');
  });

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port " + 3000);
  });
  