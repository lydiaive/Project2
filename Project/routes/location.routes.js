const express = require("express");
const router = express.Router();

// ℹ️ Handles password encryption
const mongoose = require("mongoose");

const Location = require("../models/Location.model")
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/", isLoggedIn, async(req, res) => {

  try {
    const locationDb = await Location.find()
    res.render("location/main-feed", {locationDb});
    console.log(locationDb)
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