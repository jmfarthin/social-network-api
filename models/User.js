const { model, Schema } = require('mongoose');

// Schema for Users
const userSchema = new Schema(
    {
        username: { type: String, unique: true, required: true, trim: true },
        email: {
            type: String, required: true, unique: true,
            match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        },
        thoughts: [{ type: Schema.Types.ObjectId, ref: 'thought' }],
        friends: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false,
    }
);

// this creates a virtual property that calculates the total 
// amount of friends the user has
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

const User = model('user', userSchema);

module.exports = User;