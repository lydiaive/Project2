const express = require("express");
const router = express.Router();

// ℹ️ Handles password encryption
const mongoose = require("mongoose");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/", isLoggedIn, (req, res) => {
    res.render("profile/profile");
  });


module.exports = router;