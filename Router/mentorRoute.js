const express = require('express');
const router = express.Router();

const {mentorCreate,getAllMentor,mentorUpdate,mentorDelete} = require('../Controller/mentorController');

router.post('/create',mentorCreate);

router.get('/all',getAllMentor);

router.put('/update/:id',mentorUpdate)

router.delete('/delete/:id',mentorDelete)



module.exports = router