'use strict';

const db = require('./connection/connector');
const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/api', require('./routes/router'));

app.listen(PORT);
