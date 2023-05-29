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
};

const getThought = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId);
        res.status(200).json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
};

const updateThought = async (req, res) => {
    try {
        const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId },
            { $set: { ...req.body } }, { new: true, runValidators: true });
        res.status(200).json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
};

const removeThought = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndRemove({ _id: req.params.thoughtId });
        const user = await User.findOneAndUpdate({ thoughts: req.params.thoughtId },
            { $pull: { thoughts: req.params.thoughtId } }, { new: true });
        res.status(200).json("Deleted thought!");
    } catch (err) {
        res.status(500).json(err);
    }
};

const addReaction = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate({ _id: req.params.thoughtId },
            { $push: { reactions: { ...req.body } } }, { new: true });
        res.status(200).json(thought);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};

const deleteReaction = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate({ _id: req.params.thoughtId },
            { $pull: { reactions: { _id: req.params.reactionId } } }, { new: true });
        res.status(200).json(thought);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};

module.exports = {
    createThought,
    getAllThoughts,
    getThought,
    updateThought,
    removeThought,
    addReaction,
    deleteReaction
};