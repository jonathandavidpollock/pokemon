(function() {
    console.log('Connected to App JS');

    // Find all ids and store to variable
    let pokemonAppears = document.getElementById('pokemonAppears');
    let catchForm = document.getElementById('catchForm');
    let bag = document.getElementById('bag');
    let sixpokemon = document.getElementById('sixpokemon');
    let submit = document.getElementById('catchPokemon');
    let nickName = document.getElementById('name');
    let error = document.getElementById('error');
    let welcome = document.getElementById('welcome');
    let congrats = document.getElementById('congrats');

    const currentPlayer = new Trainer();
    givePlayerPokeballs();

    function givePlayerPokeballs() {
      for (let i = 0; i < 12; i++) {
        let aBall = new Pokeball();
        currentPlayer.myPokeballs.push(aBall);
      }
      console.log("////////// Added 12 Pokeballs to trainer.")
    }

    console.log(currentPlayer.about());
    welcome.innerHTML = `<div><h2 style="color:#ffffff">Good Luck Trainers</h2><p style="padding-top:.5rem; color:#ffffff">You are allowed to catch 6 pokemon.</p></div>`;
    setTimeout(()=> {
      welcome.innerHTML = '';
      welcome.remove();
    }, 4000);

    appear();
    
    function appear() {
        if (currentPlayer.myPokemon.lenght >= 6) {
          displayInfo();
        }
        let wildPokemon = Utility.randomPokemon();
        pokemonAppears.innerHTML = `A wild ${wildPokemon.name} appeared. Catch it by giving ${wildPokemon.name} a nickName.`;
        submit.addEventListener("click", (e) => {
            e.preventDefault();
            if (nickName.value != null || nickName.value != "") {
                wildPokemon.nickName = Utility.toTitleCase(nickName.value);
                wildPokemon.caught = true;
                let successful = currentPlayer.addPokemon(wildPokemon);
                if (successful) {catchForm.reset();};
                let pokeElements = currentPlayer.displayPokemon();

                console.log(pokeElements);
                if (pokeElements) {
                    // Remove pokemon from pokemonAppears and display new one
                    sixpokemon.innerHTML = pokeElements;
                    pokemonAppears.innerHTML = '';
                    pokemonAppears.style.visibility = "hidden";
                    let evolvePressed = document.getElementById('evolvePokemon');
                    let sendtoProfessor = document.getElementById('sendtoProfessor');
                    //////////////// EVOLVE
                    if(evolvePressed) {
                      evolvePressed.addEventListener('click',(e)=>{
                        e.preventDefault();
                        console.log('User pressed evolve.');
                        let idx = currentPlayer.getIndex(e.srcElement.closest('article').getAttribute('data-pokeNumber'));
                        console.log(idx);
                        currentPlayer.myPokemon[idx].evolve(currentPlayer.myPokemon[idx].name);

                        console.log(currentPlayer.myPokemon);
                      });
                    }
                    //////////////// Send To Professor
                    if(sendtoProfessor) {
                      sendtoProfessor.addEventListener('click', (e)=> {
                        e.preventDefault();
                        console.log(`User pressed send to professor.`);
                        console.log(`${currentPlayer.myPokemon.length} in myPokemon.`)
                        let pokemonNumb = e.srcElement.closest('article').getAttribute('data-pokeNumber');
                        currentPlayer.myPokemon = currentPlayer.myPokemon.filter((e) => {
                           return  !e._pokeNumber == pokemonNumb;
                        });
                        console.log(`After removal, ${currentPlayer.myPokemon.length} in myPokemon.`)
                        console.log(currentPlayer.myPokemon);
                      })
                    }
                    bag.innerHTML = `<h2>Your Bag</h2><div class="count" id="jsBagCount"></div>`;
                    let bagCount = document.getElementById('jsBagCount');
                    bagCount.innerHTML = `${currentPlayer.myPokemon.length} <span class="b">/ 6</span>`;
                    setTimeout(()=>pokemonAppears.style.visibility = "visible", Utility.randomNumber()*1000);
                    appear();
                } else {
                    // Leave pokemon where it is and ask to remove one of the sixpokemon
                    error.innerHTML = `ERROR: You must delete one of your pokemon before you can catch anymore.`;
                    setTimeout(()=>error.style.visibility = "visible", 3000);
                }
            }
        });
    }

    function displayInfo() {
      congrats.innerHTML = `
      <div class="welcome">
        <h2>Congrats, ${currentPlayer.name} you have maxed out on pokemon and ${currentPlayer.myPokeballs.count} left.</h2>
        <h3>Here are your pokemon:</h3>
        <div class="pokemon">
        ${showPokemon()}
        </div>
      </div>
      `;
    }

    function showPokemon() {
      let pokes;
      for (var i = 0; i < currentPlayer.myPokemon.length; i++) {
        pokes += `<h4>Pokemon: ${currentPlayer.myPokemon[i].name}</h4>`;
        pokes += `<p>${currentPlayer.myPokemon[i].aboutPokemon()}</p>`;
      }

    }


})();
