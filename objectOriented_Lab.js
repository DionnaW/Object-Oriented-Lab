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

//PART 2 CLASS FANTASY

//creating a character class and giving it the roll method
class Character {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

//creating a new instance of the Character class to see what the roll would say; robin rolled 12
// const adventurer = new Character("Robin");
// adventurer.roll();

//re-creating Robin using the Character class 
const robin = new Character("Robin");
robin.inventory = ["sword", "portions", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

//checking some companion rolls
console.log(robin);
robin.companion.roll(); //robin had 8 & leo had 12
robin.companion.companion.roll(); //robin had 9, leo 18, and frank 15

//PART 3 CLASS FEATURES
//extending a class, "child" inherits all paernt props
//create a Adventurer class
class Adventurer extends Character {
    constructor (name, role) {
        super(name);
        //Adventurers have specialized roles
        this.role = role;
        //every Adventurer starts with a bed and 50 gold coins
        this.inventory.push("bedroll", "50 gold coins");
    }
    //Adventurers have the ability to scout ahead of them
    scout () {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}

//creat a companion class with properties and methods specific to the companions

