class Utility() {
  constructor() {

  }
  static randomPokemon() {
    let randomNumber = ~~((Math.random()*5)+1);
    console.log(randomNumber);
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

    // I found this generator on Stackoverflow to create GUIDS.
    // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    
    static generateUniquePokeNumber() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }

  }
}
