var colour = require('colour')
class Pokemon {
    constructor(name, health = 100, type = 'Normal', sound, move, attackDamage, moves = {}) {
        this.name = name;
        this.health = health;
        this.type = type;
        this.sound = sound;
        this.move = move;
        this.attackDamage = attackDamage;
        this.moves = moves

    }

    talk() {
        console.log(this.sound);
        return this.sound
    }

    useYourMove(move = this.move) {
        console.log(`${this.name} uses his ${move.toUpperCase()}!`)
        return `${this.name} uses his ${move.toUpperCase()}!`;
    }

    getMoves() {
        return this.moves;
    }
}

class Fire extends Pokemon {
    constructor(...args){
        super(...args)
        this.strength = 'Grass';
        this.weakness = 'Water';
    }
}

class Water extends Pokemon {
    constructor(...args){
        super(...args)
        this.strength = 'Fire';
        this.weakness = 'Grass';
    }
}

class Grass extends Pokemon {
    constructor(...args){
        super(...args)
        this.strength = 'Water';
        this.weakness = 'Fire';
    }
}

class Electric extends Pokemon {
    constructor(...args){
        super(...args)
        this.strength = '';
        this.weakness = '';
    }
}

class Flying extends Pokemon {
    constructor(...args){
        super(...args)
        this.strength = '';
        this.weakness = '';
    }
}

class Ground extends Pokemon {
    constructor(...args){
        super(...args)
        this.strength = '';
        this.weakness = '';
    }
}

class Psychic extends Pokemon {
    constructor(...args){
        super(...args)
        this.strength = '';
        this.weakness = '';
    }
}


module.exports = { Pokemon, Fire, Water, Grass, Electric, Psychic, Flying }