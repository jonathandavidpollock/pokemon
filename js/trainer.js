class Trainer {
    constructor(name = "Ash Katchum") {
        this.name = name;
        this.myPokemon = [];
        this.myPokeballs = [];
    }

    getIndex(pokemonID) {
      let index;
      for (var i = 0; i < this.myPokemon.length; i++) {
        if (pokemonID == this.myPokemon[i]._pokeNumber) {
          index = i;
        }
      }
      return index;
    }

    about() {
        return `Hi. I'm ${this.name}.`;
    }

    addPokemon(pokemon) {
        if (this.myPokemon.length < 6) {
            // Add Pokemon to Array
            console.log(`Attempting to add Pokemon.`)
            this.myPokemon.push(pokemon);
            console.log(this.myPokemon);
            console.log(`${this.myPokemon.length} pokemon in your bag.`);
            return true;
        } else {
            // Do not add Pokemon and throw error
            console.log(this.myPokemon);
            console.log(`Can not add another Pokemon. You can only carry six pokemon.`);
            return false;
        }
    }

    displayPokemon() {
        console.log(`Inside display pokemon.`);
        console.log(this.myPokemon);
        var pokemonElement = ``;
        var myPokemon = this.myPokemon;
        if (!this.myPokemon == [] || !this.myPokemon == null) {
            for (var i = 0; i < myPokemon.length; i++) {
                pokemonElement += `
                    <article class="wrapPokemon" data-pokeNumber="${myPokemon[i]._pokeNumber}">
                      <div class="poketext">
                        <h2>${myPokemon[i].nickName}</h2>
                        <p>${myPokemon[i].aboutPokemon()}</p>
                      </div>
                      <div class="pokeButton">
                        <button id="evolvePokemon">Evolve</button>
                        <button id="sendtoProfessor">Send to Professor</button>
                      </div>
                    </article>
                    `;
                // Display Pokemon

                console.log(pokemonElement);
                return pokemonElement;
            }
        } else {
            console.log(`${this.name} has no pokemon to display.`);
            return null;
        }
    }

    removePokemon(pokemon) {
        // Remove Pokemon
        console.log(`Attempting to remove ${pokemon.name}`);
    }



}
