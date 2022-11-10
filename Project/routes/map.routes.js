const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const Location = require("../models/Location.model")//This way I can use the location on the data base here
const isLoggedIn = require("../middleware/isLoggedIn");
const fileUploader = require('../config/cloudinary.config');


//route to display main map
router.get('/', isLoggedIn, async(req, res) => {
    const user = req.session.currentUser
    const mapCenter = [2.1686, 41.3874]//note this API takes cooridnate the other way around. Its foxed later on buty keep in mind
    const mapZoom = 11
    try{
        const locationDb = await Location.find()
        console.log(locationDb)
        res.render("map", {locationDb, mapCenter, mapZoom, user})
        console.log(locationDb)
    }catch(err){
        console.log(err)
    }
})

module.exports = router;