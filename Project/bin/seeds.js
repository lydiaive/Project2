const mongoose = require("mongoose")
const Location = require("../models/Location.model")

const MONGO_URI = "mongodb://localhost:27017/project2"

const locations = [
  {
    creator:"surfLegendTest", // THIS SHOULD BE AUTOMATICALLY FILLED UP WITH THE USERS USERNAME
    city: "Barcelona",
    category:"Surf",
    level: "Beginner",
    spot: "Barceloneta",
    description:"Better luck finding waves during winter. Always check forecast before coming as waves are rare at this spot",
    coordinate:['41.378384988896045', '2.193158191250629'], //array containing latitude and longitude in decimal format
    photo:'https://www.rippingmag.com/wp-content/uploads/M9-7.jpg'
  },
  {
    creator:"surfLegendtest",
    city: "Barcelona",
    category:"Surf",
    level: "Beginner",
    spot: "Bogatell",
    description:"Better luck finding waves during winter. Always check forecast before coming as waves are rare at this spot",
    coordinate:['41.394435660453475', '2.2070958723855196'], //array containing latitude and longitude in decimal format
    photo:'https://www.telegraph.co.uk/content/dam/news/2020/12/01/TELEMMGLPICT000244065877_trans_NvBQzQNjv4BqIANxl8wJr51_oZCB9m_DiU20SVfcOzT7GCr_e6NH-Ws.jpeg?imwidth=960'
  },
  {
    creator:"surfLegendTest", // THIS SHOULD BE AUTOMATICALLY FILLED UP WITH THE USERS USERNAME
    city: "Zarautz",
    category:"Surf",
    level: "Intermediate",
    spot: "Camping beach",
    description:"Pretty solid surfing all year round. Beginner friendly during the summer. Waves get pretty nasty during the winter season ripp it brah. Also, you might need a wetsuit.",
    coordinate:['43.29067269346531', '-2.1551803145759347'], //array containing latitude and longitude in decimal format
    photo:'https://images.rove.me/w_740,q_85/cwxbs5shoinuicmzykcy/basque-country-zarautz-surfing.jpg'
  },
  {
    creator:"surfLegendtest",
    city: "San Sebastian",
    category:"Surf",
    level: "Intermediate",
    spot: "Zurriola",
    description:"Amazing spot for surfing right within the city. Localism can get pretty intense so make not to drrop in into anyone and respect surf ethics.",
    coordinate:['43.326635413936195', '-1.9754092879337957'], //array containing latitude and longitude in decimal format
    photo:'https://www.singlequiver.com/enelpico/wp-content/uploads/2021/02/zurriola-surf-1.jpg'
  },
  {
    creator:"surfLegendtest", // THIS SHOULD BE AUTOMATICALLY FILLED UP WITH THE USERS USERNAME
    city: "Sitges",
    category:"Surf",
    level: "Beginner",
    spot: "secret location",
    description:"Surprisngly good waves during winter season consodering its the mediterrnian sea. Not a lot of people. Make sure to bring water and snacks for long seshs",
    coordinate:['41.23580004163701', '1.8139980304484256'], //array containing latitude and longitude in decimal format
    photo:'https://www.sitgesanytime.com/media/site1/cache/images/platja-aiguadol.jpeg'
  },
  {
    creator:"perroFlauta",
    city: "Siurana",
    category:"Climbing",
    level: "Intermediate",
    spot: "Siurana",
    description:"6A route for all levels. Make sure to brign all equipment and safety gear. You can get food and beverages in nearby town.",
    coordinate:['41.260231712151224', '0.9349374048002769'], //array containing latitude and longitude in decimal format
    photo:'https://pbs.twimg.com/media/FE0Y9jOXoAYq8ZM?format=jpg&name=medium'
  },
  {
    creator:"perroFlauta",
    city: "Siurana",
    category:"Climbing",
    level: "Expert",
    spot: "Siurana",
    description:"7B route. 85 meter mostly clamp grips.",
    coordinate:['41.2609096964991', '0.9370923569873384'], //array containing latitude and longitude in decimal format
    photo:'https://laidbackplaces.com/wp-content/uploads/2022/05/siurana.jpg'
  },
  {
    creator:"perroFlauta",
    city: "Siurana",
    category:"Climbing",
    level: "Expert",
    spot: "Siurana",
    description:"7A route. 55 meter tall. About a 25 min approach of you park by the camping vans",
    coordinate:['41.26036627449004', '0.9318874245483016'], //array containing latitude and longitude in decimal format
    photo:'https://www.marcvilaplana.com/wp-content/uploads/2019/10/Siurana-Climbing-Camp-3.jpg'
  }
]

const createLocations = async function() {
  try {
    const connect = await mongoose.connect(MONGO_URI)
    console.log("TEST")
    console.log(`Connected to database: ${connect.connections[0].name}`)
    const deleteAll = await Location.deleteMany()
    console.log("Db clean")
    const dbLocations = await Location.create(locations)// Book IS A CONTAST THAT OS REQUIRNG / CONNECTING THE BOOK MODEL. AND CREATE IS A BUILT IN METHOD? OF MONGOOSE ? OR HB? OR WHAT GIVES THIS FUNCTIONALITY??
    console.log(`${dbLocations.length} - locations created `)
    const dbClose = await mongoose.connection.close()
    console.log("Connection closed")
  }catch (err) {
    console.log(`Error creating the seeds: ${err}`)
  }
}


createLocations()










// const createSeeds = async function () {
//   try {
//     const connect = await mongoose.connect(MONGO_URI)
//     console.log(`Connected to database: ${connect.connections[0].name}`)

//     // Clear DB,  Example: (-- const deleteAll = await Book.deleteMany() --)
//     // console.log("Db clean")

//     const dbClose = await mongoose.connection.close()
//     console.log("Seeds created")
//   } catch (err) {
//     console.log(`Error creating the seeds: ${err}`)
//   }
// }


