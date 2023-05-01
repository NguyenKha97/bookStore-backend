const express = require("express");
const router = express.Router();
const { buyBook, getAllBookOfUser } = require('../controller/userAndBookController');

router.post('/', buyBook);
router.get('/:id', getAllBookOfUser);

module.exports = router;
