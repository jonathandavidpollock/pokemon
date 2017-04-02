class GrassType extends Pokemon {
    constructor(caught, dv, av, nickName = "Bulbasaur") {
        super(caught, dv, av);
        this.name = "Bulbasuar";
        this.nickName = nickName;
        this.forms = ["Bulbasuar", "IvySaur", "Venosaur"];
        console.log(`Created a ${this.name}.`);
    }

    evolve(currentForm) {
        let evolutions = this.forms;
        let msg = "";
        switch (currentForm) {
            case (evolutions[0]):
                // Console Log evolving msg and return msg
                msg = `${evolutions[0]} is evolving into ${evolutions[1]}.`;
                console.log(msg);
                msg = `${evolutions[0]} evolved into ${evolutions[1]}.`;
                this.name = this.forms[1];
                console.log(msg);
                return msg;
            case (evolutions[1]):
                // Console Log evolving msg and return msg
                msg = `${evolutions[1]} is evolving into ${evolutions[2]}.`;
                console.log(msg);
                msg = `${evolutions[1]} evolved into ${evolutions[2]}.`;
                this.name = this.forms[2];
                console.log(msg);
                return msg;
            case (evolutions[2]):
                // Console Log evolving msg and return msg
                msg = `${evolutions[2]} is can not evolve.`;
                console.log(msg);
                return msg;
            default:
                msg = `This pokemon can not evolve.`;
                console.log(msg);
                return msg;
        }
    }

    canEvolve(currentForm) {
        let evolutions = this.forms;
        let msg = "";
        switch (currentForm) {
            case (evolutions[0]):
                // Console Log evolving msg and return msg
                msg = `${evolutions[0]} can evolve into ${evolutions[1]}. If you would like to evolve ${evolutions[0]}, press evolve.`;
                console.log(msg);
                return msg;
            case (evolutions[1]):
                // Console Log evolving msg and return msg
                msg = `${evolutions[1]} can evolve into ${evolutions[2]}, its final form.`;
                console.log(msg);
                return msg;
            case (evolutions[2]):
                // Console Log evolving msg and return msg
                msg = `${evolutions[2]} is at his final evolution.`;
                console.log(msg);
                return msg;
            default:
                msg = `This pokemon can not evolve.`;
                console.log(msg);
                return msg;
        }
    }

    aboutPokemon() {
        return `This pokemon is ${this.name}. It's attack value is ${this._attackValue} and
    defense value is ${this._defendValue}. ${this.canEvolve(this.name)} `
    }
}

GrassType.type = "Grass";
