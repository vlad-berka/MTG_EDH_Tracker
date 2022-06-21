const router = require("express").Router();

const userRoutes = require("./userRoutes");
const playGroupRoutes = require("./playGroupRoutes");

router.use("/users", userRoutes);
router.use("/playGroups", playGroupRoutes);

module.exports = router;