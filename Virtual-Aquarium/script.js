let selectedItemType = "fish";
let isDragging = false;
let selectedItem = null;

document.addEventListener("DOMContentLoaded", function () {
  const aquarium = document.getElementById("aquarium");

  aquarium.addEventListener("mousedown", function (event) {
    if (event.target.classList.contains(selectedItemType)) {
      isDragging = true;
      selectedItem = event.target;
    }
  });

  aquarium.addEventListener("mousemove", function (event) {
    if (isDragging && selectedItem) {
      const { offsetX, offsetY } = event;
      selectedItem.style.left = offsetX - selectedItem.clientWidth / 2 + "px";
      selectedItem.style.top = offsetY - selectedItem.clientHeight / 2 + "px";
    }
  });

  aquarium.addEventListener("mouseup", function () {
    isDragging = false;
    selectedItem = null;
  });

  aquarium.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    if (
      event.target.classList.contains("fish") ||
      event.target.classList.contains("plant") ||
      event.target.classList.contains("decoration")
    ) {
      event.target.remove();
    }
  });
});

function selectItem(type) {
  selectedItemType = type;
}

function addItemToAquarium(offsetX, offsetY) {
  const aquarium = document.getElementById("aquarium");
  const element = document.createElement("div");
  element.className = selectedItemType;
  element.style.left = offsetX - element.clientWidth / 2 + "px";
  element.style.top = offsetY - element.clientHeight / 2 + "px";
  aquarium.appendChild(element);
}

document.addEventListener("click", function (event) {
  const { offsetX, offsetY } = event;
  if (
    !event.target.classList.contains("fish") &&
    !event.target.classList.contains("plant") &&
    !event.target.classList.contains("decoration")
  ) {
    addItemToAquarium(offsetX, offsetY);
  }
});
