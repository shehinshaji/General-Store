const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
#const mongoDbUrl = "mongodb+srv://omnistack:omnistack@cluster0-tb9ng.mongodb.net/omnistack8?retryWrites=true&w=majority";
const url = process.env.MONGODB_URL;
const dbName = "DevOpsAssignment";
#const client = new MongoClient(url);
#mongoDb
let _db;

const initDb = callback => {
    if (_db) {
        console.log('Database is already initialized!');
        return callback(null, _db);
    }
    MongoClient.connect(Url)
        .then(client => {
            _db = client;
            callback(null, _db);
        })
        .catch(err => {
            callback(err);
        });
};

const getDb = () => {
    if (!_db) {
        throw Error('Database not initialized');
    }
    return _db;
}

module.exports = {
    initDb,
    getDb
}
