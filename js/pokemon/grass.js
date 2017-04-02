class GrassType(caught, dv, av, nickName = "Bulbasuar", pokeballNumber) {
  constructor() {
    super(caught, dv, av);
    this.name = "Bulbasuar";
    this.nickName = nickName;
    this.pokeNumber = pokeballNumber;
    this.forms = ["Bulbasuar","IvySaur", "Venosaur"];
  }

  evolve (currentForm) {
    let evolutions = this.forms;
    switch (currentForm) {
      case (evolutions[0]):
          // Console Log evolving message and return message
          let message = `${evolutions[0]} is evolving into ${evolutions[1]}.`;
          console.log(message);
          message = `${evolutions[0]} evolved into ${evolutions[1]}.`;
          console.log(message);
          return message;

      case (evolutions[1]):
          // Console Log evolving message and return message
          let message = `${evolutions[1]} is evolving into ${evolutions[2]}.`;
          console.log(message);
          message = `${evolutions[1]} evolved into ${evolutions[2]}.`;
          console.log(message);
          return message;
      case (evolutions[2]):
        // Console Log evolving message and return message
        let message =  `${evolutions[2]} is can not evolve.`;
        console.log(message);
        return message;
      default:
        let message = `This pokemon can not evolve.`;
        console.log(message);
        return message;
    }

aboutPokemon(pokemon) {
    return `This pokemon is ${this.name}. It's attack value is ${this.attackValue} and
    defense value is ${this.defenseValue}. ${this.evolve(pokemon)} `
  }
}

export default GrassType;
