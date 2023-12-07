const url = "https://fish-species.p.rapidapi.com/fish_api/fishes";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "273f9d9d20mshaa12fd14ddae52cp1fc484jsn77e76e9a41ff",
    "X-RapidAPI-Host": "fish-species.p.rapidapi.com",
  },
};

try {
  fetch(url, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let randomId = randomID(1, 1104);
      let name = data[randomId].name;

      let imgUrl = data[randomId].img_src_set["2x"];

      let wikiUrl = data[randomId].url;

      document.getElementById("name").innerText = name;
      document.getElementById(
        "image"
      ).innerHTML = `<img src=${imgUrl} alt="${name} image" />`;
      document.getElementById("wikiBtn").addEventListener("click", () => {
        location.href = wikiUrl;
      });
    });
} catch (error) {
  console.error(error);
}

function randomID(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
