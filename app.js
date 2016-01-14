var express = require('express');
var app = express();
var mongoose = require('mongoose');
var router = require('./router.js')(app);
var db = require('./config/database.js');
var ejs = require('ejs');

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.set('views', __dirname + '/views')

mongoose.connect(db.url);

 mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + db.url);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});
app.listen(8080);

console.log('express server is ready for serving e-business(8080)');
