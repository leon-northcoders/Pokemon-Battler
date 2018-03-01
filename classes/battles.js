function Battles(pokemon1, pokemon2) {
    
    Battles.prototype.fight = function(){
       if(pokemon1.health === 100 && pokemon2.health === 100) console.log(`${pokemon1.name} VS ${pokemon2.name}\n\n Let the battle begin!\n`)
        // base case
        if(pokemon1.health <= 0) {
            console.log(`${pokemon1.name} just FAINTED!`)
            console.log(`${pokemon2.name} Wins! ${pokemon2.talk().toUpperCase()}!!!`)
            return `${pokemon1.name} just FAINTED!`
    }        
        if(pokemon2.health <= 0) {
            console.log(`${pokemon2.name} just FAINTED!`)
            console.log(`${pokemon1.name} Wins! ${pokemon1.talk().toUpperCase()}!!!`)
            return `${pokemon2.name} just FAINTED!`
    }
        

        //recursive step
        if(pokemon1.type === 'Fire' && pokemon2.type === 'Grass') 
        pokemon1.attackDamage *= 0.75 
        else if(pokemon1.type === 'Fire' && pokemon2.type === 'Water') 
        pokemon2.attackDamage *= 1.25 

        if(pokemon1.type === 'Grass' && pokemon2.type === 'Water') 
        pokemon1.attackDamage *= 0.75 
        else if(pokemon1.type === 'Grass' && pokemon2.type === 'Fire') 
        pokemon2.attackDamage *= 1.25 

        if(pokemon1.type === 'Water' && pokemon2.type === 'Fire') 
        pokemon1.attackDamage *= 0.75 
        else if(pokemon1.type === 'Water' && pokemon2.type === 'Grass') 
        pokemon2.attackDamage *= 1.25 


        // // Random Critical Hit [will break tests, as expected]
        // let randomCritical = (Math.floor(Math.random() * 100))
        // if (randomCritical <= 30) pokemon1.attackDamage *= 3;
        // randomCritical = (Math.floor(Math.random() * 100))
        // if (randomCritical <= 30) pokemon2.attackDamage *= 3;

        pokemon1.health -= pokemon2.attackDamage;
        pokemon2.useYourMoves()
        console.log(`${pokemon1.name}'s health is now: ${pokemon1.health}\n`)
        pokemon2.health -= pokemon1.attackDamage;
        pokemon1.useYourMoves()
        console.log(`${pokemon2.name}'s health is now: ${pokemon2.health}\n`)



        return this.fight(pokemon1, pokemon2);
        }
}

module.exports = {Battles};