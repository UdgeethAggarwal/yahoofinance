const express = require("express");
const bodyParser = require("body-parser");
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var cors = require('cors')
const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());
app.use(cors())
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.use(upload.array());
const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to rapidapi application." });
});

// set port, listen for requests
require("./app/routes/newsRoutes")(app);
require("./app/routes/stockRoutes")(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
