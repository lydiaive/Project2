const express = require("express");
const router = express.Router();

// ℹ️ Handles password encryption
const mongoose = require("mongoose");
const fileUploader = require('../config/cloudinary.config');

const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/", isLoggedIn, (req, res) => {
    res.render("profile/profile");
  });

router.get("/edit-profile", isLoggedIn, (req, res) => {
res.render("profile/edit-profile");
});

router.post('/img-upload', fileUploader.single('profileimg'), async (req, res) => {
const { fullname, profileinfo } = req.body;
const userId = req.session.currentUser._id
console.log(userId, fullname, profileinfo)
try {
    const imgUpload = await User.findbyIdAndUpdate(userId, { fullname, profileinfo, imageUrl: req.file.path });
    console.log(imgUpload)
    res.redirect("/profile/profile");
    
} catch (error) {
    console.log(`Error while uploading profile-image: ${error}`)
    
    } 
});

module.exports = router;