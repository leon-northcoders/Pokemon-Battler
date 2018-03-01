function Trainer(name) {

    this.name = name;

    this.pokeCount = 0;
    this.bagpack = {};

    Trainer.prototype.catch = function(){
    
    }

    Trainer.prototype.addToBagpack = function(pokemon){ 
        console.log(this.pokeCount)
        if(this.pokeCount <= 5){
        this.bagpack[pokemon.name] = pokemon
        this.pokeCount++;
        }
        return `No more Pokemon allowed! Bagpack is full.`;
    }
}



module.exports = {Trainer}