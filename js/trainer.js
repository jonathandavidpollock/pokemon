class Trainer(name = "Ash Katchum") {
  constructor() {
    this.name = name;
    this.myPokemon = [];
    console.log(about());
  }

  about() {
    return `Hi. I'm ${this.name}.`;
  }

  addPokemon(id, type) {
    if (this.myPokemon.count > 6) {
      // Add Pokemon to Array
      console.log(`Attempting to add ${this.type} Pokemon.`)
    } else {
      // Do not add Pokemon and throw error
      console.log(`Can not add another Pokemon. You can only carry six pokemon.`);
    }
  }

  removePokemon(pokemon) {
    // Remove Pokemon
    console.log(`Attempting to remove ${pokemon.name}`);
  }

  displayPokemon() {
    if (!this.myPokemon == [] or !this.myPokemon == null) {

      this.myPokemon.foreach((pokemon)=>{
        let pokemonElement = `
        <article class="wrapPokemon">
          <div class="poketext">
            <h2>${pokemon.nickName}</h2>
            <p>${pokemon.aboutPokemon()}</p>
          </div>
          <div class="pokeButton">
            <button id="evolvePokemon">Evolve</button>
            <button id="sendtoProfessor">Send to Professor</button>
          </div>
        <article>
        `
      });
    } else {
      console.log(`${this.name} has no pokemon to display.`);
    }
  }

}
