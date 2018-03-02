class Pokemon {
    constructor(name, health = 100, type = 'Normal', sound, move, attackDamage) {
        this.name = name;
        this.health = health;
        this.type = type;
        this.sound = sound;
        this.move = move;
        this.attackDamage = attackDamage;

    }

    talk() {
        console.log(this.sound);
        return this.sound
    }

    useYourMoves() {
        console.log(`${this.name} uses his ${this.move.toUpperCase()}!`)
        return `${this.name} uses his ${this.move.toUpperCase()}!`;
    }
}


module.exports = { Pokemon }