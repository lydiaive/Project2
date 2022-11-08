const express = require("express");
const router = express.Router();


// ℹ️ Handles password encryption
const mongoose = require("mongoose");

const User = require("../models/User.model");
const fileUploader = require('../config/cloudinary.config');
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/", isLoggedIn, async (req, res) => {
    const userId = req.session.currentUser._id
    try {
        const profile = await User.findById(userId)
        console.log(profile)
        res.render("profile/profile", profile);//CHECK IF IT WORKS  {layout:false}
    } catch (error) {
        console.log(error)
    }
  });

router.get("/edit-profile", isLoggedIn, (req, res) => {
res.render("profile/edit-profile");
});

router.post('/img-upload', fileUploader.single('profileImg'), async (req, res) => {
const { fullName, profileInfo } = req.body;
const userId = req.session.currentUser._id
//console.log(userId, fullName, profileInfo)
try {
    const imgUpload = await User.findByIdAndUpdate(userId, { 
        fullName, 
        profileInfo, 
        imageUrl: req.file.path });
    //console.log(imgUpload)
    res.redirect("/profile");
} catch (error) {
    console.log(`Error while uploading profile-image: ${error}`)
    } 
});

module.exports = router;