const router = require('express').Router();

const { createUser, getAllUsers, getUser, addFriend, updateUser, removeUser, deleteFriend } = require('../../controllers/userController');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getUser).put(updateUser).delete(removeUser)

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;