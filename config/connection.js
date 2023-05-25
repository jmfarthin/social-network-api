const { connect, connection } = require('mongoose');


const connectionString = process.env.MONGODB;

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;