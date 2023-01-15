'use strict';

const express = require("express");
const router = express.Router();
const { addArtifact, deleteArtifact, updateArtifact, getArtifact, getAllArtifacts } = require('../manager/apiManager');

router
    .post('/artifacts', addArtifact)
    .delete('/artifacts', deleteArtifact)
    .put('/artifacts', updateArtifact)
    .get('/artifacts', getArtifact)
    .get('/artifacts', getAllArtifacts);

module.exports = router;
