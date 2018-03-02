const { expect } = require('chai');
const { Pokemon } = require('../classes/pokemon')

describe('Pokemon()', () => {
    it('Check that Pokemon has its own variety of properties', () => {
        const pikachu = new Pokemon();
        expect(pikachu.hasOwnProperty('name')).to.be.true;
        expect(pikachu.hasOwnProperty('health')).to.be.true;
        expect(pikachu.hasOwnProperty('move')).to.be.true;
    });
    it('Check that the default Pokemon has has no strengths and no weaknesses', () => {
        const pikachu = new Pokemon();
        expect(pikachu.type).to.equal('Normal');
    });
    it('Check that a Pokemon has the methods talk and useYourMoves available', () => {
        const pikachu = new Pokemon('Pikachu', 100, 'Electric', 'Pika', 'Thunder Bolt', 8);
        expect(pikachu.talk()).to.equal('Pika');
        expect(pikachu.useYourMoves()).to.equal('Pikachu uses his THUNDER BOLT!');
    });
});