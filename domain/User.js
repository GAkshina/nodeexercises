var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	        firstname:String,
	        lastname:String,
	        username:String,
	        password:String,
	        gender:String
	      
});

var User = mongoose.model('User',userSchema);
module.exports= User;