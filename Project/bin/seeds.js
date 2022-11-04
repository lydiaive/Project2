const mongoose = require("mongoose")

// Require the models,  Example: (-- const Book = require("../models/Book.model") --)

const MONGO_URI = "mongodb://localhost:27017/project2"


const createSeeds = async function () {
  try {
    const connect = await mongoose.connect(MONGO_URI)
    console.log(`Connected to database: ${connect.connections[0].name}`)

    // Clear DB,  Example: (-- const deleteAll = await Book.deleteMany() --)
    // console.log("Db clean")

    const dbClose = await mongoose.connection.close()
    console.log("Seeds created")
  } catch (err) {
    console.log(`Error creating the seeds: ${err}`)
  }
}

createSeeds()
