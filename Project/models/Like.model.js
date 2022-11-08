const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const likeSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    locationId: {
        type: String,
        required: true,
      }
  },
  {
    timestamps: true,
  }
);

const Like = model("Like", likeSchema);

module.exports = Like;