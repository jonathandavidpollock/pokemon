(function(){
  console.log('Connected to App JS');
  // Find all ids and store to variable
  var pokemonAppears = document.getElementById('pokemonAppears');
  var catchForm = document.getElementById('catchForm');
  var bag = document.getElementById('bag');
  var sixpokemon = document.getElementById('sixpokemon');
  // Instantiate Player
  const currentPlayer = new Trainer();
  console.log(currentPlayer.about());
  // Instantiate new pokemon and display name
  const wildPokemon = new GrassType();
  pokemonAppears.innerHTML = `A wild ${wildPokemon.name} appeared. Catch it by completing the form below.`;
  bag.innerHTML = `
    <section class="bag" id="jsBag">
      <h2>Your Bag</h2>
      <div class="count" id="jsBagCount">3/6</div>
    </section>`
  sixpokemon.innerHTML = `
    <article class="wrapPokemon">
      <div class="poketext">
        <h2>Sparky</h2>
        <p>Sparky is an electric pokemon. His attack is 10 and his defense is ten. Sparky can evolve into 2 more types of pokemon.</p>
      </div>
      <div class="pokeButton">
        <button id="evolvePokemon">Evolve</button>
        <button id="sendtoProfessor">Send to Professor</button>
      </div>
    </article>
    <article class="wrapPokemon">
      <div class="poketext">
        <h2>Sparky</h2>
        <p>Sparky is an electric pokemon. His attack is 10 and his defense is ten. Sparky can evolve into 2 more types of pokemon.</p>
      </div>
      <div class="pokeButton">
        <button id="evolvePokemon">Evolve</button>
        <button id="sendtoProfessor">Send to Professor</button>
      </div>
    </article>
    <article class="wrapPokemon">
      <div class="poketext">
        <h2>Sparky</h2>
        <p>Sparky is an electric pokemon. His attack is 10 and his defense is ten. Sparky can evolve into 2 more types of pokemon.</p>
      </div>
      <div class="pokeButton">
        <button id="evolvePokemon">Evolve</button>
        <button id="sendtoProfessor">Send to Professor</button>
      </div>
    </article>
    <article class="wrapPokemon">
      <div class="poketext">
        <h2>Sparky</h2>
        <p>Sparky is an electric pokemon. His attack is 10 and his defense is ten. Sparky can evolve into 2 more types of pokemon.</p>
      </div>
      <div class="pokeButton">
        <button id="evolvePokemon">Evolve</button>
        <button id="sendtoProfessor">Send to Professor</button>
      </div>
    </article>
    `;



})();
