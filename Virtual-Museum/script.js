let objectID = randomID(1, 485701);

const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}
`;
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    let title = data.title;
    let imgUrl = data.primaryImage;
    let author = data.artistDisplayName;
    let classification = data.classification;
    let date = data.objectDate;

    document.getElementById("title").innerText = title;
    document.getElementById(
      "image"
    ).innerHTML = `<img src=${imgUrl} alt="${title} image" />`;
    document.getElementById("author").innerText = author;
    document.getElementById("classification").innerText = classification;
    document.getElementById("date").innerText = date;
  });

function randomID(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
