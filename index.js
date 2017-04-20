'use strict';

const runTheFunction = require('./lib/reader.js');
const logTheStuff = function(value){
  console.log(value);
};

runTheFunction(logTheStuff('./resource/one.txt', './resource/two.txt', './data/three.txt', logTheStuff));
