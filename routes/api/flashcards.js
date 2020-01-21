var express = require('express');
var router = express.Router();
var flashcardsCtrl = require('../../controllers/flashcards');

router.get('/flashcards', flashcardsCtrl.index);
router.post('/flashcards', flashcardsCtrl.create);


module.exports = router;