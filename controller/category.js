const Category = require('../models/Category');
const { Types } = require('mongoose');
// mutations
const createCategory = async (req, res, next) => {
    try {
        const newCate = await Category.create({
            name: req.body.name,
            description: req.body.description
        });
        if (!newCate) {
            throw new Error('Some thing went wrong! Can not create cate');
        }
        res.json(newCate);
    } catch (error) {
        console.log(error.message);
        res.json(error.message);
    }
}

const updateCategory = async (req, res, next) => {
    try {
        const updateCate = await Category.findOneAndUpdate({ _id: new Types.ObjectId(req.params) }, req.body, { new: true });
        if (!updateCate) {
            throw new Error('Some thing went wrong! Can not update cate');
        }
        res.json(updateCate);
    } catch (error) {
        console.log(error.message);
        res.json(error.message);
    }
}

const deleteCategory = async () => {
    try {
        const deleteCate = await Category.findByIdAndDelete(new Types.ObjectId(req.params));
        if (!deleteCate) {
            throw new Error('Some thing went wrong! Can not delete cate');
        }
        res.json(deleteCate);
    } catch (error) {
        console.log(error.message);
        res.json(error.message);
    }
}

// queries
const getAllCategory = async (req, res, next) => {
    try {
        const categories = await Category.find().lean();
        res.json(categories);
    } catch (error) {
        console.log(error.message);
        res.json(error.message);
    }
}

const getCategoryById = async (req, res, next) => {
    try {
        const cate = await Category.findById(new Types.ObjectId(req.params)).lean();
        res.json(cate);
    } catch (error) {
        console.log(error.message);
        res.json(error.message);
    }
}

module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    getAllCategory,
    getCategoryById
}