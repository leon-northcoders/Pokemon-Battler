const inquirer = require('inquirer')
const colour = require('colour')
class Battles {
    constructor(trainer1, trainer2) {
        this.trainer2 = trainer2
        this.trainer1 = trainer1
        // this.attacker = undefined
        // this.defender = undefined
    }

    fight() {
 
        let defender = this.trainer1.bagpack[0]
        let attacker = this.trainer2.bagpack[0]
        console.log(attacker.name)

        // introduction to game
        if (defender.health === 100 && attacker.health === 100) console.log(`${this.trainer1.name} releases ${defender.name}, ${this.trainer2.name} releases ${attacker.name}\n\n\n Let the battle begin!\n\n\n`)

        // game logic

    
        // if (defender.type === 'Fire' && attacker.type === 'Grass')
        //     defender.attackDamage *= 0.75
        // else if (defender.type === 'Fire' && attacker.type === 'Water')
        //     attacker.attackDamage *= 1.25

        // if (defender.type === 'Grass' && attacker.type === 'Water')
        //     defender.attackDamage *= 0.75
        // else if (defender.type === 'Grass' && attacker.type === 'Fire')
        //     attacker.attackDamage *= 1.25

        // if (defender.type === 'Water' && attacker.type === 'Fire')
        //     defender.attackDamage *= 0.75
        // else if (defender.type === 'Water' && attacker.type === 'Grass')
        //     attacker.attackDamage *= 1.25

        let attackMoves = attacker.getMoves()

        let chooseAttack1 = [
            {
                type: "list",
                name: "chooseAttack",
                message: "Choose Attack",
                choices: Object.keys(attackMoves)
            }
        ]; 

        let defenceMoves = defender.getMoves()

        let chooseAttack2 = [
            {
                type: "list",
                name: "chooseAttack",
                message: "Choose Attack",
                choices: Object.keys(defenceMoves)
            }
        ]; 

        function chooseAttackFunc(){

        // Strength vs weakness    
        if(defender.strength === attacker.type){
            attacker.attackDamage *= 0.75
        }
        else if(defender.weakness === attacker.type){
            attacker.attackDamage *= 1.25
        }
        
        //  Random Critical Hit [will break tests, as expected, USE WITH CARE]
        let randomCritical = (Math.floor(Math.random() * 100))
        
        inquirer.prompt(chooseAttack1).then(function(answers){
            if (randomCritical <= 20) {
            defender.health -= Math.round(attacker.attackDamage*2)
            console.log(`That was a CRITICAL hit`);
            }else {
                defender.health -= Math.round(attacker.attackDamage);
            }

            attacker.useYourMove(answers.chooseAttack)
            // base case for defender
            if (defender.health <= 0) {
                defender.health = 0
                console.log(`${defender.name} just FAINTED!`.red)
                console.log(`${attacker.name} Wins! ${attacker.talk().toUpperCase()}!!!`)
                return `${defender.name} just FAINTED!`
            }
            console.log(`${defender.name}'s health is now: ${defender.health}%\n`)
            

        inquirer.prompt(chooseAttack2).then(function(answers){   
            if (randomCritical <= 20) {
            attacker.health -= Math.round(defender.attackDamage*2);
            console.log(`That was a CRITICAL hit`);
            }else {
                attacker.health -= Math.round(defender.attackDamage)
            }
            defender.useYourMove(answers.chooseAttack)
            // base case for attacker
            if (attacker.health <= 0) {
                attacker.health = 0
                console.log(`${attacker.name} just FAINTED!`.red)
                console.log(`${defender.name} Wins! ${defender.talk().toUpperCase()}!!!`)
                return `${attacker.name} just FAINTED!`
    
            }
            console.log(`${attacker.name}'s health is now: ${attacker.health}%\n`)
    
    
            // recursive step
            return chooseAttackFunc(attacker, defender);
        })
        }) 
    }
        chooseAttackFunc();
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