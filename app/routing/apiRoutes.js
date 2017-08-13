const path = require('path');
const fs = require('fs');

const friendTest = function(req, res) {
  let friendPath = path.join(__dirname, "/../data/friends.js");
  fs.readFile(friendPath, (err, data) => {
    if (err) throw err;
    let temp = JSON.parse(data);
    console.log(temp);
    temp.push(req.body);
    fs.writeFile(friendPath, JSON.stringify(temp), () => console.log("New User added"));
  });

  res.redirect("/");
}

module.exports = app => {
  app.get("/api/friends", (req, res) => res.sendFile(path.join(__dirname, "/../data/friends.js")));
  app.post("/api/friends", (req, res) => friendTest(req, res));
};

