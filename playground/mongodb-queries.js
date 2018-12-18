const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');


var id ='5c1374b8c6321f7b1c8468a8';
 if(! ObjectID.isValid(id)){
   console.log('Id not Valid');
 }
// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   console.log('Todo',todo);
// });


Todo.findById(id).then((todo)=>{
  if (!todo){
    return console.log('Id Not Found');
  }
  console.log('Todo By Id',todo);
}).catch((e) => console.log(e));
