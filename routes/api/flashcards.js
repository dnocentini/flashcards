var express = require('express');
var router = express.Router();
var flashcardsCtrl = require('../../controllers/flashcards');

router.get('/', flashcardsCtrl.index);
router.post('/', flashcardsCtrl.create);
router.delete('/:id', flashcardsCtrl.delete);


module.exports = router;