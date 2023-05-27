const { model, Schema } = require('mongoose');

reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true, min: 1, max: 280
        },
        username: { type: String, required: true, },
        createdAt: {
            type: Date,
            default: Date.now,
            get: function () {
                return this.createdAt.toLocaleString();
            }
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false
    }
)


module.exports = reactionSchema;