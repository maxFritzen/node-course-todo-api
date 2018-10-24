// To start mongo database:
// Go into mongo/bin : command ./mongod --dbpath ../../mongo-data
// Can test by using command: ./mongo and it should connect
// http://mongodb.github.io/node-mongodb-native/2.2/api/
// Check for changes in version.

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5bc8b97e83dd92408477a6e4')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Todos count:', count);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Max'}).toArray().then((docs) => {
    console.log('Users');
    console.log(docs[0].name);
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to find user', err);
  });
  //db.close();
});
