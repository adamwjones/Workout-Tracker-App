const path = require("path");
module.exports = function (app) {
  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};

//Why is this needed...even when I have the exact same code in the apiRoutes.js file?
