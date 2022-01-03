const { Router } = require("express");
const Tasks = require("../task/solution");

const router = Router();

router.get(
  "/fetch",
  Tasks.getPosts
);

router.get(
  "/merge",
  Tasks.mergePosts
);

module.exports = router;