const express = require('express');
const router = express.Router();
const authorizeUser = require("../Middlewares/isValidUser")
const Enroll = require("../Models/Enrollments");

const {createEnroll,deleteEnroll,enrollByID} = require('../Controller/enrollmentController');

router.post('/enroll',createEnroll);
router.delete('/enroll/delete/:id',deleteEnroll);
router.get('/enroll/:id',enrollByID);
router.get('/enroll-all',async (req,res)=>{

    const allEnroll = await Enroll.find();
    res.json(allEnroll);

})

module.exports = router