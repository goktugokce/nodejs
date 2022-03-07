//destructed modules
const {MongoClient, ObjectId} = require('mongodb')
//configuration
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager'


const id = new ObjectId();
console.log(id)
console.log(id.getTimestamp())

//connecting to db
MongoClient.connect(connectionURL, {useNewUrlParser:true}, (error, client) => {
  if(error){
    return console.log('Unable to connect to DB')
  }

  const db = client.db(databaseName);
  
})