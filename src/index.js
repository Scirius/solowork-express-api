const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const usersRoutes = require("./routes/usersRoutes");
const demoRoutes = require("./routes/demoRoutes");
const staticRoutes = require("./routes/staticRoutes");

const app = express();

/* CORS handling to be able to access endpoints from POSTMAN and others */
app.use(cors({ origin: "*" }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));

/* endpoint handling */
app.use("/users", usersRoutes);
app.use("/demo", demoRoutes);

/* handling of static pages, define all folders for html output as static */
app.use("/static", express.static(__dirname + "/static"));
app.use("/styles", express.static(__dirname + "/styles"));
/* forward all URL routes not matched above to static routes (homepage, 404...) */
app.use("/", staticRoutes);

/* listen on port 3000 by default */
app.listen(3000, () => console.log("Express server with sql running on port 3000"));
