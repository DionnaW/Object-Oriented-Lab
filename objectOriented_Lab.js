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
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
    //when i tried to run this there was no opuput and i need to know why
  }
};
adventurer.roll()
//this output said Robin rolled a 19, then 13, then 2, then 20