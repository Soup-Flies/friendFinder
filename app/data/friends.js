const names = ["Noah", "Liam", "William", "Mason", "James", "Benjamin", "Jacob", "Michael", "Elijah", "Ethan"];
const photos = ["http://www.rantlifestyle.com/wp-content/uploads/2015/03/Charles-Manson-mugshot.jpg","https://s-media-cache-ak0.pinimg.com/originals/63/c0/57/63c05718a2828089a8cd09fd0f82ccf6.jpg","http://www.rantlifestyle.com/wp-content/uploads/2015/03/John-Wayne-Gacy-mugshot.jpg","http://www.rantlifestyle.com/wp-content/uploads/2015/03/Ted-Bundy-mugshot.jpg", "http://media.galaxant.com/000/450/119/desktop-1453222749.png", "https://www.phactual.com/wp-content/uploads/2015/03/dahmer.jpeg", "http://i2.cdn.cnn.com/cnnnext/dam/assets/150512093949-47-seventies-timeline-0512-super-169.jpg", "http://media.gettyimages.com/photos/serial-killer-richard-ramirez-aka-the-night-stalker-in-his-mug-shot-picture-id170288701", "http://backgroundchecks.org/wp-content/uploads/2013/09/OTD-January-11-Henry-Lee-Lucas-jpg.jpg", "https://s-media-cache-ak0.pinimg.com/736x/fe/a3/ef/fea3efa780d4586ff18d6ebb4aacca1c--true-crime-human-being.jpg"];

const rand = function(num , off) {
   return Math.floor(Math.random() * num) + off;
};

const score = function() {
  const temp = [];
  for (let i = 0; i < 10; i++) {
    temp.push(rand(5, 1));
  }
  return temp;
};

const friend = function() {
  return {
  name: names[rand(10, 0)],
  photo: photos[rand(10, 0)],
  scores: score()
  };
};

const friends = function() {
  let temp = [];
  for (var i = 0; i < 10; i++) {
    temp.push(friend());
  }
  return temp;
};

console.log(friends());
module.exports = friends();
