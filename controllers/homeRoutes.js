const router = require("express").Router();
const { User, Decks, PlayGroups, Games, Players, gamesDecks } = require("../models");
const withAuth = require("../utils/auth");
const { helper_function } = require("../utils/helpers");

// GET for the main page
router.get("/", async(req, res) => {
  try{
    const findPlaygroup = await PlayGroups.findAll();
    const playGroupList = findPlaygroup.map((group) => group.get({plain:true}));

    console.log(playGroupList);

    res.render("landing-page", {
      playGroupList
    });
  }
  catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET for the main page
router.get("/playGroups", async(req, res) => {
  try{
    const findPlaygroup = await PlayGroups.findAll();
    const playGroupList = findPlaygroup.map((group) => group.get({plain:true}));

    const findPlayers = await Players.findAll();
    const playerList = findPlayers.map((group) => group.get({plain:true}));

    console.log(playGroupList);
    console.log(playerList);

    res.render("landing-page", {
      playGroupList,
      playerList
    });
  }
  catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// GET for the homepage
router.get("/:id", async (req, res) => {
  try {
    //Find playgroup name
    //Hard coded for playgroup #1, but this should be req.params.id with /:id in the URL
    // let play_id = 1;
    let play_id = req.params.id;
    console.log(`play_id is: ${play_id}`);
    if(!req.params.id){
      play_id=1;
    }

    let findPlaygroup = await PlayGroups.findByPk(play_id);

    if(!findPlaygroup) {
      findPlaygroup = await PlayGroups.findByPk(1);
    }

    const playgroup = findPlaygroup.get({plain: true});
    console.log(`playgroup is: ${playgroup}`);

    //Finds all games with the requested ID
    const findGameHistory = await Games.findAll({
      where: {
        playgroup_id: req.params.id
      }
    });

    // const GameHistory = findGameHistory.get({plain: true});
    var gameHistory = findGameHistory.map((game) => game.get({ plain: true }));
    console.log("gameHistory is: ", gameHistory);
    if(!findGameHistory) {
      res.status(404).json({message: `Error, no Gamehistory found for playgroup with id ${play_id}`});
      return;
    }

    res.render("home-page", {
      playgroup,
      gameHistory,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
