//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
var obj = new (ObjectID);
console.log(obj);
// var user ={name :'jenny',age :22};
// var {name}=user;
// console.log(user);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  if(err){
    return console.log('unable to connect to MongoDB Server');
  }
  var db = client.db('TodoApp');
  console.log('Connected to MongoDB Server');
//  db.collection('Todos').insertOne({
//    text :'Something to do',
//    completed :true
//  },(err, result) =>{
//    if(err){
//      return console.log('Unabale to Insert todo',err);
//    }
//
//    console.log(JSON.stringify(result.ops))
// });

//Insert new doc to user(name,age,location)
// db.collection('User').insertOne({
//   //id :1209,
//   name: 'vrunda',
//   age :21,
//   location :'surat'
// },(err,result) =>
// {
//   if(err){
//     return console.log('Unable to Insert user',err);
//   }
//   console.log(result.ops[0]._id.getTimestamp());
// });
  client.close();
});
