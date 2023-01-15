'use strict';

const db = require('../connection/connector')

const addArtifact = ( req, res ) => {
    const { name, description } = req.body;
    if ( ! ( name && description ) ) {
        return res
        .status(400)
        .json({message: 'You need to give full information about artifact.'})
    }
    const query = `INSERT INTO artifacts SET ?`;
    const artifact = { name, description };
    db.query( query, artifact, (err) =>{
        if (err) return res.status(500).json(err);
        return res.status(201).json({ message: 'Artifact has been added.' });
    });
};

const deleteArtifact = ( req, res ) => {
    const { id } = req.params;
    const queryToDelete = `DELETE FROM artifacts WHERE id=${id}`;
    const queryToFind = `SELECT * FROM artifacts WHERE id=${id}`;
    db.query(queryToFind, ( err, result ) => {
        if (err)  return res.status(500).json(err);
        
        if (result.length === 0) return res.status(404).json('There is no artifact with such id.');
    });
    db.query( queryToDelete, (err) =>{
        if (err) return res.status(500).json(err);
        return res.status(200).json({ message: "Artifact has been deleted." });
    });
};

const updateArtifact = ( req, res ) => {  
    const { id, name, description } = req.body;
    if ( ! ( id && name && description ) ) {
        return res.status(400).json({ message: 'Not enought params.'});
    }
    db.query(`SELECT * FROM artifacts WHERE  id=${id}` , (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.length === 0) return res.status(404).json('There is no artifact with such id.');
    });
    const query = `UPDATE artifacts SET name = '${name}', description = '${description}' WHERE id=${id}`;
    db.query(query, (err) =>{
        if(err) return res.status(500).json(err);
        return res.status(200).json({message: 'Artifact has been updated'});
    });
};

const getArtifact = ( req, res ) => {
    const { id } = req.params;    
    if (!id) return res.status(400).json({ message: 'Not enought params.' });
    const query = `SELECT * FROM artifacts WHERE id = ${id}`;
    db.query(query, ( err, result ) => {
        if(err) return res.status(500).json(err);
        if(result.length === 0) return res.status(404).json('There is no artifact with such id.');
        return res.status(200).json(result); 
    });
}

const getAllArtifacts = (_, res) => {
    const query = `SELECT * FROM artifacts`;
    db.query(query, (err, result) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(result);
    })
}


module.exports = { addArtifact, deleteArtifact, updateArtifact, getArtifact, getAllArtifacts};
