const express = require("express");
const router = express.Router();

// ℹ️ Handles password encryption
const mongoose = require("mongoose");

const Like = require("../models/Like.model")
const User = require("../models/User.model");
const isLoggedIn = require("../middleware/isLoggedIn");

router.post("/:locationId", isLoggedIn, async (req, res) => {
    const user = req.session.currentUser
    const locationId = req.params.locationId
    console.log(locationId)


    try {
        /* const likeDb = await Like.create(
            {userId: user._id,
            locationId: locationId}
        )
         */ 
        const deleteFav = await User.findByIdAndUpdate(user._id, { $pull: { favorites: locationId} })
        const updateFav = await User.findByIdAndUpdate(user._id, { $push: { favorites: locationId} })
        console.log('Like created')
    } catch (error) {
        console.log(error)
    } 
});

router.post("/:locationId/delete", isLoggedIn, async (req, res) => {
    const user = req.session.currentUser
    const locationId = req.params.locationId
    console.log(locationId)

    try {
        /* const likeDb = await Like.findOneAndDelete(
            {userId: user._id,
            locationId: locationId}
        )
        console.log('Like deleted') */

        const updateFav = await User.findByIdAndUpdate(user._id, { $pull: { favorites: locationId} })
        console.log(updateFav)
        res.redirect("/profile/favorites")
    } catch (error) {
        console.log(error)
    } 
});


module.exports = router;