var http = require('http'),
    express = require('express'),
    app = require('./config/express')();
require('./config/passport')();
require('./config/database')(process.env.MONGOLAB_URI || 'mongodb://localhost/booktoshare');

http.createServer(app).listen(app.get('port'), function () {
  console.log('Sever on.');
});
