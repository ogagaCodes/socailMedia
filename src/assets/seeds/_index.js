const fs = require("fs");

exports.seedUser = async () => {
  try {
    const User = require("../../models/User");
    const records = await User.countDocuments();

    if (records) {
      return;
    }

    const data = fs.readFileSync(
      `${process.cwd()}/src/assets/seeds/user.json`,
      "utf8"
    );

    await User.insertMany(JSON.parse(data));
  } catch (err) {
    console.log(err);
  }
};

exports.seedPosts = async () => {
  try {
    const Posts = require("../../models/Posts");
    const records = await Posts.countDocuments();

    if (records) {
      return;
    }

    const data = fs.readFileSync(
      `${process.cwd()}/src/assets/seeds/posts.json`,
      "utf8"
    );

    await Posts.insertMany(JSON.parse(data));
  } catch (err) {
    console.log(err);
  }
};

exports.seedLikes = async () => {
  try {
    const Likes = require("../../models/Likes");
    const records = await Likes.countDocuments();

    if (records) {
      return;
    }

    const data = fs.readFileSync(
      `${process.cwd()}/src/assets/seeds/likes.json`,
      "utf8"
    );
    await Likes.insertMany(JSON.parse(data));
  } catch (err) {
    console.log(err);
  }
};

exports.seedFollows = async () => {
  try {
    const Follows = require("../../models/Follow");

    const records = await Follows.countDocuments();

    if (records) {
      return;
    }

    const data = fs.readFileSync(
      `${process.cwd()}/src/assets/seeds/follow.json`,
      "utf8"
    );

    await Follows.insertMany(JSON.parse(data));
  } catch (err) {
    console.log(err);
  }
};

