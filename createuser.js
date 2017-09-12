var User = require('./user');

var usr = new User({
  username:'bob',
  email:'bob@email.com',
  password:'password'
});


User.create({
	username:'bob',
	email:'bob@mail.com',
	password:'password'
});


User.find({})