const {connect} = require('mongoose')
require('dotenv/config')
const {MONGO_DB_URL} = process.env

// function to connect to mongoDB
const ConnectDb = async () => {
    try {
        await connect(MONGO_DB_URL.toString())
        console.log('Database Connected');
    } catch (error) {
        console.log('Not Connected To DataBase', error.message);
        
    }
}

module.exports = ConnectDb