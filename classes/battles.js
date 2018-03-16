const inquirer = require('inquirer')
const colour = require('colour')
const {exec} = require('child_process')
let player = require('play-sound')(opts = {})
let audio;
class Battles {
    constructor(trainer1, trainer2) {
        this.trainer2 = trainer2
        this.trainer1 = trainer1
    }

    fight() {

     audio = player.play('./mp3s/Battle-Music.mp3', function(err){
        if (err) throw err
        })
 
        let defender = this.trainer1.bagpack[0]
        let attacker = this.trainer2.bagpack[0]
        
        // introduction to game
        if (defender.health === 100 && attacker.health === 100) console.log(`${this.trainer1.name} releases ${defender.name}, ${this.trainer2.name} releases ${attacker.name}\n\n\n Let the battle begin!\n\n\n`)


        // attack questions
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
        
        // RECURSION: BATTLE
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
                audio.kill()
                audio = player.play('./mp3s/Victory-Theme.mp3', function(err){
                    if (err) throw err
                    })
                exec(`pokemon ${attacker.name}`)  
                console.log(`${defender.name} just FAINTED!`.red)
                console.log(`${attacker.talk().toUpperCase()}!!!`)
                console.log(`\n${attacker.name} Wins!`.green)
                
                return `${defender.name} just FAINTED!`
            }
            console.log(`${defender.name}'s health is now: ${defender.health}%\n`)
            exec(`pokemon ${defender.name}`)


            
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
                audio.kill()
                audio = player.play('./mp3s/Victory-Theme.mp3', function(err){
                    if (err) throw err
                    })
                exec(`pokemon ${defender.name}`)  
                console.log(`${attacker.name} just FAINTED!`.red)
                console.log(`${defender.talk().toUpperCase()}!!!`)
                console.log(`\n${defender.name} Wins!`.green) 
                
                return `${attacker.name} just FAINTED!`
    
            }
            console.log(`${attacker.name}'s health is now: ${attacker.health}%\n`)
            exec(`pokemon ${attacker.name}`) 
    
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