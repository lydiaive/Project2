const express = require("express");
const router = express.Router();

// ℹ️ Handles password encryption
const mongoose = require("mongoose");

const Location = require("../models/Location.model")
const User = require("../models/User.model")

const isLoggedIn = require("../middleware/isLoggedIn");
const fileUploader = require('../config/cloudinary.config');

router.get("/", isLoggedIn, async(req, res) => {
  const user = req.session.currentUser
  try {
    const data = await Location.find()
    const userDb = await User.findById(user)

    let result = []

    for (let i = 0; i < data.length; i++) {
      const obj = await data[i].populate("creator")
      result.push(obj)
    }
    //console.log(result)

    const locationDb = result.map(el => {
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
      if (userDb.favorites.includes(locationDb[i]._id)) {
        locationDb[i].liked = true
        //console.log(locationDb[i])
      } //console.log("Zwischentest", locationDb[i].liked)
    } 
    console.log(locationDb)
    res.render("location/main-feed", {locationDb, user});
    
  } catch (error) {
    console.log(error)
  }
  });

router.get("/create", isLoggedIn, async(req, res) => {
  const user = req.session.currentUser
  res.render("location/create-spot", {user});
  });

router.post("/create", fileUploader.single('photo'), isLoggedIn, async (req, res) => {
  const user = req.session.currentUser
  const {city, category, level, description, coordinate}= req.body
  try {
    console.log(req.body)
    const createLocation = await Location.create({
      creator: user._id,
      city, 
      category, 
      level, 
      description,
      coordinate,
      photo: req.file.path
    })
    res.redirect("/location");
  } catch (error) {
    console.log(error)
  }  
  }); 

  router.get("/detail/:id", isLoggedIn, async(req, res) => {
    const id = req.params.id
    const user = req.session.currentUser
    try {
      const locationDb = await Location.findById(id).populate("creator")
      console.log(locationDb)
      res.render("location/spot-detail", {locationDb, user});
    } catch (error) {
      console.log(error)
    }
    });

module.exports = router;