var inquirer = require('inquirer')
const { Pokemon, Fire, Water, Grass } = require('../CORE-pokemon-battler/classes/pokemon')
const { Battles } = require('../CORE-pokemon-battler/classes/battles')
const { Trainer } = require('../CORE-pokemon-battler/classes/trainers')

let firstTrainer;
let secondTrainer;

function trainer1Name(trainer1){

   firstTrainer = new Trainer(trainer1.trainer1name);
   return;

};

function trainer2Name(trainer2){

    secondTrainer = new Trainer(trainer2.trainer2name);
    return;
 };

 function pickPokemon1(pokemon){
    const charmander = new Fire('Charmander', 100, 'Fire', 'Charmander', 'Ember', 7, {'Ember' : 4, 'Growl': 2, 'Dragon Rage': 6, 'FlameThrower': 5});
    const squirtle = new Water('Squirtle', 100, 'Water', 'Squirtle', 'Torrent', 7, {'Torrent' : 4, 'Growl': 2, 'Bubble': 6, 'Tackle': 5});
    const bulbasaur = new Grass('Bulbasaur', 100, 'Grass', 'Bulbasaur', 'Over Grow', 7,
    {'Over Grow' : 4, 'Growl': 2, 'Razor Leaf': 6, 'Vine Lash': 5});
    
    const pikachu = new Pokemon('Pikachu', 100, 'Electric', 'Pika', 'Thunder Bolt', 8);
    const dragonite = new Pokemon('Dragonite', 100, 'Flying', 'Dragonite', 'Inner Focus', 10)
    const mewTwo = new Pokemon('Mewtwo', 200, 'Psychic', 'Droid Noises', 'Pressure', 75)
    
    
    if(pokemon['Pokemon'] === "Charmander") firstTrainer.addToBagpack(charmander)
    if(pokemon['Pokemon'] === "Squirtle") firstTrainer.addToBagpack(squirtle)
    if(pokemon['Pokemon'] === "Bulbasaur") firstTrainer.addToBagpack(bulbasaur)
    // if(pokemon['Pokemon'] === "Pikachu") firstTrainer.addToBagpack(pikachu)
    // if(pokemon['Pokemon'] === "Dragonite") firstTrainer.addToBagpack(dragonite)
    // if(pokemon['Pokemon'] === "Mewtwo") firstTrainer.addToBagpack(mewTwo)
 }

 function pickPokemon2(pokemon){
    const charmander = new Fire('Charmander', 100, 'Fire', 'Charmander', 'Ember', 7, {'Ember' : 4, 'Growl': 2, 'Dragon Rage': 4, 'FlameThrower': 5});
    const squirtle = new Water('Squirtle', 100, 'Water', 'Squirtle', 'Torrent', 7, {'Torrent' : 4, 'Growl': 2, 'Bubble': 4, 'Tackle': 5});
    const bulbasaur = new Grass('Bulbasaur', 100, 'Grass', 'Bulbasaur', 'Over Grow', 7,
    {'Over Grow' : 4, 'Growl': 2, 'Razor Leaf': 4, 'Vine Lash': 5});
    
    const pikachu = new Pokemon('Pikachu', 100, 'Electric', 'Pika', 'Thunder Bolt', 8);
    const dragonite = new Pokemon('Dragonite', 100, 'Flying', 'Dragonite', 'Inner Focus', 10)
    const mewTwo = new Pokemon('Mewtwo', 200, 'Psychic', 'Droid Noises', 'Pressure', 75)

    
    if(pokemon['Pokemon'] === "Charmander") secondTrainer.addToBagpack(charmander)
    if(pokemon['Pokemon'] === "Squirtle") secondTrainer.addToBagpack(squirtle)
    if(pokemon['Pokemon'] === "Bulbasaur") secondTrainer.addToBagpack(bulbasaur)
    // if(pokemon['Pokemon'] === "Pikachu") secondTrainer.addToBagpack(pikachu)
    // if(pokemon['Pokemon'] === "Dragonite") secondTrainer.addToBagpack(dragonite)
    // if(pokemon['Pokemon'] === "Mewtwo") secondTrainer.addToBagpack(mewTwo)

 }

 function coinFlip(){
            
    // Clip a coin at the start to decide who attacks first
   (Math.random() <= 0.5) ? console.log(`Coin flipper, you are the defending trainer this time round!`) : console.log(`Coin flipper, you are the attacking trainer this time round!`) ;
  
}

let coinFlipQuestion = [
    {
        type: "list",
        name: "coinFlip",
        message: "Who's gonna go first?",
        choices: [
        "Flip a coin"
        ]
    }
]; 

let trainer1Question = [
    { 
        message: 'Defending trainer, what is your name?',
        type: 'input',
        name: 'trainer1name'
    }];

let trainer2Question = [
    { 
        message: 'Attacking trainer, what is your name?',
        type: 'input',
        name: 'trainer2name'
    }];    

let pokemonDecesion1 = [
    {
        type: "list",
        name: "Pokemon",
        message: "Which Pokemon would you like to use?",
        choices: [
        //   "Pikachu",
          "Charmander",
        //   "Dragonite",
          "Squirtle",
          "Bulbasaur",
        //   "Mewtwo"
         ]
    }
]; 
   
let pokemonDecesion2 = [
    {
        type: "list",
        name: "Pokemon",
        message: "Which Pokemon would you like to use?",
        choices: [
        //   "Pikachu",
          "Charmander",
        //   "Dragonite",
          "Squirtle",
          "Bulbasaur",
        //   "Mewtwo"
         ]
    }
];   
    
inquirer.prompt(coinFlipQuestion).then(coinFlip)
    .then(() => {
        return inquirer.prompt(trainer1Question).then(trainer1Name)    
    })
    .then(() => {
        return inquirer.prompt(pokemonDecesion1).then(pickPokemon1)    
    })
    .then(() => {
        return inquirer.prompt(trainer2Question).then(trainer2Name)
    })
    .then(() => {
        return inquirer.prompt(pokemonDecesion2).then(pickPokemon2)
    })
    .then(() => {
        const battle = new Battles(firstTrainer, secondTrainer);
        return battle.fight()
    })
    
    
    

// const secondTrainer = new Trainer(trainer2.trainer2name);

