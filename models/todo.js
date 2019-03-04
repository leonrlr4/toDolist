var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
    //name
    name: {
        type: String,
        required: "Name can't be blank",
        trim: true,
    },
    //completed
    completed:{
        type: Boolean,
        default: false,
        trim: true,
    },
    //created_date
    created_date:{
        type: Date,
        default: Date.now,
        trim: true,
    }
})

var Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo
