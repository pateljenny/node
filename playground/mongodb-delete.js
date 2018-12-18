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

   db.collection('Todos').deleteMany({text:'eat lunch'}).then ((result) =>{
     console.log(result);
   });

// db.collection('Todos').deleteOne({test:'eat lunch'}).then((result) =>{
//   console.log(JSON.stringify(result.ops));
//   });
  //client.close();
});
