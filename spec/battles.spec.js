const { expect } = require('chai');
const { Pokemon } = require('../classes/pokemon.js')
const { Battles } = require('../classes/battles.js')
const { Trainer } = require('../classes/trainers.js')

describe.only('Battles()', () => {
    it('Check that two Pokemon fight', () => {
        const pikachu = new Pokemon('Pikachu', 100, 'Electric', 'Pika', 'Thunder Bolt', 8);
        const charmander = new Pokemon('Charmander', 100, 'Fire', 'Charmander', 'Ember', 7);
        const leon = new Trainer('Leon');
        leon.addToBagpack(pikachu)
        const oliver = new Trainer('Oliver');
        oliver.addToBagpack(charmander)
        const battle = new Battles(leon, oliver);
        expect(battle.fight()).to.equal('Charmander just FAINTED!')
    });
    it('Check that health decreases every move in a Pokemon fight', () => {
        const pikachu = new Pokemon('Pikachu', 100, 'Electric', 'Pika', 'Thunder Bolt', 8);
        const charmander = new Pokemon('Charmander', 100, 'Fire', 'Charmander', 'Ember', 7);
        const leon = new Trainer('Leon');
        leon.addToBagpack(pikachu)
        const oliver = new Trainer('Oliver');
        oliver.addToBagpack(charmander)
        const battle = new Battles(leon, oliver);
        battle.fight()
        expect(charmander.health).to.equal(0)
    });
    it('Check that the superior Pokemon wins', () => {
        const dragonite = new Pokemon('Dragonite', 100, 'Flying', 'Dragonite', 'Inner Focus', 10);
        const snorlax = new Pokemon('Snorlax', 100, '', 'zzZ', 'Body Slam', 12);
        const leon = new Trainer('Leon');
        leon.addToBagpack(dragonite)
        const oliver = new Trainer('Oliver');
        oliver.addToBagpack(snorlax)
        const battle = new Battles(leon, oliver);
        expect(battle.fight()).to.equal('Dragonite just FAINTED!')
    });
    it('Check that the superior Fire, Water or Grass Pokemon wins', () => {
        const charmander = new Pokemon('Charmander', 100, 'Fire', 'Charmander', 'Ember', 7);
        const squirtle = new Pokemon('Squirtle', 100, 'Water', 'Squirtle', 'Torrent', 7);
        const leon = new Trainer('Leon');
        leon.addToBagpack(charmander)
        const oliver = new Trainer('Oliver');
        oliver.addToBagpack(squirtle)
        const battle = new Battles(leon, oliver);
        expect(battle.fight()).to.equal('Charmander just FAINTED!')
    });
    // it.only('Check that coin flip at the start of the game decides who attacks first (attacker)', () => {
    //     const charmander = new Pokemon('Charmander', 100, 'Fire', 'Charmander', 'Ember', 7);
    //     const squirtle = new Pokemon('Squirtle', 100, 'Water', 'Squirtle', 'Torrent', 7);
    //     const leon = new Trainer('Leon');
    //     leon.addToBagpack(charmander)
    //     const oliver = new Trainer('Oliver');
    //     oliver.addToBagpack(squirtle)
    //     const battle = new Battles(leon, oliver);
    //     battle.coinFlip()
    //     expect(battle.fight()).to.equal('Charmander just FAINTED!')
    // });
});