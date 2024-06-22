const QueryModel = require("../models/Query");
const UserModel = require("../models/User");
const cloudinary = require("cloudinary").v2;
const {uploadImageToCloudinary} = require("../utils/imageUploader");

exports.createQuery = async (req, res) => {
  try {
    const { queryText } = req.body;
    const userId = req.user.id;
    const files = req.files;

    if (queryText || files || files.audio || files.picture) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    let audio = "";

    if(files.audio){
        const audioFile = files.audio;
        const audioUpload = await uploadImageToCloudinary(
            audioFile,
            process.env.FOLDER_NAME
        )

        audio = audioUpload.secure_url;
    }

    let image = "";
    
    if(files.picture){
        const pictureFile = files.picture;

        const pictureUpload = await uploadImageToCloudinary(
            pictureFile,
            process.env.FOLDER_NAME
        )

        image = pictureUpload.secure_url;
    }
    
    const newQuery = new QueryModel({
      queryText,
      userId,
      audio,
      image
    });

    const savedQuery = await newQuery.save();

    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.queries.push(savedQuery._id);
    await user.save();

    res.status(201).json(savedQuery);
  } catch (error) {
    console.error("Error creating query:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getQueries = async (req, res) => {
  try {
    const queries = await QueryModel.find();
    res.status(200).json(queries);
  } catch (error) {
    console.error("Error fetching queries:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.answerQuery = async (req, res) => {
  try {
    const { queryId, queryAnswer } = req.body;
    const files = req.files.audio;

    if (!queryId || !queryAnswer || files) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    let audio = "";

    if(files){
        const audioFile = files;
        const audioUpload = await uploadImageToCloudinary(
            audioFile,
            process.env.FOLDER_NAME
        )

        audio = audioUpload.secure_url;
    }

    const updatedQuery = await QueryModel.findByIdAndUpdate(
      queryId,
      { ansText: queryAnswer, ansAudio: audio},
      { new: true }
    );

    if (!updatedQuery) {
      return res.status(404).json({ message: "Query not found" });
    }

    res.status(200).json(updatedQuery);
  } catch (error) {
    console.error("Error answering query:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.removeQuery = async (req, res) => {
  try {
    const { queryId } = req.body;
    const userId = req.user.id;

    if (!queryId || !userId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const removedQuery = await QueryModel.findByIdAndRemove(queryId);
    if (!removedQuery) {
      return res.status(404).json({ message: "Query not found" });
    }

    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { $pull: { queries: queryId } },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "Query removed successfully" });
  } catch (error) {
    console.error("Error removing query:", error);
    res.status(500).json({ message: "Server error" });
  }
};