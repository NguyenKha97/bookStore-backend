const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserAndBookSchema = new Schema({
    userId: {
        type: ObjectId,
        ref: 'User'
    },

    bookId: {
        type: ObjectId,
        ref: 'Book'
    }
}, { versionKey: false });

module.exports = mongoose.model('UserAndBook', UserAndBookSchema);