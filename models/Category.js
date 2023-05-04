const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id: Number,

    description: String,

}, { versionKey: false });

module.exports = mongoose.model('Category', CategorySchema);