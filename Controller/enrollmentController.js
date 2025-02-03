const Enroll  = require('../Models/Enrollments');

const createEnroll = async(req,res)=>{
    const {userID, courseID} = req.body
try {
    
    const isAlreadyEnroll = await Enroll.findOne({courseID});
    if(isAlreadyEnroll) return res.status(409).json({message:"Course already enrolled !",success:false});

    const newEnrollment = await new Enroll({
        userID,courseID
    })

    await newEnrollment.save();

    return res.status(200).json({message:"Course enrolled Success !",success:true,newEnrollment});




} catch (error) {


    return res.status(400).json({message:"Error in enrollment !",success:false});
    
}

}

const deleteEnroll = async (req,res)=>{

const id = req.params.id;

await Enroll.findByIdAndDelete(id);

return res.status(200).json({message:"Enroll course Deleted success !",success:true})

}

const enrollByID = async (req,res)=>{
    const userID = req.params.id;


   const enroll =  await Enroll.find({userID});
console.log(enroll)
console.log(userID)
   return res.status(200).json(enroll);

}




module.exports = {createEnroll,deleteEnroll,enrollByID}