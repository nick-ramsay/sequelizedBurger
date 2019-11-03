const express = require("express");

const PORT = process.env.PORT || 5000;

var db = require("./models");

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use(routes);

db.sequelize.sync({force: true}).then(function () {
    app.listen(PORT, function () {
        console.log("Server listening on: http://localhost:" + PORT);
    });
});