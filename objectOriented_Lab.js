const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "portion", "artifact"],

//this wont physically show anything in the terminal
// adventurer.inventory[0]

//for loop to log each iten in her inventory
// for (let i = 0; i < adventurer.inventory.length; i++) {
    // console.log(adventurer.inventory[i]);
// }

//adding a nested object loop (to the adventurer object) named companion
companion: {
    name: "Leo",
    type: "Cat",

//adding sub-object to Leo named belongings
belongings: {
    name: "Frank",
    type: "Flea",
    items: ["small hat", "sunglasses"]
    }
  }
};