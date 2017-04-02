class Utility {
  constructor() {

  }

  static randomNumber() {return ~~((Math.random()*4)+1);}

  static toTitleCase(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  static randomPokemon() {
    let randomNumber = ~~((Math.random()*4)+1);
    switch(randomNumber) {
      case 1:
        return new GrassType();
      case 2:
        return new WaterType();
      case 3:
        return new FireType();
      case 4:
        return new ElectricType();
      default:
        console.log(`Unable to get Random Pokemon.`);
    }
  }

    // I found this generator on Stackoverflow to create GUIDS.
    // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript

    static generateUniqueNumber() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }

}
