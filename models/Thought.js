const { model, Schema } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: { type: String, required: true, min: 1, max: 280 },
        createdAt: 
    }
)