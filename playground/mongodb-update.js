//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
var obj = new (ObjectID);
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  if(err){
    return console.log('unable to connect to MongoDB Server');
  }
  var db = client.db('TodoApp');
  console.log('Connected to MongoDB Server');

   db.collection('Todos').findOneAndUpdate({
     _id:new ObjectID('5c133eff3693424a083ba1bc')
   }, {
     $set :{
       completed : false
     }
   },{
     returnOriginal :false
   }).then((result) =>{
  console.log(result);

});
  //client.close();
});
