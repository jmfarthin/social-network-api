const { connect, connection } = require('mongoose');

// Establishes connection to the Mongo database
const connectionString = process.env.MONGODB;

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;