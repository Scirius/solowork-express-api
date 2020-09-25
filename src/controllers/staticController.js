const path = require("path");
// no db connection needed here but might be required later
//const dbConnection = require("../dbConfig");

const StaticController = {
  homepage: (req, res, next) => {
    // as paths with .. can be considered malicious and are potentially forbidden,
    // resolve the path first
    let pathToHomepage = path.resolve(__dirname + "/../static/index.html");
    res.sendFile(pathToHomepage);
  },
  page404: (req, res, next) => {
    // as paths with .. can be considered malicious and are potentially forbidden,
    // resolve the path first
    let pathTo404 = path.resolve(__dirname + "/../static/404.html");
    res.sendFile(pathTo404);
  }
};

module.exports = StaticController;
