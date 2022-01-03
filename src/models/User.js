const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    username: { type: String},
    email: { type: String},
    full_name: { type: String},
    profile_picture:{type: String},
    bio: { type: String},
    password: {type: String}
  },
  {
    timestamps: { createdAt: "created_at"},
  }
);

module.exports = mongoose.model("User", schema);
