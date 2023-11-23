const generateBtn = document.getElementById("randomButton");
generateBtn.addEventListener("click", generate);

function getID(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const pokemonNameP = document.getElementById("pokemonName");
const pokemonImage = document.getElementById("pokemonImage");
const pokemonType = document.getElementById("pokemonType");

function generate() {
  pokemonNameP.innerText = "";
  pokemonImage.innerHTML = "";
  pokemonType.innerHTML = "";

  let id = getID(1, 151);

  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let name = data.forms[0].name;
      pokemonNameP.innerText = name;
      let src = data.sprites.front_default;
      pokemonImage.innerHTML = `<img src=${src} />`;

      let typeNum = data.types.length;
      let types = [];
      for (let i = 0; i < typeNum; i++) {
        types[i] = data.types[i].type.name;
      }
      for (let i = 0; i < types.length; i++) {
        pokemonType.innerHTML += `<p>${types[i]}</p>`;
      }
    });
}
generate();
