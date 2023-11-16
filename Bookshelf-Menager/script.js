const booksData = JSON.parse(localStorage.getItem("books")) || [];

displayBooks();

function addBook() {
  const titleInput = document.getElementById("bookTitle");
  const title = titleInput.value.trim();

  if (title !== "") {
    const newBook = { title, read: false };
    booksData.push(newBook);
    saveBooks();
    displayBooks();
    titleInput.value = "";
  }
}

function removeBook(index) {
  booksData.splice(index, 1);
  saveBooks();
  displayBooks();
}

function toggleReadStatus(index) {
  booksData[index].read = !booksData[index].read;
  saveBooks();
  displayBooks();
}

function saveBooks() {
  localStorage.setItem("books", JSON.stringify(booksData));
}

function displayBooks() {
  const booksContainer = document.getElementById("books");
  booksContainer.innerHTML = "";

  if (booksData.length === 0) {
    booksContainer.innerHTML = "<p>No books in the bookshelf</p>";
  } else {
    booksData.forEach((book, index) => {
      const bookElement = document.createElement("div");
      bookElement.classList.add("book");
      bookElement.innerHTML = `
            <span>${book.title}</span>
            <button onclick="removeBook(${index})">Remove</button>
            <button onclick="toggleReadStatus(${index})">${
        book.read ? "Mark Unread" : "Mark Read"
      }</button>
          `;
      booksContainer.appendChild(bookElement);
    });
  }
}
