
function getPoke() {

    let poke = document.querySelector("#pokemon-text").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                document.querySelector(".pokemon-name").innerHTML = "No se encontro";
                document.querySelector(".pokemon-image").src = "";
                throw 'some error text';
            }
        })
        .then((data) => {

            let img = data['sprites']['front_default'];
            let namePokemon = data['name'];
            const imgElement = document.querySelector(".pokemon-image");
            imgElement.src = img;
            const name = document.querySelector(".pokemon-name");
            name.innerHTML = namePokemon;
            document.querySelector("#pokemon-text").value = "";
        });
}


