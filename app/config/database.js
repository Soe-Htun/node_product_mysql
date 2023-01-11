const dbConfig = require('./config');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

db.connect(function(err) {
    if(err) throw err;
    console.log('Database connected');
})

module.exports = db;