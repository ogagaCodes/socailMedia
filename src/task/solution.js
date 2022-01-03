const User = require("../models/User");
const Posts = require("../models/Posts");
const Likes = require("../models/Likes");
const Follows = require("../models/Follow");
const Follow = require("../models/Follow");

exports.getPosts = async (req, res, next) => {
  try {
    //To Get List or Array of posts
    // STEPS
    // 1. Create an array to hold the single post and list of posts
    const PostList = [];
    const userData = {};
    // Get bodydata i.e user_id, post_id(list/Array)
    const { user_id, post_ids } = req.body;
    // search for requesting user

    const user = await User.findById(String(user_id));
    if (!user) {
      return res.json({
        code: "404",
        message: "User not found",
        data: null,
      });
    } else {
      // build user object
      userData.id = String(user._id);
      userData.username = String(user.username) || "";
      userData.full_name = String(user.full_name) || "";
      userData.profile_picture = String(user.profile_picture) || "";
      // 2. Loop through the given ids (In params post_ids:  List[int])
      for (let i = 0; i < post_ids.length; i++) {
        // get single post details
        //check if the requesting user likes or folows a post the post
        const postData = await Posts.findById(String(post_ids[i]));

        if (postData) {
          const liked = await Likes.findOne({
            post_id: String(postData._id),
            user_id: String(user_id),
          });
          const follows = await Follows.findOne({
            $or: [
              { follower_id: String(postData.user_id) },
              { following_id: String(postData.user_id) },
            ],
          });
          //  build post object
          const post = {};
          post.id = postData.Id;
          post.description = postData.description;
          post.owner = postData.user_id;
          post.image = postData.image;
          post.created_at = postData.created_at;

          if (liked) {
            post.liked = true;
          } else {
            post.liked = false;
          }
          if (follows) {
            userData.follows = true;
          } else {
            userData.follows = false;
          }
          PostList.push(postData);
        }
      }
    }
    return res.send.json({
      code: 200,
      message: "Success",
      data: {
        userData,
        PostList,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

exports.mergePosts = async (req, res, next) => {
  try {
    //   container for new list
    const singleList = [];
    //   extract lists of post Lists from body data
    const { ListOfPostList } = req.body;
    for (list in ListOfPostList) {
      singleList.push(...ListOfPostList); // spread items of each index intoa single list
    }
    return singleList;
  } catch (error) {
    console.error(error);
  }
};
