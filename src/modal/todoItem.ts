import mongoose from "mongoose";

const TodoItemSchema = new mongoose.Schema({
    list_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TodoList",
    },
    task: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.model("TodoItem", TodoItemSchema)