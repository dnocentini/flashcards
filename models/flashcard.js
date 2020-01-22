const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flashcardSchema = new Schema(
    {
        question: {type: String, required: true},
        canswer: {type: String, required: true},
        wanswer1: {type: String, required: true},
        wanswer2: {type: String, required: true},
        wanswer3: {type: String, required: true}, 
    },
    { timestamps: true }
);

module.exports = mongoose.model("Flashcard", flashcardSchema);