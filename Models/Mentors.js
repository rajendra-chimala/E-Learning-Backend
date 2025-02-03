const mongoose = require('mongoose');

const mentorsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    experties:{
        type:String,
        required:true,

    },
    workingAt:{
        type:String,
        required:true,
    },

    image:{
        type:String,
        default:"https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
    }
})

const Mentor = mongoose.model("Mentor",mentorsSchema);

module.exports = Mentor;