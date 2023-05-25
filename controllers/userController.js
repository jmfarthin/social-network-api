const { User } = require('../models');

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        console.log(user);
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getAllUsers = async (req, res) => {
    // try {
        const allUsers = await User.find();
        console.log(allUsers);
        res.json(allUsers);
    // } catch (err) {
        // res.status(500).json(err);
    // }
}


module.exports = { createUser, getAllUsers };

// getUser, getAllUsers, createUser, updateUser, deleteUser, addFriend, deleteFriend 