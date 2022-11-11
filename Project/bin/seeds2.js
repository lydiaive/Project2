const mongoose = require("mongoose")
const User = require("../models/User.model")

const MONGO_URI = "mongodb://localhost:27017/project2"

const users = [
    {
      username:"sido", // THIS SHOULD BE AUTOMATICALLY FILLED UP WITH THE USERS USERNAME
      email: "sido@gmail.com",
      password:"123456",
      fullName: "Sido",
      profileInfo: "Ich bin ein deutche rapper. Die bestte man",
      imageUrl:'https://www.hochzeitsfotografie-blume.de/images/Sido_Kool_Savas/Sido_I.jpg'
    },
    {
    username:"skt8rBoy69", // THIS SHOULD BE AUTOMATICALLY FILLED UP WITH THE USERS USERNAME
    email: "skt8rBoy69@gmail.com",
    password:"123456",
    fullName: "Carles Profesor",
    profileInfo: "I teach coding at IronHack Barcelona",
    imageUrl:'https://i.pinimg.com/564x/f5/fa/0e/f5fa0e502a69fd445e3c184fc5a28f60.jpg'
    
    },
    {
    username:"extremeGirl", // THIS SHOULD BE AUTOMATICALLY FILLED UP WITH THE USERS USERNAME
    email: "extremeGirl@gmail.com",
    password:"123456",
    fullName: "Peter Parker",
    profileInfo: "With great power comes great responsability",
    imageUrl:'https://i.pinimg.com/736x/13/44/39/1344395c45116fac0d36605f1e9d0324.jpg'    
    }
]

const createUsers = async function() {
    try {
      const connect = await mongoose.connect(MONGO_URI)
      console.log("TEST")
      console.log(`Connected to database: ${connect.connections[0].name}`)
      //const deleteAll = await User.deleteMany()
      console.log("Db clean")
      const dbusers = await User.create(users)// Book IS A CONTAST THAT OS REQUIRNG / CONNECTING THE BOOK MODEL. AND CREATE IS A BUILT IN METHOD? OF MONGOOSE ? OR HB? OR WHAT GIVES THIS FUNCTIONALITY??
      console.log(`${dbusers.length} - locations created `)
      const dbClose = await mongoose.connection.close()
      console.log("Connection closed")
    }catch (err) {
      console.log(`Error creating the seeds: ${err}`)
    }
  }
  
  
  createUsers()