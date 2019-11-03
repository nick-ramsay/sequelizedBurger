const db = require("../models");

const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
  db.Burgers.findAll({}).then(function (dbBurger) {
    var hbsObject = {
      burgers: dbBurger
    };
    res.render("index", hbsObject);
    //res.json(dbBurger);
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var devouredID = req.params.id;
  console.log(devouredID);
  /*burger.updateOne("burgers", "devoured", 1, "id", devouredID);*/
  db.Burgers.update({
    devoured: 1
  },
    {
      where: {
        id: devouredID
      }
    }).then(function (dbBurger) {
      res.json(dbBurger);
    });
});


router.post("/api/burgers", function (req, res) {
  db.Burgers.create(req.body).then(function (dbBurger) {
    res.json(dbBurger);
  });
});



module.exports = router;