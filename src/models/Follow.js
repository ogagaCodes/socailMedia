const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    follower_id: { type: mongoose.Types.ObjectId, ref: "User" },
    following_id: { type: mongoose.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: { createdAt: "created_at" },
  }
);

module.exports = mongoose.model("Follow", schema);
