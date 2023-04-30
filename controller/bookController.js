const Book = require("../models/Book");
const { Types } = require('mongoose');

// mutations
const createBook = async (req, res, next) => {
    const book = new Book({
        id: req.body.id,
        bookName: req.body.bookName,
        bookCover: req.body.bookCover,
        rating: req.body.rating,
        language: req.body.language,
        pageNo: req.body.pageNo,
        author: req.body.author,
        genre: req.body.genre,
        readed: req.body.readed,
        description: req.body.description,
        backgroundColor: req.body.backgroundColor,
        navTintColor: req.body.navTintColor,
        categoryId: req.body.categoryId
    });
    // console.log(book);
    try {
        const savedBook = await book.save();
        res.json(savedBook);
    } catch (err) {
        res.json({ message: err });
    }
}

const updateBook = async (req, res, next) => {
    try {
        const updatedBook = await Book.updateOne({
            $set: {
                id: req.body.id,
                bookName: req.body.bookName,
                bookCover: req.body.bookCover,
                rating: req.body.rating,
                language: req.body.language,
                pageNo: req.body.pageNo,
                author: req.body.author,
                genre: req.body.genre,
                readed: req.body.readed,
                description: req.body.description,
                backgroundColor: req.body.backgroundColor,
                navTintColor: req.body.navTintColor,
                categoryId: req.body.categoryId

            },
        });
        //   console.log(updatedBook);
        res.json(updatedBook);
    } catch (err) {
        res.json({ message: err });
    }
}

const deleteBook = async (req, res, next) => {
    try {
        const removedBook = await Book.deleteOne({ id: req.params.id });
        res.json(removedBook);
    } catch (err) {
        res.json({ message: err });
    }
}


// queries
const getAllBook = async (req, res, next) => {
    try {
        const book = await Book.find();
        res.json(book);
    } catch (err) {
        res.json({ message: err });
    }
}

const getBookById = async (req, res, next) => {
    try {
        const book = await Book.findById(new Types.ObjectId(req.params));
        res.json(book);
    } catch (err) {
        res.json({ message: err });
    }
}

const searchBook = async (req, res, next) => {
    try {
        // console.log(req.params.text);
        const books = await Book.find({ bookName: { $regex: req.params.text, $options: 'i' } }).lean();
        res.json(books);
    } catch (error) {
        console.log(error.message);
        res.json(error.message);
    }
}

const getAllBookByCategoryId = async (req, res, next) => {
    try {
        const books = await Book.find({ categoryId: req.params }).lean();
        res.json(books);
    } catch (error) {
        console.log(error.message);
        res.json(error.message);
    }
}

const getListTopRating = async (req, res, next) => {
    try {
        const books = await Book.find({})
            .sort({ rating: -1 })
            .limit(10)
            .lean();
        res.json(books);
    } catch (error) {
        console.log(error.message);
        res.json(error.message);
    }
}

module.exports = {
    searchBook,
    getAllBookByCategoryId,
    getListTopRating,
    getAllBook,
    createBook,
    deleteBook,
    updateBook,
    getBookById
} 