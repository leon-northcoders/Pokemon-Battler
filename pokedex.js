const { Pokemon } = require('./classes/pokemon')


const pikachu = new Pokemon('Pikachu', 100, 'Electric', 'Pika', 'Thunder Bolt', 8);
const charmander = new Pokemon('Charmander', 100, 'Fire', 'Charmander', 'Ember', 7);

const pokeDex = {
    'Pikachu' : pikachu,
    'Charmander' : charmander
}