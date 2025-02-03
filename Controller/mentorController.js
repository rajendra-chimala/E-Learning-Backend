const Mentor = require('../Models/Mentors');

const mentorCreate = async (req,res)=>{

    const {name,experties,workingAt,image} = req.body;
try {

    
    if(!name || !experties || !workingAt) return res.json({message :"All field are required ! [name ,experties, workingAt image ]"});

    const newMentor = await Mentor({
        name,experties,workingAt,image
    })


    newMentor.save()
    return res.status(200).json({message:"Mentor created successfully !",success:true,newMentor});
    
} catch (error) {

    console.log("Error in Mentor Creating !",error);
    return res.status(400).json({message:"Error in Mentor Creating !",success:false,});
    
}




}


const mentorDelete= async(req,res)=>{

    const id = req.params.id;
    const mentor = await Mentor.findById(id);
    if(!mentor) return res.status(400).json({message:"Mentor is not exist !",success:false});

    await Mentor.findByIdAndDelete(id);

    return res.status(200).json({message:"Deleted Successfully !",success:true,mentor});

}


const getAllMentor = async(req,res)=>{


    const mentors = await Mentor.find();

    return res.status(200).json({message:"Mentors geted ",success:true,mentors});

}



const mentorUpdate = async (req,res)=>{


    const id = req.params.id;
    const {name,experties,workingAt,image} = req.body;

    try {
        const mentor = await Mentor.findById(id);

        if(!mentor) return res.status(404).json({message:"Mentor not found !",success: false});

        const updatedMentor = await Mentor.findByIdAndUpdate(id,{
            name,experties,workingAt,image

        },{new:true})

        return res.status(200).json({message:"Mentor updated successfully !",success:true,updatedMentor});
        
    } catch (error) {

        console.log(error);
        res.status(400).json({message:"Error in mentor updating !",success:false});
        
    }



}


module.exports = {mentorCreate,mentorUpdate,getAllMentor,mentorDelete};