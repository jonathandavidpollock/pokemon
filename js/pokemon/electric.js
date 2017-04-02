class ElectricType extends Pokemon {
    constructor(caught, dv = 10, av = 10, nickName = "Pikachu") {
        super(caught, dv, av);
        this.name = "Pikachu";
        this.nickName = nickName;
        this.forms = ["Pikachu", "Raichu"];
        console.log(`Created a ${this.name}.`);
    }

    evolve(currentForm) {
        let evolutions = this.forms;
        let message = '';
        switch (currentForm) {
            case (evolutions[0]):
                // Console Log evolving message and return message
                message = `${evolutions[0]} is evolving into ${evolutions[1]}.`;
                console.log(message);
                message = `${evolutions[0]} evolved into ${evolutions[1]}.`;
                console.log(message);
                return message;
            case (evolutions[1]):
                // Console Log evolving message and return message
                message = `${evolutions[1]} can not evolve.`;
                console.log(message);
                return message;
            default:
                message = `This pokemon can not evolve.`;
                console.log(message);
                return message;
        }
    }

    aboutPokemon(pokemon) {
        return `This pokemon is ${this.name}. It's attack value is ${this.attackValue} and
    defense value is ${this.defenseValue}. ${this.evolve(pokemon)} `
    }
}
