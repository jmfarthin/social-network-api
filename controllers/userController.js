const { User, Thought } = require('../models');

// Creates a new user
const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        // console.log(user);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Gets all users
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        // console.log(allUsers);
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Gets data for one user
const getUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.userId })
            .populate({ path: 'thoughts' })
            .populate({ path: 'friends' });
        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};

// Updates user data
const updateUser = async (req, res) => {
    try {
        console.log(req.body)
        const user = await User.findByIdAndUpdate({ _id: req.params.userId }, { $set: { ...req.body } }, { new: true, runValidators: true });
        console.log(user)
        res.json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json(error);

    }
}

// Adds a friend to the friend property for a user
const addFriend = async (req, res) => {
    try {
        const userWithFriend = await User.findByIdAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: req.params.friendId } }, { new: true, runValidators: true });
        res.json(userWithFriend)
    } catch (error) {
        res.status(500).json(error);
    }
};

// Deletes a friend from the friend property for a user
const deleteFriend = async (req, res) => {
    try {
        const userWithFriend = await User.findByIdAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { new: true });
        res.status(200).json(userWithFriend);
    } catch (error) {
        res.status(500).json(error);

    }
}

// Deletes a particular user
const removeUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete({ _id: req.params.userId });
        user.thoughts.forEach(async (thoughtId) => {
            await Thought.findByIdAndDelete({ _id: thoughtId })
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error);

    }
}



module.exports = { createUser, getAllUsers, getUser, addFriend, updateUser, removeUser, deleteFriend };

// getUser, getAllUsers, createUser, updateUser, deleteUser, addFriend, deleteFriend 