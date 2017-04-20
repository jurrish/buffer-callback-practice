'use strict';

const fs = require('fs');

let path1 = `${__dirname}/../resource/one.txt`;
let path2 = `${__dirname}/../resource/two.txt`;
let path3 = `${__dirname}/../resource/three.txt`;

let exportMe = function(pathOne, pathTwo, pathThree){
  console.log('inside');
  let hexArray = [];
  fs.readFile(pathOne, function(err, data){
    if(err) throw err;
    hexArray.push(data.toString('hex', 0, 8));
    console.log(data);
    fs.readFile(pathTwo, function(err,data){
      if(err) throw err;
      hexArray.push(data.toString('hex', 0, 8));
      fs.readFile(pathThree, function(err, data){
        if(err) throw err;
        hexArray.push(data.toString('hex', 0, 8));
        if(hexArray[2]){
          console.log(hexArray);
          return hexArray;
        }
      });
    });
  });
};


console.log(exportMe);

exportMe(path1, path2, path3);
