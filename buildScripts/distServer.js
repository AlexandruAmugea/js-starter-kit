let express = require('express');
let path = require('path');
let open = require('open');
import compression from 'compression';

/*esling-disable no-console*/

const PORT = 3000;
let app = express();
app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res){
  res.json([
    {"id":1, "firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id":2, "firstName":"Bob2","lastName":"Smith2","email":"bob2@gmail.com"}
  ])
});

app.listen(PORT, (err)=> {
  if(err){
    console.log(err);
  } else {
    open('http://localhost:' + PORT);
  }
});
