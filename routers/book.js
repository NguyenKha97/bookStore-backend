const express = require("express");
const router = express.Router();
const {
  searchBook,
  getAllBookByCategoryId,
  getListTopRating,
  getAllBook,
  createBook,
  deleteBook,
  updateBook,
  getBookById } = require("../controller/bookController");

// queries
router.get("/", getAllBook);
router.get("/:id", getBookById);
router.get('/search/:text', searchBook);
router.get("/cate/:id", getAllBookByCategoryId);
router.get("/top/", getListTopRating);

// mutations
router.post("/", createBook);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);
module.exports = router;
