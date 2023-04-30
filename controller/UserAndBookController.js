const UserAndBook = require('../models/UserAndBook');
const { Types } = require('mongoose');

const buyBook = async (req, res, next) => {
    try {
        const buyBook = await UserAndBook.create({
            userId: req.body.userId,
            bookId: req.body.bookId
        });
        if (!buyBook) {
            throw new Error('Some thing went wrong, please try again!');
        }
        res.json(buyBook);
    } catch (error) {
        console.log(error.message);
        res.json(error.message);
    }
}

const getAllBookOfUser = async (req, res, next) => {
    try {
        const allBookOfUser = await UserAndBook.find({ userId: new Types.ObjectId(req.params) })
            .populate('userId')
            .populate('bookId');
        res.json(allBookOfUser);
    } catch (error) {
        console.log(error.message);
        res.json(error.message);
    }
}

module.exports = {
    getAllBookOfUser,
    buyBook
}
