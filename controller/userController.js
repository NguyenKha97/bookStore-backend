const User = require("../models/User");
const { Types } = require('mongoose');

// mutations
const createUser = async (req, res, next) => {
  const oldUser = await User.findOne({ username: req.body.username });
  if (oldUser) {
    return res.json({ message: "User existed" });
  } else {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      point: req.body.point,
      savedBooks: req.body.savedBooks,
    });
    console.log(user);
    try {
      const savedUser = await user.save();
      res.json(savedUser);
    } catch (err) {
      res.json({ message: err });
    }
  }
};

const updateUser = async (req, res, next) => {
  try {
        const oldUser = await User.findOne({ username: req.body.username });
        if (oldUser) {
          return res.json({ message: "User existed" });
        } else {
          const updatedUser = await User.updateOne({
            $set: {
              username: req.body.username,
              password: req.body.password,
              email: req.body.email,
              phoneNumber: req.body.phoneNumber,
              point: req.body.point,
              savedBooks: req.body.savedBooks,
            },
          });
        }
      } catch (err) {
        res.json({ message: err });
      }
}

const deleteUser = async (req, res, next) => {
    try {
        const removedUser = await User.deleteOne({ username: req.params.username });
        res.json(removedUser);
    } catch (err) {
        res.json({ message: err });
    }
}

// queries
const checkUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.json({ message: "User not found" });
    } else if (user.password === req.body.password) {
      res.json(user);
    } else {
      res.json({ message: "Wrong password" });
    }
  } catch (err) {
    res.json({ message: err });
  }
}

const getUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      return res.json({ message: "User not found" });
    } else {
      res.json(user);
    }
  } catch (err) {
    res.json({ message: err });
  }
}


const getAllUser = async (req, res, next) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
  checkUser,
};