const router = require("express").Router();
const { User, Decks, PlayGroups, Games, gamesDecks } = require("../models");
const withAuth = require("../utils/auth");
const { helper_function } = require("../utils/helpers");

// GET for the homepage
router.get("/", async (req, res) => {
  try {
    await Games.sync();
    await Decks.sync();
    // await gamesDecks.sync();

    //Find playgroup name
    //Hard coded for playgroup #1, but this should be req.params.id with /:id in the URL
    let play_id = 1;
    // let play_id = req.params.id;
    const findPlaygroup = await PlayGroups.findByPk(play_id);

    const playgroup = findPlaygroup.get({plain: true});

    if(!findPlaygroup) {
      res.status(404).json({message: `Error, no playgroup with id ${play_id} found`});
      return;
    }

    const findGameHistory = await Games.findAll({
      where: {
        playgroup_id: 1
      },
      include: {
        model: Decks,
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
      gameHistory
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
