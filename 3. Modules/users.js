const uuidv4 = require("uuid-v4");

const names = [
  "Leanne Graham",
  "Romaguera-Crona",
  "Ervin Howell",
  "Deckow-Crist",
  "Clementine Bauch",
  "Romaguera-Jacobson",
  "Patricia Lebsack",
  "Robel-Corkery",
  "Chelsey Dietrich",
  "Keebler LLC",
  "Mrs. Dennis Schulist",
  "Considine-Lockman",
  "Kurtis Weissnat",
  "Johns Group",
  "Nicholas Runolfsdottir V",
  "Abernathy Group",
  "Glenna Reichert",
  "Yost and Sons",
  "Clementina DuBuque",
  "Hoeger LLC"
];

function generateUser() {
  const name = names[(Math.random() * names.length) | 0];

  return {
    id: uuidv4.generate(),
    name: name
  };
}

module.exports = {
  generateUser: generateUser
};
