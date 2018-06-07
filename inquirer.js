const inquirer = require('inquirer')
const player = require('play-sound')(opts = {})
const {exec} = require('child_process')
const { Pokemon, Fire, Water, Grass, Electric, Psychic, Flying } = require('./classes/pokemon')
const { Battles } = require('./classes/battles')
const { Trainer } = require('./classes/trainers')

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
    const charmander = new Fire('Charmander', 100, 'Fire', 'Charmander', 'Ember', 7, {'Ember' : 6, 'Growl': 4, 'Dragon Rage': 9, 'FlameThrower': 8});
    const squirtle = new Water('Squirtle', 100, 'Water', 'Squirtle', 'Torrent', 7, {'Torrent' : 6, 'Growl': 4, 'Bubble': 9, 'Tackle': 8});
    const bulbasaur = new Grass('Bulbasaur', 100, 'Grass', 'Bulbasaur', 'Over Grow', 7,
    {'Over Grow' : 6, 'Growl': 4, 'Razor Leaf': 9, 'Vine Lash': 7});
    
    const pikachu = new Electric('Pikachu', 100, 'Electric', 'Pika', 'Thunder Bolt', 8, {'Thunder Shock' : 6, 'Thunderbolt': 8, 'Agility': 1, 'Quick Attack': 4});
    const eevee = new Pokemon('Eevee', 100, '', 'Eevee', 'Captivate', 12, {'Charm' : 4, 'Captivate': 7, 'Flail': 6, 'Yawn': 3})
    const dragonite = new Flying('Dragonite', 100, 'Flying', 'Dragonite', 'Inner Focus', 10, {'Dragon tail' : 9, 'Outrage': 13, 'Hyperbeam': 11, 'Inner Focus': 10})
    const snorlax = new Pokemon('Snorlax', 100, '', 'zzZ', 'Body Slam', 7, {'Body Slam' : 16, 'Rest': 2, 'Snore': 1, 'Sleep Talk': 3})

    const mewTwo = new Psychic('Mewtwo', 200, 'Psychic', 'Droid Noises', 'Pressure', 75, {'Laser Focus' : 25, 'Psywave': 50, 'Confusion': 75, 'Pressure': 35})
    
    // console.log(pokemon) --> {Pokemon : "Charmander"}
    if(pokemon['Pokemon'] === "Charmander") firstTrainer.addToBagpack(charmander)
    if(pokemon['Pokemon'] === "Squirtle") firstTrainer.addToBagpack(squirtle)
    if(pokemon['Pokemon'] === "Bulbasaur") firstTrainer.addToBagpack(bulbasaur)
    if(pokemon['Pokemon'] === "Pikachu") firstTrainer.addToBagpack(pikachu)
    if(pokemon['Pokemon'] === "Eevee") firstTrainer.addToBagpack(eevee)
    if(pokemon['Pokemon'] === "Dragonite") firstTrainer.addToBagpack(dragonite)
    if(pokemon['Pokemon'] === "Snorlax") firstTrainer.addToBagpack(snorlax)

    if(pokemon['Pokemon'] === "Mewtwo") firstTrainer.addToBagpack(mewTwo)
    
    exec(`pokemon ${pokemon['Pokemon']}`)
    
 }

 function pickPokemon2(pokemon){
    const charmander = new Fire('Charmander', 100, 'Fire', 'Charmander', 'Ember', 7, {'Ember' : 6, 'Growl': 4, 'Dragon Rage': 9, 'FlameThrower': 8});
    const squirtle = new Water('Squirtle', 100, 'Water', 'Squirtle', 'Torrent', 7, {'Torrent' : 6, 'Growl': 4, 'Bubble': 9, 'Tackle': 8});
    const bulbasaur = new Grass('Bulbasaur', 100, 'Grass', 'Bulbasaur', 'Over Grow', 7,
    {'Over Grow' : 6, 'Growl': 4, 'Razor Leaf': 9, 'Vine Lash': 7});
    
    const pikachu = new Electric('Pikachu', 100, 'Electric', 'Pika', 'Thunder Bolt', 8, {'Thunder Shock' : 6, 'Thunderbolt': 8, 'Agility': 1, 'Quick Attack': 4});
    const eevee = new Pokemon('Eevee', 100, '', 'Eevee', 'Captivate', 12, {'Charm' : 4, 'Captivate': 7, 'Flail': 6, 'Yawn': 3})
    const dragonite = new Flying('Dragonite', 100, 'Flying', 'Dragonite', 'Inner Focus', 10, {'Dragon tail' : 9, 'Outrage': 13, 'Hyperbeam': 11, 'Inner Focus': 10})
    const snorlax = new Pokemon('Snorlax', 100, '', 'zzZ', 'Body Slam', 12, {'Body Slam' : 16, 'Rest': 2, 'Snore': 1, 'Sleep Talk': 3})

    const mewTwo = new Psychic('Mewtwo', 200, 'Psychic', 'Droid Noises', 'Pressure', 75, {'Laser Focus' : 25, 'Psywave': 50, 'Confusion': 75, 'Pressure': 35})

    
    if(pokemon['Pokemon'] === "Charmander") secondTrainer.addToBagpack(charmander)
    if(pokemon['Pokemon'] === "Squirtle") secondTrainer.addToBagpack(squirtle)
    if(pokemon['Pokemon'] === "Bulbasaur") secondTrainer.addToBagpack(bulbasaur)
    if(pokemon['Pokemon'] === "Pikachu") secondTrainer.addToBagpack(pikachu)
    if(pokemon['Pokemon'] === "Eevee") secondTrainer.addToBagpack(eevee)
    if(pokemon['Pokemon'] === "Dragonite") secondTrainer.addToBagpack(dragonite)
    if(pokemon['Pokemon'] === "Snorlax") secondTrainer.addToBagpack(snorlax)

    if(pokemon['Pokemon'] === "Mewtwo") secondTrainer.addToBagpack(mewTwo)

    exec(`pokemon ${pokemon['Pokemon']}`)

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
          "Charmander",
          "Squirtle",
          "Bulbasaur",
          "Pikachu",
          "Eevee",
          "Dragonite",
          "Snorlax",
          "Mewtwo"
         ]
    }
]; 
   
