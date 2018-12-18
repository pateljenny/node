var mongoose = require('mongoose');
var validator = require('validator');

 // {
 //   email= 'jp@gamil@com',
 //   password ='mypass123',
 //   tokens:[{
 //     access:'auth',
 //     token:'abcdefg'
 //   }]
 // }


var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique:true,
    validator :validator.isEmail,
    message:'{VALUE} is not a valid email'
  }
},
password:{
  type:Strings,
  require:true,
  minlength:6
},
tokens:[{
  access:{
    type:String,
    require:true
  },
  token:{
    type:String,
    require:true
}
}]
});
module.exports = {User};
