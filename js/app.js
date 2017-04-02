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

    const currentPlayer = new Trainer();
    console.log(currentPlayer.about());
    bag.innerHTML = `<div class="error" style="visibility:visible"><h2 style="color:#ffffff">Good Luck Trainers</h2><p style="padding-top:.5rem; color:#ffffff">You are allowed to catch 6 pokemon.</p></div>`;
    setTimeout(()=>bag.innerHTML = '', 4000);

    Appear();

    function Appear() {
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
                if (pokeElements) {
                    // Remove pokemon from pokemonAppears and display new one
                    sixpokemon.innerHTML = pokeElements;
                    pokemonAppears.innerHTML = '';
                    pokemonAppears.style.visibility = "hidden";
                    let evolvePressed = document.getElementById('evolvePokemon');
                    let sendtoProfessor = document.getElementById('sendtoProfessor');
                    if(evolvePressed) {
                      evolvePressed.addEventListener('click',(e)=>{
                        e.preventDefault();
                        console.log('User pressed evolve.')
                      });
                    }
                    if(sendtoProfessor) {
                      sendtoProfessor.addEventListener('click', (e)=> {
                        e.preventDefault();
                        console.log(`User pressed send to professor.`);
                      })
                    }
                    bag.innerHTML = `<h2>Your Bag</h2><div class="count" id="jsBagCount"></div>`;
                    let bagCount = document.getElementById('jsBagCount');
                    bagCount.innerHTML = `${currentPlayer.myPokemon.length} / 6`;
                    setTimeout(()=>pokemonAppears.style.visibility = "visible", Utility.randomNumber()*1000);
                    Appear();
                } else {
                    // Leave pokemon where it is and ask to remove one of the sixpokemon
                    error.innerHTML = `ERROR: You must delete one of your pokemon before you can catch anymore.`;
                    setTimeout(()=>error.style.visibility = "visible", 3000);
                }
            }
        });
    }

})();
