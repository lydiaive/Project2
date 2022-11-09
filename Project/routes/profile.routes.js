const express = require("express");
const router = express.Router();


// ℹ️ Handles password encryption
const mongoose = require("mongoose");

const User = require("../models/User.model");
const Location = require("../models/Location.model")
const fileUploader = require('../config/cloudinary.config');
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/", isLoggedIn, async (req, res) => {
    const userId = req.session.currentUser._id
    try {
        const profile = await User.findById(userId)
        const locationDb = await Location.find({creator: userId})
        const count = locationDb.length
        console.log(locationDb)
        //console.log(profile)

        res.render("profile/profile", {profile, locationDb, count: count});//CHECK IF IT WORKS  {layout:false}
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

router.get("/favorites", isLoggedIn, async (req, res) => {
 const user = req.session.currentUser
    try {
        const favDb = await User.findById(user._id)
        console.log(favDb)
        const locPopulate = await favDb.populate("favorites")
        console.log(locPopulate)
        res.render("location/favorites", {locPopulate});
    } catch (error) {
        console.log(error)
    }
    
});

module.exports = router;