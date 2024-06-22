const User = require("../models/User");
const bcrypt = require("bcrypt");
const Profile = require("../models/Profile");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const isValidPincode = (pincode) => /^\d{6}$/.test(pincode);
const isValidAadhar = (aadharNumber) => /^\d{12}$/.test(aadharNumber);
const isValidContactNumber = (contactNumber) => /^\d{10}$/.test(contactNumber);
const isPositiveNumber = (value) => !isNaN(value) && Number(value) > 0;
const isValidAge = (age) => isPositiveNumber(age) && age > 0 && age < 120;
const isValidGender = (gender) => ['male', 'female', 'other'].includes(gender.toLowerCase());
const isValidFertilizer = (fertilizersUsed) => ['organic','chemical','bioinputs'].includes(fertilizersUsed.toLowerCase());

exports.signup = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            contactNumber,
            password,
            confirmPassword,
            age,
            gender,
            village,
            state,
            pincode,
            aadharNumber,
            areaPloughed,
            fertilizersUsed,
            accountType
            
        } = req.body;

        if (!firstName || !lastName || !password || !confirmPassword || !contactNumber) {
            return res.status(403).json({
                success: false,
                message: "All fields are required"
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password and ConfirmPassword value do not match. Please try again"
            });
        }

        if (!isValidPincode(pincode)) {
            return res.status(400).json({
                success: false,
                message: "Invalid pincode"
            });
        }

        // if (!isValidAadhar(aadharNumber)) {
        //     return res.status(400).json({
        //         success: false,
        //         message: "Invalid Aadhar number"
        //     });
        // }

        if (!isValidContactNumber(contactNumber)) {
            return res.status(400).json({
                success: false,
                message: "Invalid contact number"
            });
        }

        if (!isPositiveNumber(areaPloughed)) {
            return res.status(400).json({
                success: false,
                message: "Area ploughed must be a positive number"
            });
        }

       

        if (!isValidAge(age)) {
            return res.status(400).json({
                success: false,
                message: "Invalid age"
            });
        }
        if(!isValidFertilizer(fertilizersUsed)){
            return res.status(400).json({
                success: false,
                message: "Enter valid fertilizer"
            })
        }

        if (!isValidGender(gender)) {
            return res.status(400).json({
                success: false,
                message: "Invalid gender"
            });
        }

      

        const existingUser = await User.findOne({ contactNumber });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists. Please sign in to continue."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        console.log(hashedPassword);

        const profileDetails = await Profile.create({
            gender,
            age,
            village,
            state,
            pincode,
            aadharNumber,
            areaPloughed,
            fertilizersUsed
        });

        console.log(profileDetails);

        const user = await User.create({
            firstName,
            lastName,
            contactNumber,
            password: hashedPassword,
            additionalDetails: profileDetails._id,
            accountType
        });

        console.log(user);

        return res.status(200).json({
            success: true,
            message: "User is registered successfully",
            user
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered. Please try again later"
        });
    }
};

exports.login = async(req, res) => {
    try{
        const {contactNumber, password} = req.body;

        if(!contactNumber || !password){
            return res.status(403).json({
                success: false,
                message: "All fields are required. Please try again"
            });
        }

        const user = await User.findOne({contactNumber}).populate("additionalDetails");

        if(!user){
            return res.status(401).json({
                success: false,
                message: "User is not registered. Please signup first"
            });
        }

        if(await bcrypt.compare(password, user.password)){
            const payload = {
                contactNumber: user.contactNumber,
                id: user._id,
                role: user.accountType
            };

            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h"
            });

            user.token = token;
            user.password = undefined;

            const options = {
                expires: new Date(Date.now() + 3*24*60*60*1000),
                httpOnly: true
            }

            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user,
                message: "Logged In Successfully"
            });
        }
        else{
            return res.status(401).json({
                success: false,
                message: "Password is incorrect"
            });
        }
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Login Failure, please try again"
        });
    }
};


exports.update = async (req, res) => {
    try {
        const  userId  = req.user.id;
        console.log(userId);
        const {
            firstName,
            lastName,
            age,
            gender,
            village,
            state,
            pincode,
            aadharNumber,
            areaPloughed,
            fertilizersUsed
        } = req.body;

        const updateFields = {};

        if (firstName !== undefined) updateFields.firstName = firstName;
        if (lastName !== undefined) updateFields.lastName = lastName;
        if (age !== undefined) updateFields.age = age;
        if (gender !== undefined) updateFields.gender = gender;
        if (village !== undefined) updateFields.village = village;
        if (state !== undefined) updateFields.state = state;
        if (pincode !== undefined) updateFields.pincode = pincode;
        if (aadharNumber !== undefined) updateFields.aadharNumber = aadharNumber;
        if (areaPloughed !== undefined) updateFields.areaPloughed = areaPloughed;
        if (fertilizersUsed !== undefined) updateFields.fertilizersUsed = fertilizersUsed;

        const user = await User.findByIdAndUpdate(userId, updateFields, { new: true });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "User details updated successfully",
            user
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "User details cannot be updated. Please try again later"
        });
    }
};

