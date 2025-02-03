const express = require('express');
const router = express.Router();
const authorizeUser = require("../Middlewares/isValidUser")

const {createCourse,getAll,deleteCourse,getCourseById,updateCourse} = require('../Controller/courseController');

router.post('/create',authorizeUser,createCourse)

router.get('/all',getAll);

router.delete('/delete/:id',authorizeUser,deleteCourse)

router.get('/course/:id',authorizeUser,getCourseById)

router.put('/update/:id',authorizeUser,updateCourse);


module.exports = router