const mongoose = require('mongoose');
const TodoData = {
    content: {
        type: String,
        required: [true, ""],
    },
    completetd: {
        type: Boolean,
        required: [true, ""],
    }
    
}
const Patient = mongoose.model("Patient", TodoData);
module.exports = Patient;