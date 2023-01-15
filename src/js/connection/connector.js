'use strict';

const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'abc123',
    database: 'SUP'
});

module.exports = db;