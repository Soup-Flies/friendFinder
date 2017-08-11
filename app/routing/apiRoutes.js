//2 routes --- 
// /api/friends GET
// /api/friends POST
const path = require('path');

const friendTest = function() {
  
}

module.exports = app => {
  app.get("/api/friends", (req, res) => res.sendFile(path.join(__dirname, "/../data/friends.js")));
  app.post("/api/friends", (req, res) => friendTest());
};

