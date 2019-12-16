var express = require('express');
var app = express();
// var router = express.Router();
const jsSdk = require('./sdk')

app.use(express.static(__dirname + '/dist/'));
// app.get('/', function (req, res) {
// 		res.sendFile('./dist');
// 		// app.use(express.static(path.join(__dirname, 'dist')));
// });

app.get('/getJsSdk', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  // res.send('Hello World!');
  jsSdk.getSignPackage(req.query.url,function(err,signPackage){
    res.send(signPackage)
  })
});


app.listen(80, function () {
  console.log('Example app listening on port 443!');
});
