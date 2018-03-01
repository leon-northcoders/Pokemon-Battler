const {expect} = require('chai');
const {Pokemon} = require('../classes/pokemon.js')
const {Battles} = require('../classes/battles.js')

describe.only('Battles()', () =>{
    it('Check that two Pokemon fight', () => {
        const pikachu = new Pokemon('Pikachu', 100, 'Electric', 'Pika', 'Thunder Bolt', 8);
        const charmander = new Pokemon('Charmander', 100, 'Fire', 'Charmander', 'Ember', 7);
        const battle = new Battles(pikachu, charmander);
        expect(battle.fight()).to.equal('Charmander just FAINTED!')
    });
    it('Check that health decreases every move in a Pokemon fight', () => {
        const pikachu = new Pokemon('Pikachu', 100, 'Electric', 'Pika', 'Thunder Bolt', 8);
        const charmander = new Pokemon('Charmander', 100, 'Fire', 'Charmander', 'Ember', 7);
        const battle = new Battles(pikachu, charmander);
        battle.fight()
        expect(charmander.health).to.equal(-4)
    });
    it('Check that the superior Pokemon wins', () => {
        const dragonite = new Pokemon('Dragonite', 100, 'Flying', 'Dragonite', 'Inner Focus', 10);
        const snorlax = new Pokemon('Snorlax', 100, '' , 'zzZ', 'Body Slam', 12);
        const battle = new Battles(dragonite, snorlax);
        expect(battle.fight()).to.equal('Dragonite just FAINTED!')
    });
    it('Check that the superior Pokemon wins', () => {
        const charmander = new Pokemon('Charmander', 100, 'Fire', 'Charmander', 'Ember', 7);
        const squirtle = new Pokemon('Squirtle', 100, 'Water' , 'Squirtle', 'Torrent', 7);
        const battle = new Battles(charmander, squirtle);
        expect(battle.fight()).to.equal('Charmander just FAINTED!')
    });
});