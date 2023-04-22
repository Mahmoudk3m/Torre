const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mainRoutes = require("./routes/main");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(mainRoutes);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
