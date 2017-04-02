class Pokemon {
  constructor(caught=false, dv=10, av=10) {
    console.log("Instantiated a Pokemon.")
    this.caught = caught;
    this._defendValue = dv;
    this._attackValue = av;
    this._pokeNumber = Utility.generateUniqueNumber();
  }

  evolve(currentForm) {
    let message = "This pokemon can not evolve."
    console.log(message);
    return message;
  }
}
