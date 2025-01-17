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
    const user = req.session.currentUser
    console.log(user.imageUrl)
    try {
        const profile = await User.findById(userId)
        const data = await Location.find({creator: userId})
        const count = data.length

        const locationDb = data.map(el => {
            return {
              _id: el._id,
              creator: el.creator,
              city: el.city,
              category: el.category,
              level: el.level,
              photo: el.photo,
            }
          })
      
          for (let i = 0; i < locationDb.length; i++) { 
            if (profile.favorites.includes(locationDb[i]._id)) {
              locationDb[i].liked = true
              //console.log(locationDb[i])
            } //console.log("Zwischentest", locationDb[i].liked)
          } 
          console.log(locationDb)

        res.render("profile/profile", {profile, locationDb, user, count: count});//CHECK IF IT WORKS  {layout:false}
    } catch (error) {
        console.log(error)
    }
  });

router.get("/edit-profile", isLoggedIn, (req, res) => {
    const user = req.session.currentUser
    res.render("profile/edit-profile", {user});
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
        const data = await favDb.populate("favorites")
        //console.log(data.favorites)
        let locPopulate =[]

        for (let i = 0; i < data.favorites.length; i++) {
            const obj = await data.favorites[i].populate("creator")
            locPopulate.push(obj)
            //console.log("Result-Logging", result)
            //console.log(obj)
          }
          console.log(locPopulate)
        res.render("location/favorites", {locPopulate, user});
    } catch (error) {
        console.log(error)
    }
    
});

module.exports = router;