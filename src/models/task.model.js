const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    taskDueDate: {
        type: Date,
        required: true,
    },
    taskStatus: {
        type: String,
        required: true,
    },
    taskDueTime:{
        type: String,
        required: true,
    },
})

const taskModel = mongoose.model("Task", taskSchema);

module.exports = taskModel;