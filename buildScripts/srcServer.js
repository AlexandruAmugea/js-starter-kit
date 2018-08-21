let express = require('express');
let path = require('path');
let open = require('open');
import webpack from 'webpack';
import config from '../webpack.config.dev';

const PORT = 3000;
let app = express();

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  public: config.output.publicPath
}));

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
