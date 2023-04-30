const express = require("express");
const router = express.Router();
const { buyBook, getAllBookOfUser } = require('../controller/UserAndBookController');

router.post('/', buyBook);
router.get('/:id', getAllBookOfUser);

module.exports = router;
