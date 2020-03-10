const express = require('express');
const next = require('next');
const port = 80;
const dev = 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  // server.use(function(req,res,next){
  //  var auth=Cookie.get('xpresslane.authToken');
  //   req.set("Authorization",`Bearer ${auth}`);
  //   next();
  // })
  //var options={
    //setHeaders: function (res, path, stat) {
    //  res.set("Authorization",`Bearer ${auth}`)
   // }
  //}
  //server.use(express.static('public', options))
  server.all('*', (req, res) => {
    if(req.path=='/ping'){
      res.send('pong');
    }
    else{
      return handle(req, res);
    }
  });
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

