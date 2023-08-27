const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://samarth9702:admin@cluster0.fpjlrcn.mongodb.net/";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
client.connect();

module.exports = client;