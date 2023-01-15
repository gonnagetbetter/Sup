'use strict';

const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'abc123',
    database: 'SUP',
    port: 3306
});

module.exports = db;