const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flashcardSchema = new Schema(
    {
        question: String,
        canswer: String,
        wanswer1: String,
        wanswer2: String,
        wanswer3: String,
        required: true  
    },
    { timestamps: true }
);

module.exports = mongoose.model("Flashcard", flashcardSchema);