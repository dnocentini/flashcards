const Flashcard = require('../models/flashcard');

module.exports = {
    index,
    create
};

async function index(req, res) {
    const flashcards = await Flashcard.find({});
    res.status(200).json(flashcards);
};

async function create(req, res) {
    const flashcard = await Flashcard.create(req.body);
    res.status(201).json(flashcard);
};