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

// db.collection('Todos').find({completed:true}).toArray().then((docs) =>{
//   console.log('Todos');
//   console.log(JSON.stringify(docs,undefined,2));
// },(err) =>{
//   console.log('unable to Fatch todos',err);
// });

db.collection('Todos').find().toArray().then((count) =>{
  console.log(`Todos count ${count}`);
  //console.log(JSON.stringify(docs,undefined,2));
},(err) =>{
  console.log('unable to Fatch todos',err);
});
  client.close();
});
