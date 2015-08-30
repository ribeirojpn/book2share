var http = require('http'),
    express = require('express'),
    app = require('./config/express')();
require('./config/database')(process.env.MONGOLAB_URL || 'mongodb://localhost/booktoshare');
require('./config/passport')();

http.createServer(app).listen(app.get('port'), function () {
  console.log('Sever on.');
});
