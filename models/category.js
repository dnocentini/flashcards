const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema(
    {
        name: String,
        description: String,
        required: true  
    },
    { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);