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

    // roll(mod = 0) {
        // const result = Math.floor(Math.random() * 20) + 1 + mod;
        // console.log(`${this.name} rolled a ${result}.`)
    // }
}
// 
// creating a new instance of the Character class to see what the roll would say; robin rolled 12
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
// console.log(robin);
// robin.companion.roll(); //robin had 8 & leo had 12
// robin.companion.companion.roll(); //robin had 9, leo 18, and frank 15

//PART 3 CLASS FEATURES
//extending a class, "child" inherits all paernt props
//create a Adventurer class
class Adventurer extends Character {
    constructor (name, role) {
        super(name);
        // Adventurers have specialized roles
        this.role = role;
        // every Adventurer starts with a bed and 50 gold coins
        this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them
    scout () {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}
//I get errors when i run all these codes below???
// const adventurer = new Adventurer("Robin", "Rogue");  //can't use adventurer, already defined
// adventurer.scout();  //same with adventurer and scout undefined
// super.roll();  //super is ubexpected
// console.log(scout);   //scout nor defined


//create a companion class with properties and methods specific to the companions

//PART 4 CLASS UNIFORMS
class Characters {
    static MAX_HEALTH = 100;

    constructor(name) {
        this.name = name;
        this.health = Character.MAX_HEALTH;
        this.inventory = [];
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.` );
    }
}

class Adventurers extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard", "Just Here"];

    constructor(name, role) {
        super(name);
        if (!ROLES.includes(role)) {
            console.log("Role doesn't exist.");
            throw new Error("Invalid role");
        }

        this.role = role;
        this.inventory.push("bedroll", "50 gold coins", "rain gear");
    }

    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}

// const adventurers = new Adventurer("Robin", "Fighter"); says can't redefine
// console.log(adventurer.scout);  //undefined
// console.log(`${this.name} is scouting ahead...`);   //undefined is scouting ahead

//PART 5 GATHER YOUR PARTY
//creat a healer adventurer
function createHealer(name) {
    return new Adventurer(name, "Healer");
}
// 
//output here was Leo rolled a 14, Frank rolled a 14, Adv Alice, health 100 inv..., role healer
const healer = createHealer("Alice");
// console.log(healer);
// 
//PART 6 DEVELOPING SKILLS
//create a duel for the both adventurers
duel(opponent); {

    while (this.health > 50 && opponent.health > 50) {
        const thisRoll = this.roll();
        const opponentRoll = opponent.roll();

        if (thisRoll > opponentRoll) {
            opponent.health -= 1;
        } else {
            this.health -= 1;
        }

        console.log(
            `${this.name} rolled ${thisRoll}`,
            `${opponent.name} rolled ${opponentRoll}`
            `${this.name} health: ${this.health}}`
            `${opponent.name} health ${opponent.health}`
        );
    }
    const winner = this.health > 50 ? this : opponent;
    console.log('The winner of the duel is ${winner.name}!'); 

     
}
const adventurer1 = new Adventurer("Adventurer 1", "Fighter");
const adventurer2 = new Adventurer("Adventurer 2", "Wizard");
adventurer1.duel(adventurer2);
console.log(roll);