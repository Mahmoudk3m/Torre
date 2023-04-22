const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mainRoutes = require("./routes/main");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(mainRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening on port " + (process.env.PORT || 3000));
});
