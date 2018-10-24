// To start mongo database:
// Go into mongo/bin : command ./mongod --dbpath ../../mongo-data
// Can test by using command: ./mongo and it should connect

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   test: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Max',
  //   age: 26,
  //   location: 'Gothenburg'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to add user', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  //   //console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.close();
});
