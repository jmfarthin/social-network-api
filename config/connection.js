require('dotenv').config;
const { connect, connection } = require('mongoose');


const connectionString = 'mongodb://localhost/socialNetwork';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;