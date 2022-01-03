const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    post_id: { type: mongoose.Types.ObjectId, ref: "Post" },
    user_id: { type: mongoose.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: { createdAt: "created_at" },
  }
);

module.exports = mongoose.model("Like", schema);
