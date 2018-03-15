class Battles {
    constructor(trainer1, trainer2) {
        this.trainer2 = trainer2
        this.trainer1 = trainer1
    }

    coinFlip(){
            let attacker;
            let defender;
             // Clip a coin at the start to decide who attacks first
            if (Math.random() <= 0.5) attacker = this.trainer2.bagpack[0] 
            else attacker = this.trainer2.bagpack[0];
            // console.log(Math.random())

            if (attacker === this.trainer1.bagpack[0]) defender = this.trainer2.bagpack[0] 
            else defender = this.trainer1.bagpack[0]
        }

    fight() {
        
        let defender = this.trainer1.bagpack[0]
        let attacker = this.trainer2.bagpack[0]

        // introduction to game
        if (defender.health === 100 && attacker.health === 100) console.log(`${this.trainer1.name} VS ${this.trainer2.name}\n${this.trainer1.name} releases ${defender.name}, ${this.trainer2.name} releases ${attacker.name}\n\n\n Let the battle begin!\n\n\n`)

        // game logic
        if (defender.type === 'Fire' && attacker.type === 'Grass')
            defender.attackDamage *= 0.75
        else if (defender.type === 'Fire' && attacker.type === 'Water')
            attacker.attackDamage *= 1.25

        if (defender.type === 'Grass' && attacker.type === 'Water')
            defender.attackDamage *= 0.75
        else if (defender.type === 'Grass' && attacker.type === 'Fire')
            attacker.attackDamage *= 1.25

        if (defender.type === 'Water' && attacker.type === 'Fire')
            defender.attackDamage *= 0.75
        else if (defender.type === 'Water' && attacker.type === 'Grass')
            attacker.attackDamage *= 1.25


        // // Random Critical Hit [will break tests, as expected, USE WITH CARE]
        // let randomCritical = (Math.floor(Math.random() * 100))
        // if (randomCritical <= 30) trainer1.attackDamage *= 3;
        // randomCritical = (Math.floor(Math.random() * 100))
        // if (randomCritical <= 30) trainer2.attackDamage *= 3;

        
        defender.health -= Math.round(attacker.attackDamage);
        attacker.useYourMoves()
        // base case for defender
        if (defender.health <= 0) {
            defender.health = 0
            console.log(`${defender.name} just FAINTED!`)
            console.log(`${attacker.name} Wins! ${attacker.talk().toUpperCase()}!!!`)
            return `${defender.name} just FAINTED!`
        }
        console.log(`${defender.name}'s health is now: ${defender.health}%\n`)


        attacker.health -= Math.round(defender.attackDamage);
        defender.useYourMoves()
        // base case for attacker
        if (attacker.health <= 0) {
            attacker.health = 0
            console.log(`${attacker.name} just FAINTED!`)
            console.log(`${defender.name} Wins! ${defender.talk().toUpperCase()}!!!`)
            return `${attacker.name} just FAINTED!`

        }
        console.log(`${attacker.name}'s health is now: ${attacker.health}%\n`)


        // recursive step
        return this.fight(defender, attacker);
    }
}

// const pikachu = new Pokemon('Pikachu', 100, 'Electric', 'Pika', 'Thunder Bolt', 8);
// const charmander = new Pokemon('Charmander', 100, 'Fire', 'Charmander', 'Ember', 7);
// const leon = new Trainer('Leon');
// leon.addToBagpack(pikachu)
// const oliver = new Trainer('Oliver');
// oliver.addToBagpack(charmander)
// const battle = new Battles(leon, oliver);
// battle.fight()

module.exports = { Battles };