class ElectricType extends Pokemon {
    constructor(caught, dv, av, nickName = "Pikachu") {
        super(caught, dv, av);
        this.name = "Pikachu";
        this.nickName = nickName;
        this.forms = ["Pikachu", "Raichu"];
        console.log(`Created a ${this.name}.`);
    }

    evolve(currentForm) {
        let evolutions = this.forms;
        console.log(`This pokemon is a ${currentForm}`);
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

    canEvolve(currentForm) {
        console.log(`///////////////// START HERE`)
        let evolutions = this.forms;
        console.log(`This pokemon is a ${currentForm}`);
        console.log(`///////////////// END HERE`)
        let message = '';
        switch (currentForm) {
            case (evolutions[0]):
                message = `${evolutions[0]} can evolve into ${evolutions[1]}. If you would like to evolve ${evolutions[0]}, press evolve.`;
                console.log(message);
                return message;
            case (evolutions[1]):
                // Console Log evolving message and return message
                message = `${evolutions[1]} is at his final form.`;
                console.log(message);
                return message;
            default:
                message = `This pokemon can not evolve.`;
                console.log(message);
                return message;
        }
    }

    aboutPokemon() {
        return `This pokemon is ${this.name}. It's attack value is ${this._attackValue} and
          defense value is ${this._defendValue}. ${this.canEvolve(this.name)} `
    }
}

ElectricType.type = "Electric";
