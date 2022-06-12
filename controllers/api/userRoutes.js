const router = require("express").Router();
// const { User } = require("../../models");
const withAuth = require("../../utils/auth");

//at the /api/user/login either redirect the user or render the login handlebars file
router.get("/login", async (req, res) => {
  //   If the user is already logged in, redirect the request to the menu route
  if (req.session.logged_in) {
    res.redirect("/api/user/");
    return;
  }

  res.render("landing-page");
});

// at api/user when the user requests to log in then create a new user and save the information as well as set the logged in variable to true
router.post("/sign-up", async (req, res) => {
  try {
    console.log(req.body);
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.user_id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//at api/user/login when the user tries to login, find the user that matches the email provided and then check the hashed password for validation
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    //if successfully logged in then save the logged in variable as true and save the user id
    req.session.save(() => {
      req.session.user_id = userData.user_id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//at api/user/logout if the logged in variable is true then destroy the session to log the user out
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
