const { expect } = require('chai');
const { Pokemon } = require('../classes/pokemon.js')
const { Trainer } = require('../classes/trainers.js')

describe.only('Trainer()', () => {
    it('Check that Pokemon has its own name property', () => {
        const leon = new Trainer();
        expect(leon.hasOwnProperty('name')).to.be.true;
    });
    it('Check that one Pokemon is added to trainers bagback', () => {
        const pikachu = new Pokemon('Pikachu', 100, 'Electric', 'Pika', 'Thunder Bolt', 8)
        const leon = new Trainer('Leon');
        leon.addToBagpack(pikachu);
        expect(leon.bagpack).to.eql({ '0': pikachu });
    });
    it('Check that multiple Pokemon are added to trainers bagback', () => {
        const pikachu = new Pokemon('Pikachu', 100, 'Electric', 'Pika', 'Thunder Bolt', 8);
        const charmander = new Pokemon('Charmander', 100, 'Fire', 'Charmander', 'Ember', 7);
        const leon = new Trainer('Leon');
        leon.addToBagpack(pikachu);
        leon.addToBagpack(charmander);

        expect(leon.bagpack).to.eql({ '0': pikachu, '1': charmander });
    });
    it('Check that bagpack caps at six Pokemon', () => {
        const pikachu = new Pokemon('Pikachu', 100, 'Electric', 'Pika', 'Thunder Bolt', 8);
        const charmander = new Pokemon('Charmander', 100, 'Fire', 'Charmander', 'Ember', 7);
        const dragonite = new Pokemon('Dragonite', 100, 'Flying', 'Dragonite', 'Inner Focus', 10);
        const squirtle = new Pokemon('Squirtle', 100, 'Water', 'Squirtle', 'Torrent', 7);
        const bulbasaur = new Pokemon('Bulbasaur', 100, 'Grass', 'Bulbasaur', 'Over Grow', 7);
        const mewTwo = new Pokemon('Mewtwo', 200, 'Psychic', 'Droid Noises', 'Pressure', 75)

        const leon = new Trainer('Leon');
        leon.addToBagpack(pikachu);
        leon.addToBagpack(charmander);
        leon.addToBagpack(squirtle);
        leon.addToBagpack(dragonite);
        leon.addToBagpack(bulbasaur);
        leon.addToBagpack(mewTwo);
        expect(leon.addToBagpack()).to.equal(`No more Pokemon allowed! Bagpack is full.`);
    });
    it('Check that remove method returns bag is empty message', () => {
        const pikachu = new Pokemon('Pikachu', 100, 'Electric', 'Pika', 'Thunder Bolt', 8);
        const leon = new Trainer('Leon');
        leon.addToBagpack(pikachu);
        expect(leon.removeFromBagpack()).to.equal('Bag is empty!');
    });
    it('Check that remove method removes Pokemon from bagpack', () => {
        const pikachu = new Pokemon('Pikachu', 100, 'Electric', 'Pika', 'Thunder Bolt', 8);
        const charmander = new Pokemon('Charmander', 100, 'Fire', 'Charmander', 'Ember', 7);
        const leon = new Trainer('Leon');
        leon.addToBagpack(pikachu);
        leon.addToBagpack(charmander);
        leon.removeFromBagpack()
        expect(leon.pokeCount).to.equal(1);
    });
    it('Check that catch method removes pokemon from one players bagpack and adds to opponents bagpack', () => {
        const pikachu = new Pokemon('Pikachu', 100, 'Electric', 'Pika', 'Thunder Bolt', 8);
        const charmander = new Pokemon('Charmander', 100, 'Fire', 'Charmander', 'Ember', 7);
        const leon = new Trainer('Leon');
        const oliver = new Trainer('Oliver');
        leon.addToBagpack(pikachu);
        oliver.addToBagpack(charmander);
        leon.catch(charmander)
        expect(oliver.pokeCount).to.equal(0);
        expect(leon.pokeCount).to.equal(2);
    });
});