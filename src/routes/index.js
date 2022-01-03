const { Router } = require("express");
const posts = require("./routes");

module.exports = () => {
  const router = Router();

  router.use("/post", posts);
  return router;
};
