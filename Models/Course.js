const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description: {type:String,required:true},
    mentorID:{type:mongoose.Schema.Types.ObjectId},
    duration:{type:String,required:true},
    price:{type:Number,required:true},
    createdAt:{type:Date,default:Date.now},
    category:{type:String,required:true}
})

const Course = mongoose.model("Course",courseSchema);

module.exports = Course;