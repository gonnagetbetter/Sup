# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється:

## SQL-скрипт для створення на початкового наповнення бази даних
```sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema SUP
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `SUP` ;

-- -----------------------------------------------------
-- Schema SUP
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `SUP` DEFAULT CHARACTER SET utf8 ;
USE `SUP` ;

-- -----------------------------------------------------
-- Table `SUP`.`artifact`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SUP`.`artifact` ;

CREATE TABLE IF NOT EXISTS `SUP`.`artifact` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SUP`.`task`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SUP`.`task` ;

CREATE TABLE IF NOT EXISTS `SUP`.`task` (
  `id` INT NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  `deadline` DATETIME NULL DEFAULT NULL,
  `artifact_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_task_artifact1_idx` (`artifact_id` ASC) VISIBLE,
  CONSTRAINT `fk_task_artifact1`
    FOREIGN KEY (`artifact_id`)
    REFERENCES `SUP`.`artifact` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SUP`.`project`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SUP`.`project` ;

CREATE TABLE IF NOT EXISTS `SUP`.`project` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `team` VARCHAR(45) NULL,
  `task_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_project_task1_idx` (`task_id` ASC) VISIBLE,
  CONSTRAINT `fk_project_task1`
    FOREIGN KEY (`task_id`)
    REFERENCES `SUP`.`task` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SUP`.`member`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SUP`.`member` ;

CREATE TABLE IF NOT EXISTS `SUP`.`member` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `task_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_member_task1_idx` (`task_id` ASC) VISIBLE,
  CONSTRAINT `fk_member_task1`
    FOREIGN KEY (`task_id`)
    REFERENCES `SUP`.`task` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SUP`.`team`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SUP`.`team` ;

CREATE TABLE IF NOT EXISTS `SUP`.`team` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `icon` BLOB NULL,
  `memberList` VARCHAR(45) NULL,
  `project_id` INT NOT NULL,
  `member_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_team_project_idx` (`project_id` ASC) VISIBLE,
  INDEX `fk_team_member1_idx` (`member_id` ASC) VISIBLE,
  CONSTRAINT `fk_team_project`
    FOREIGN KEY (`project_id`)
    REFERENCES `SUP`.`project` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_team_member1`
    FOREIGN KEY (`member_id`)
    REFERENCES `SUP`.`member` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SUP`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SUP`.`user` ;

CREATE TABLE IF NOT EXISTS `SUP`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `isAdmin` VARCHAR(45) NOT NULL,
  `member_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  INDEX `fk_user_member1_idx` (`member_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_member1`
    FOREIGN KEY (`member_id`)
    REFERENCES `SUP`.`member` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SUP`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SUP`.`role` ;

CREATE TABLE IF NOT EXISTS `SUP`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `member_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_role_member1_idx` (`member_id` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `fk_role_member1`
    FOREIGN KEY (`member_id`)
    REFERENCES `SUP`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

```

## RESTfull сервіс для управління даними

Для реалізації RESTfull сервісу використовується бібліотека `Express.js`.
Для роботи з базою даних використовується бібліотека `MySQL2`.

### Структура проєкту

* `app.js` - головний файл проекту, в якому виконується ініціалізація сервера та роутів.
---
* `connection` - папка в якій знаходиться модуль для з'єднання.
* `connection/connector.js` - модуль для роботи з базою даних.
---
*`routes` - папка з файлами роутів.
*`routes/router.js` - файл з роутами для роботи.
--- 
*`maneger` - папка для менеджера.
*`manager/apiManager.js` - менеджер для виконання запитів.

### Головний файл

Головний файл `app.js`.

'use strict';

const db = require('./connection/connector');
const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/api', require('./routes/router'));

app.listen(PORT);
```

### Маршрутизація

Маршрутизація знаходиться в файлі `routes/router.js`.

```javascript

'use strict';

const express = require("express");
const router = express.Router();
const { addArtifact, deleteArtifact, updateArtifact, getArtifact, getAllArtifacts } = require('../manager/apiManager');

router
    .post('/artifacts', addArtifact)
    .delete('/artifacts/:id', deleteArtifact)
    .put('/artifacts', updateArtifact)
    .get('/artifacts/:id', getArtifact)
    .get('/artifacts', getAllArtifacts);

module.exports = router;
```

### Менеджер для роботи з запитами 

```javascript

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
    db.query(queryToFind, ( err,result ) => {
        if (err)  return res.status(500).json(err);
        if (!result) return res.status(404).json('There is no artifact with such id.');
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
        if (!result) return res.status(404).json('There is no artifact with such id.');
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

```












