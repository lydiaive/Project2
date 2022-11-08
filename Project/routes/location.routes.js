const express = require("express");
const router = express.Router();

// ℹ️ Handles password encryption
const mongoose = require("mongoose");

const Location = require("../models/Location.model")
const isLoggedIn = require("../middleware/isLoggedIn");
const fileUploader = require('../config/cloudinary.config');

router.get("/", isLoggedIn, async(req, res) => {
  const user = req.session.currentUser
  try {
    const locationDb = await Location.find()
    res.render("location/main-feed", {locationDb, user});
    console.log(locationDb)
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
  const {city, category, level, description}= req.body
  try {
    const createLocation = await Location.create({
      creator: user._id,
      city, 
      category, 
      level, 
      description,
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
      const locationDb = await Location.findById(id)
      res.render("location/spot-detail", {locationDb, user});
    } catch (error) {
      console.log(error)
    }
    });

module.exports = router;