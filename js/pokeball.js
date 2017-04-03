class Pokeball {
  constructor() {
    this.containsPokemon = false;
    this.pokemonName = "No pokemon inside at this time.";
    this.pokeballNumber = Utility.generateUniqueNumber();

  }

  addPokemon(pokemon) {
    if (pokemon) {
      this.containsPokemon = true;
      this.pokemonNumber = pokemon._pokeNumber;
      this.pokemonName = pokemon.nickName;
    } else {
      console.log(`Could not add pokemon.`);
    }
  }
}
