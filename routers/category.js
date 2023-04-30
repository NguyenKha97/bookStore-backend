const express = require("express");
const router = express.Router();

const {
    createCategory,
    updateCategory,
    deleteCategory,
    getAllCategory,
    getCategoryById
} = require('../controller/categoryController');

// queries
router.get("/", getAllCategory);
router.get("/:id", getCategoryById);

// mutations
router.post("/", createCategory);
router.patch("/:id", updateCategory);
router.delete("/:id", deleteCategory);
module.exports = router;