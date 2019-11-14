'use strict';

const request = require('request');
const config = require('../config/config.js');


//#region Testes


exports.testeLocal = function (req, res) {
  console.log('Hello World!...APP5');
  res.send('Hello World!...APP5');
}

exports.testeRemote = function (req, res) {
  let content;
  request(config.Url.baseUrl + req.url, function (error, response, body) {
    console.log('error:', error); 
    console.log('statusCode:', response && response.statusCode); 
    console.log('body:', body);
    content = body;
    res.send(content); 
  });
}
//#endregion

// getRemote
exports.getRemote = function (req, res) {
  let options = {
    url: config.Url.baseUrl + req.url,
    headers: {
      'authorization': req.headers.authorization
    },
    method: 'GET'
  };
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body); 
    }
  }
  request(options, callback);
}


//postRemote
exports.postRemote = function (req, res) {
  let options = {
    url: config.Url.baseUrl + req.url,
    headers: {
      'authorization': req.headers.authorization
    },
    method: 'POST',
    json: req.body  
  };
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body); 
    }
  }
  request(options, callback);
}


// updateRemote
exports.updateRemote = function (req, res) {
  console.log(req.body);
  console.log('inicio do updateRemote');
  let options = {
    url: config.Url.baseUrl + req.url,
    headers: {
      'authorization': req.headers.authorization
    },
    method: 'PUT',
    json: req.body  
  };
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body); 
    }
  }
  request(options, callback);
  console.log('fim do updateRemote');
}


// deleteRemote
exports.deleteRemote = function (req, res) {
  let options = {
    url: config.Url.baseUrl + req.url,
    headers: {
      'authorization': req.headers.authorization
    },
    method: 'DELETE',
    json: req.body  
  };
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body); 
    }
  }
  request(options, callback);
}






