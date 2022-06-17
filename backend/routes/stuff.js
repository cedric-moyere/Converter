const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controllers/stuff');

router.get('/convert', stuffCtrl.convert);

module.exports = router;

