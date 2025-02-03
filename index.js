const express = require('express');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 5000
const DB_Connection = require('./DB/DB');
const cookieParser = require('cookie-parser');



//Database Connection 
DB_Connection();


// Router Management 

app.get("/",(req,res)=>{
    res.end("<h1>Server is Running !</h1>")
})

app.use(cookieParser())
app.use(express.json());
app.use('/e-learning/',require('./Router/userRoute'));
app.use('/e-learning',require("./Router/courseRoute"));

app.use('/e-learning/mentor',require('./Router/mentorRoute'));

app.use('/e-learning',require('./Router/enrollmentRoute'));


app.listen(PORT, ()=>{
    console.log(`Server is Running [${PORT}]`)
})