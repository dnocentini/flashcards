var express = require('express');
var router = express.Router();
var flashcardsCtrl = require('../../controllers/flashcards');

router.get('/flashcards', flashcardsCtrl.index);



module.exports = router;