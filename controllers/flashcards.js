const Flashcard = require('../models/flashcard');

module.exports = {
    index
};

async function index(req, res) {
    const flashcards = await Flashcard.find({});
    res.status(200).json(flashcards);
};