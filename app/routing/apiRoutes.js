const path = require('path');

const friendTest = function(req, res) {
  console.log(req.body);
}

module.exports = app => {
  app.get("/api/friends", (req, res) => res.sendFile(path.join(__dirname, "/../data/friends.js")));
  app.post("/api/friends", (req, res) => friendTest(req, res));
};

