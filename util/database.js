const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://reddgl:Grande!1988@cluster0.sll31.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    )
    .then(client => {
        console.log('Connected!');
        callback(result);
    })
    .catch(err => {
        console.log(err);
    });
};

module.exports = mongoConnect;


