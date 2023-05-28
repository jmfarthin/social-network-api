const router = require('express').Router();

const { createThought,
    getAllThoughts,
    getThought,
    updateThought,
    removeThought,
    addReaction
}
    = require('../../controllers/thoughtController');

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:thoughtId').get(getThought).put(updateThought).delete(removeThought);

router.route('/:thoughtId/reactions').post(addReaction)

// router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;

// ,
// deleteReaction