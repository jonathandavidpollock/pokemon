class GrassType extends Pokemon {
  constructor(caught, dv =10, av=10, nickName = "Bulbasuar") {
    super(caught, dv, av);
    this.name = "Bulbasuar";
    this.nickName = nickName;
    this.forms = ["Bulbasuar","IvySaur", "Venosaur"];
    console.log(`Created a ${this.name}.`);
  }

  evolve (currentForm) {
    let evolutions = this.forms;
    let msg = "";
    switch (currentForm) {
      case (evolutions[0]):
          // Console Log evolving msg and return msg
          msg = `${evolutions[0]} is evolving into ${evolutions[1]}.`;
          console.log(msg);
          msg = `${evolutions[0]} evolved into ${evolutions[1]}.`;
          console.log(msg);
          return msg;
      case (evolutions[1]):
          // Console Log evolving msg and return msg
          msg = `${evolutions[1]} is evolving into ${evolutions[2]}.`;
          console.log(msg);
          msg = `${evolutions[1]} evolved into ${evolutions[2]}.`;
          console.log(msg);
          return msg;
      case (evolutions[2]):
        // Console Log evolving msg and return msg
        msg =  `${evolutions[2]} is can not evolve.`;
        console.log(msg);
        return msg;
      default:
        msg = `This pokemon can not evolve.`;
        console.log(msg);
        return msg;
    }
  }

  aboutPokemon(pokemon) {
    return `This pokemon is ${this.name}. It's attack value is ${this.attackValue} and
    defense value is ${this.defenseValue}. ${this.evolve(pokemon)} `
  }
}
