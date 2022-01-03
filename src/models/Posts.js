const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    description: { type: String },
    user_id: { type: mongoose.Types.ObjectId, ref: "User" },
    image: { type: String },
  },
  {
    timestamps: { createdAt: "created_at" },
  }
);

module.exports = mongoose.model("Post", schema);
