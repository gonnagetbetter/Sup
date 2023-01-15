'use strict';

const db = require('./connection/connector');
const express = require('express');
const app = express();

const PORT = 3306;

app.use(express.json());

app.use('/api', require('./routes/router'));

db.connect(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)));
