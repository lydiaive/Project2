const { Schema, model } = require("mongoose");
const Location = require("../models/Location.model")

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: false,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
      fullName: String,
      profileInfo: String,
      imageUrl: {
        type: String,
        default: "/images/blank-profile-picture.webp"
      },
    
      favorites:  {
        type:[{ type: Schema.Types.ObjectId, ref: 'Location'}],
        default: []
    }, 
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
