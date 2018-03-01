const {expect} = require('chai');
const {Pokemon} = require('../classes/pokemon.js')
const {Trainer} = require('../classes/trainers.js')

describe('Trainer()', () =>{
    it('Check that Pokemon has its own name property', () => {
        const leon = new Trainer();
        expect(leon.hasOwnProperty('name')).to.be.true;
    });
    it('Check that one Pokemon is added to trainers bagback', () => {
        const pikachu = new Pokemon('Pikachu', 100, 'Electric', 'Pika', 'Thunder Bolt', 8)
        const leon = new Trainer('Leon');
        leon.addToBagpack(pikachu);
        expect(leon.bagpack).to.eql({'Pikachu' : pikachu});
    });
    it('Check that multiple Pokemon are added to trainers bagback', () => {
        const pikachu = new Pokemon('Pikachu', 100, 'Electric', 'Pika', 'Thunder Bolt', 8);
        const charmander = new Pokemon('Charmander', 100, 'Fire', 'Charmander', 'Ember', 7);
        const leon = new Trainer('Leon');
        leon.addToBagpack(pikachu);
        leon.addToBagpack(charmander);
        
        expect(leon.bagpack).to.eql({'Pikachu' : pikachu, 'Charmander': charmander});
    });
    it('Check that bagpack caps at six Pokemon', () => {
        const pikachu = new Pokemon('Pikachu', 100, 'Electric', 'Pika', 'Thunder Bolt', 8);
        const charmander = new Pokemon('Charmander', 100, 'Fire', 'Charmander', 'Ember', 7);
        const dragonite = new Pokemon('Dragonite', 100, 'Flying', 'Dragonite', 'Inner Focus', 10);
        const squirtle = new Pokemon('Squirtle', 100, 'Water' , 'Squirtle', 'Torrent', 7);
        const bulbasaur = new Pokemon('Bulbasaur', 100, 'Grass', 'Bulbasaur', 'Over Grow', 7);
        const mewTwo = new Pokemon ('Mewtwo', 200, 'Psychic', 'Droid Noises', 'Pressure', 75)
        
        const leon = new Trainer('Leon');
        leon.addToBagpack(pikachu);
        leon.addToBagpack(charmander);
        leon.addToBagpack(squirtle);
        leon.addToBagpack(dragonite);
        leon.addToBagpack(bulbasaur);
        leon.addToBagpack(mewTwo);


        console.log(leon)
        
        expect(leon.addToBagpack()).to.equal(`No more Pokemon allowed! Bagpack is full.`);
    });
});