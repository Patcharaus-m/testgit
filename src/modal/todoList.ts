import mongoose from "mongoose";

const todoListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.model("TodoList", todoListSchema)