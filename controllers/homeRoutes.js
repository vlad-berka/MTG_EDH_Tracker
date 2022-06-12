const router = require("express").Router();
// const { User } = require("../models");
const withAuth = require("../utils/auth");
const { helper_function } = require("../utils/helpers");

// GET for the homepage
router.get("/", async (req, res) => {
  try {
    res.render("home-page");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
