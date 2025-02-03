const mongoose = require('mongoose');
require('dotenv').config()

const DB_URL = process.env.DB_URL
const DB_Connection = async ()=>{

    await mongoose.connect(DB_URL).then(()=>{console.log("Database Connected Successfully !")}).catch(()=>{console.log("Databasee Connection Fail !")})

}



module.exports= DB_Connection