
var User = require('./domain/User');
var bcrypt = require('bcryptjs');
var mongoose = require('mongoose');

module.exports= function(app){

app.get('/',function(req,res){
	res.sendFile(__dirname + '/views/index.html');
});


app.get('/displayregistration',function(req,res){
	res.sendFile(__dirname + '/views/registration.html');	
});


app.get('/register',function(req,res){
var dest= 'success';
var userinstance = new User({username:req.query.username,
                             password:bcrypt.hashSync(req.query.password,8),
                             firstname:req.query.firstname,
                             lastname:req.query.lastname,
                             gender:req.query.gender});

userinstance.save(function(err){
	if(err){
      dest='error'; 
	} 
});
console.log(dest);
 if(dest=='success') {
 	console.log('inside success....');
  res.redirect('/home');
 } else {
 	console.log('inside error');
 	res.redirect(__dirname + '/views/error.html');
 }
 
});


app.get('/home',function(req,res){
    res.sendFile(__dirname + '/views/home.html');  
});

}

