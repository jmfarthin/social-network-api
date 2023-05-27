const { Thought, User } = require('../models')

const createThought = async (req, res) => {
    try {
        const thought = await Thought.create(req.body);
        const user = await User.findOneAndUpdate({ _id: req.body.userId }, { $push: { thoughts: thought._id } }, { new: true, runValidators: true })
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getAllThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.status(200).json(thoughts);
    } catch (err) {
        res.status(500).json(err);

    }
}

module.exports = { createThought, getAllThoughts };

// getThought, updateThought, removeThought, addReaction, deleteReaction