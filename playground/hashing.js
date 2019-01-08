const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var data = {
  id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);
//jwt.verify

var decoded = jwt.verify(token, '123abc');
console.log('decoded',decoded);

var password ='123abc'

// bcrypt.genSalt(10, (err,salt) => {
//   bcrypt.hash(password, salt, (err,hash) =>{
//     console.log(hash);
//   });
//
// });

var hashedPassword = '$2a$10$t1wTJ00cU1yy.MAECVkb/.XUaDN9FyuT12sMdgtYTHuVEzkYdobWS';

bcrypt.compare(password, hashedPassword, (err,res) =>{
  console.log(res);
});
