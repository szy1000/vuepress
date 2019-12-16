var express = require('express');
var app = express();
// var request= require('request');
const axios = require('axios');
let token = ''
// axios.get('https://qyapi.weixin.qq.com/cgi-bin/token?grant_type=client_credential?corpid=wx0b0cf226ce6b3c8b&corpsecret=87a91e04251ea392a91d2437cfd45229')
axios.get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx0b0cf226ce6b3c8b&secret=87a91e04251ea392a91d2437cfd45229')
  .then(response => {
    console.log(response.data);
    token = response.data.access_token
    console.log('---------------------')
  })
  .catch(error => {
    console.log(error);
  });


axios.get(`https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${token}&type=jsapi`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });




app.listen(9090, function () {
  console.log('Example app listening on port 9090!');
});
