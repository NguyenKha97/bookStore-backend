const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const BookSchema =  new Schema({
  id: {
    type: Number,
    required: true
  },
  bookName: {
    type: String,
    required: true
  },
  bookCover: {
    type: String,
    required: true
  },
  rating: Number,
  language: String,
  pageNo: Number,
  author: {
    type: String,
    required: true
  },
  genre: Array,
  readed: String,
  description: String,
  backgroundColor: String,
  navTintColor: String,
  categoryId: [{
    type: ObjectId,
    ref: 'Category'
  }]
}, { versionKey: false });
module.exports = mongoose.model("Book", BookSchema);
