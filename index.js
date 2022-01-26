const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./src/server");
const {
  seedUser,
  seedFollows,
  seedLikes,
  seedPosts,
} = require("./src/assets/seeds/_index");

mongoose
  .connect(process.env.DBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      seedUser();
      seedPosts();
      seedLikes();
      seedFollows();
      console.log(`Server has started!... and running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
