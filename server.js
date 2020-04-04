'use strict';

const express = require('express');
const d3      = require('d3');
const JSDOM   = require('jsdom').JSDOM;
const path    = require('path');
const favicon = require('serve-favicon');




const app = express();

app.set('view engine', 'pug'); 
app.set("views", path.join(__dirname, "views"));

app.use(favicon(__dirname + '/static/images/favicon.ico'));

const drawBackground = () => {
  
  // Initialize dom to be used to create the d3 figure
  const jsdom = new JSDOM( 
    `<!DOCTYPE html>
      <html>
        <body>
        </body>
      </html>`, 
    { runScripts: "outside-only" } );
  const dom = jsdom.window.document.querySelector("body");

  // Initialize the dimentions of the figure 
  const w = '2000';
  const h = '650';
  const colors = [
    'black',
  ];

  d3.select(dom)
    .append('div')
    .attr('id', 'background');


  d3.select(dom)
    .select('div')
    .append('svg')
  
  d3.select(dom)
    .select('div')
    .select('svg')
    .append('circle')
    .attr('cx', '60px')
    .attr('cy', '100px')
    .attr('r', '25px')
    .attr('fill', d => colors[Math.floor(Math.random() * colors.length)])

  d3.select(dom)
    .select('div')
    .select('svg')
    .append('rect')
    .attr('x', '120px')
    .attr('y', '75px')
    .attr('height', '50px')
    .attr('width', '50px')
    .attr('fill', d => colors[Math.floor(Math.random() * colors.length)])     
  return dom.innerHTML;
}

app.route('/')
  .get((req, res) => {
    res.render('index', {
      background: drawBackground(),
      title: 'Home',
      firstname: 'Kareem',
      lastname: 'Abuzaid',
    });
  });

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port " + 3000);
  });
  