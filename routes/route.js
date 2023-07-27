const express = require('express');
const router = new express.Router;

const Staff = require('../controller/staffController');
const Right = require('../controller/rightController');

router.post('/staff/create' , Staff.create);
router.post('/right/create' , Right.create);
router.post('/right/populate' , Right.staffByRight);



module.exports = router;
