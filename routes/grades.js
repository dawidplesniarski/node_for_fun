const express = require('express');
const router = express.Router();
const gradesController = require('../controller/GradesController');
const verifyToken = require('../utils/verifyToken');

router.get('/findAll', gradesController.findAll);

router.get('/findByAlbum/:studentAlbum', gradesController.findByAlbum);

router.post('/addGrade', gradesController.addGrade);

router.get('/findLatest/:studentAlbum', gradesController.findLatest);

module.exports = router;