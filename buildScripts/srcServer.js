const express = require('express');
const path = require('path');
const open = require('open');

const PORT = 3000;
let app = express();

app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(PORT, (err)=> {
  if(err){
    console.log(err);
  } else {
    open('http://localhost:' + PORT);
  }
});
