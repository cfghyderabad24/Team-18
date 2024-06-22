const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

exports.auth = async(req, res, next) => {
    try{
        const token = req.cookies.token || req.body.token || req.header("Authorisation").replace("Bearer ", "");

        if(!token){
            return res.status(401).json({
                success: false,
                message: "Token is missing"
            });
        }

        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;
        }
        catch(err){
            return res.status(401).json({
                success: false,
                message: "Token is invalid"
            });
        }

        next();
    }
    catch(error){
        return res.status(401).json({
            success: false,
            message: "Something went wrong while validating the token"
        });
    }
}


exports.isFarmer = async(req, res, next) => {
    try{
        if(req.user.role !== "Farmer"){
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Farmers only"
            });
        }

        next();
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified. Please try again"
        });
    }
}

exports.isVolunteer = async(req, res, next) => {
    try{
        if(req.user.role !== "Volunteer"){
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Volunteer only"
            });
        }

        next();
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified. Please try again"
        });
    }
}

exports.isAdmin = async(req, res, next) => {
    try{
        if(req.user.role !== "Admin"){
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Admin only"
            });
        }

        next();
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified. Please try again"
        });
    }
}