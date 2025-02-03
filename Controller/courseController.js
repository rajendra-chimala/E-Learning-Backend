const { model } = require("mongoose");
const Course = require("../Models/Course");
const User = require("../Models/User");

const createCourse = async (req, res) => {
  const { title, description, mentorID, duration, price, category } = req.body;
  try {
    const isAlreadyCreated = await Course.findOne({ title });

    if (isAlreadyCreated)
      return res
        .status(409)
        .json({ message: "Course already created !", success: false });

    const newCourse = await Course({
      title,
      description,
      mentorID,
      duration,
      price,
      category,
    });

    newCourse.save();

    res
      .status(200)
      .json({
        message: "Course Created Successfully !",
        success: true,
        newCourse,
      });
  } catch (error) {
    res
      .status(403)
      .json({ message: "Fail to create course !", success: false });
    console.log("Error in Create Course !", error);
  }
};
const getAll = async (req, res) => {
  const all = await Course.find();
  if (!all)
    return res.status(200).json({ message: "Not found !", success: true });

  res.status(200).json({ message: "All Courses !", success: true, all });
};

const deleteCourse = async (req, res) => {
  const id = req.params.id;

  // console.log(id)
  try {
    const isUser = await Course.findById(id);

    if (!isUser)
      return res
        .status(400)
        .json({ message: "Course not found !", success: false });

    await Course.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ message: "User Deleted Successfully !", success: true, isUser });
  } catch (error) {
    console.log("Error in Deleting !", error);
    return res.status(400).json({ message: "Deleting Fail !", success: false });
  }
};

const getCourseById = async (req, res) => {
  const id = req.params.id;

  try {
    const isCourse = await Course.findById(id);

    if (!isCourse)
      return res
        .status(404)
        .json({ message: "Course not found !", success: false });

    return res
      .status(200)
      .json({ message: "Found !", success: true, isCourse });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Error in Getting Course By ID !", success: false });
  }
};

const updateCourse = async (req, res) => {
  const id = req.params.id;
  const { title, description, mentorID, duration, price, category } = req.body;

  try {
    const course = await Course.findById(id);
    if (!course)
      return res
        .status(404)
        .json({ message: "Course not found !", success: false });

    const updatedCourse = await Course.findByIdAndUpdate(id, {
      title,
      description,
      mentorID,
      duration,
      price,
      category,
    },{new:true});

    res
      .status(200)
      .json({
        message: "Course Updated Successfully !",
        success: true,
        updatedCourse,
      });
  } catch (error) {
    res.status(400).json({message:"Error is Update Course !",error});
  }
};

module.exports = {
  createCourse,
  getAll,
  deleteCourse,
  getCourseById,
  updateCourse,
};
