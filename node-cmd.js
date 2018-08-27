var shell = require('shelljs');
shell.echo('hello world');
shell.exec('npm run deploy', function(data, x, y){
  console.log(data);
  console.log(x);
  console.log(y);
});
