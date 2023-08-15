const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://samarth9702:admin@cluster0.fpjlrcn.mongodb.net/";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function runDBConnection() {
    try {
        await client.connect();
        // collection = client.db().collection('Cat');
        // console.log(collection);
    } catch(ex) {
        console.error(ex);
    }
}
runDBConnection();
module.exports = client;