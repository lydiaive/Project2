const { Schema, model } = require("mongoose");

const locationSchema = new Schema({
    //creator take user id pupulate 
    
    creator:String, 
    city:String,
    category:{
        type:String,
        required: true,
    }, 
    level:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    coordinate: 
    {
        type:Array,
        default: []
        /* required: true, 
        unique: true*/
    }, 
    photo:{
        type:String, //LINK 
        required: true,
        unique: true
    }
  },{
    timestamps: true
  }
)
const Location = model("Location", locationSchema);

module.exports = Location;



