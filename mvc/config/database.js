const mongoose = require('mongoose')
require('dotenv/config.js')
const {MONGO_DB_URL} = process.env

// connect to db
const database = async() => {
    try {
        await mongoose.connect(MONGO_DB_URL)
        console.log('Connected to db');
        
    } catch (error) {
        console.log('An error occured', error);
    }
}

module.exports = database