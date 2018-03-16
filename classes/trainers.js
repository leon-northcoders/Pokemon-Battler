class Trainer {
    constructor(name) {

        this.name = name;
        this.pokeCount = 0;
        this.bagpack = {};
    }

    // this method will be called mid game
    catch(pokemon) {
        if (pokemon.health <= 15 && Math.floor(Math.random() * 100) <= 30) {
            
        }
        console.log()
    }

    removeFromBagpack() {
        if (this.pokeCount === 0) {
            console.log(`Bag is empty!`)
            return `Bag is empty!`
        }
        delete this.bagpack[this.pokeCount]
        this.pokeCount--

        if (this.pokeCount === 0) {
            console.log(`Bag is empty!`)
            return `Bag is empty!`
        }

    }

    addToBagpack(pokemon) {
        
        if (this.pokeCount <= 5) {
            this.bagpack[this.pokeCount] = pokemon
            this.pokeCount++;
        }
        return `No more Pokemon allowed! Bagpack is full.`;
    }
}


module.exports = { Trainer }