let pokemonDecesion2 = [
    {
        type: "list",
        name: "Pokemon",
        message: "Which Pokemon would you like to use?",
        choices: [
            "Charmander",
            "Squirtle",
            "Bulbasaur",
            "Pikachu",
            "Eevee",
            "Dragonite",
            "Snorlax",
            "Mewtwo"
         ]
    }
]; 

exec(`pokemon --clear`)

const audio = player.play('./mp3s/Opening-Theme.mp3', function(err){
    if (err) throw err
  })

console.log(`\n                                                                                 
                                                          @@@                                                
                                                        @@@                                                    
                   @@@@@@               @@@   @@       @           @@@@  @@@                                 
             @@@@@@@@@@@@@@@           @@@@  @@@@@    @@@@@@@     @@@@@ @@@@         @@@@@@                  
            @@@@@@@@@@@@@@@@@          @@@@@@@@@@   @@@   @@@     @@@@@ @@@@          @@@@@   @@@@@          
             @@@@@@@@@    @@@          %@@@@@@@    @@@   @@@  @@ @@@@@@@@@@@    @@@@   @@@@@  @@@@           
                 @@@@@@   @@@   @@@@@@  @@@@@      @@@@ @@@@@@@  @@@@@@@@@@@ @@@@@@@@@  @@@@ @@@@            
                 @@@@@  @@@  @@@@@@ @@ @@@@@@@@@  @@@@@@@@@@@    @@@@  @ @@@ @@@    @@@ @@@@ @@@@            
                  @@@@@@@@   @@@@    @@@ @@@  @@@@@@ @@@@@@      @@@@     @@ @@@@@@@@@@ @@@@@@@             
                   @@@@@@    @@@@@@@@@@  @@@     @@@@@@@         @@@      @@ @@@@@@@@@ @@ @@@@@              
                    @@@@@     @@@@@@@@  @@@@         @@@                  @@@        @@@@ @@@@@              
                     @@@@        @@                                                  @@@  @@@@               
                      @@@@                                                                @@@  \n\n\n`)
    

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
        audio.kill()
        const battle = new Battles(firstTrainer, secondTrainer);
        return battle.fight()
    })

