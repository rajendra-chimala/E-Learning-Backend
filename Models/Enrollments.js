const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    
    userID:{type:mongoose.Schema.Types.ObjectId, required:true},
    courseID:{type:mongoose.Schema.Types.ObjectId, required:true},
    enrollAt:{type:Date,default:Date.now}

    
})





const Enrollment = mongoose.model("Enrollment",enrollmentSchema);

module.exports = Enrollment;