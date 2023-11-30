const elementsData = [
  { number: 1, symbol: "H", name: "Hydrogen", info: "Atomic number 1" },
  { number: 2, symbol: "He", name: "Helium", info: "Atomic number 2" },
  { number: 3, symbol: "Li", name: "Lithium", info: "Atomic number 3" },
  { number: 4, symbol: "Be", name: "Beryllium", info: "Atomic number 4" },
  { number: 5, symbol: "B", name: "Boron", info: "Atomic number 5" },
  { number: 6, symbol: "C", name: "Carbon", info: "Atomic number 6" },
  { number: 7, symbol: "N", name: "Nitrogen", info: "Atomic number 7" },
  { number: 8, symbol: "O", name: "Oxygen", info: "Atomic number 8" },
  { number: 9, symbol: "F", name: "Fluorine", info: "Atomic number 9" },
  { number: 10, symbol: "Ne", name: "Neon", info: "Atomic number 10" },
  { number: 11, symbol: "Na", name: "Sodium", info: "Atomic number 11" },
  { number: 12, symbol: "Mg", name: "Magnesium", info: "Atomic number 12" },
];

const periodicTableContainer = document.getElementById(
  "periodic-table-container"
);

elementsData.forEach((elementData) => {
  const element = document.createElement("div");
  element.classList.add("element");
  element.innerHTML = `<h3>${elementData.symbol}</h3>`;

  const elementInfo = document.createElement("div");
  elementInfo.classList.add("element-info");
  elementInfo.innerHTML = `<p>${elementData.name}<br>${elementData.info}</p>`;

  element.appendChild(elementInfo);

  periodicTableContainer.appendChild(element);
});
