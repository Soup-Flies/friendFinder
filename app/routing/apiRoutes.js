const path = require('path');
const fs = require('fs');


const friendTest = function(req, res) {
  console.log("Fetching", req);
  let friendPath = path.join(__dirname, "/../data/friends.js");
  let bestFriend = fs.readFile(friendPath, (err, data) => {
    if (err) throw err;
    const temp = JSON.parse(data);
    const newUser = req.body;
    let currentDif = 50;
    let currentCheck = 0;
    
    for (var i = 0; i < newUser.scores.length; ++i) {
      for (var j = 0; j < temp[i].scores.length; ++j) {
        currentCheck += (Math.abs(newUser.scores[j] - temp[i].scores[j])) 
      }
      if (currentCheck < currentDif) {
        currentDif = currentCheck;
        bestFriend = temp[i];
        console.log("New best friend", temp[i], currentDif);
      }
      currentCheck = 0;
    }
    console.log("Your best friend is:", bestFriend);
    
    temp.push(newUser);
    fs.writeFile(friendPath, JSON.stringify(temp), () => console.log("New User added"));
    res.json(bestFriend);
  });
  
}

module.exports = app => {
  app.get("/api/friends", (req, res) => res.sendFile(path.join(__dirname, "/../data/friends.js")));
  app.post("/api/friends", (req, res) => friendTest(req, res));
};

