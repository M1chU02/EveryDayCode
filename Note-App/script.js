document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-button");
  addButton.addEventListener("click", addNote);

  loadNotes();

  function addNote() {
    const notesContainer = document.querySelector(".notes");
    const note = document.createElement("div");
    note.className = "note";

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.innerText = "Delete";

    const noteContent = document.createElement("div");
    noteContent.className = "note-content";
    noteContent.contentEditable = "true";
    noteContent.innerText = "Your note here...";

    const tagInput = document.createElement("input");
    tagInput.className = "tag-input";
    tagInput.type = "text";
    tagInput.placeholder = "Add tags";

    deleteButton.addEventListener("click", () => deleteNote(note));

    note.appendChild(deleteButton);
    note.appendChild(noteContent);
    note.appendChild(tagInput);
    notesContainer.appendChild(note);

    saveNotes();
  }

  function deleteNote(note) {
    note.remove();
    saveNotes();
  }

  function saveNotes() {
    const notes = [];
    const noteElements = document.querySelectorAll(".note");
    noteElements.forEach((noteElement) => {
      const noteContent =
        noteElement.querySelector(".note-content").textContent;
      const noteTags = noteElement.querySelector(".tag-input").value;
      notes.push({ content: noteContent, tags: noteTags });
    });
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  function loadNotes() {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      const notes = JSON.parse(storedNotes);
      notes.forEach((note) => {
        const notesContainer = document.querySelector(".notes");
        const newNote = document.createElement("div");
        newNote.className = "note";
        newNote.innerHTML = `
                    <button class="delete-button">Delete</button>
                    <div class="note-content" contenteditable="true">${note.content}</div>
                    <input class="tag-input" type="text" placeholder="Add tags" value="${note.tags}">
                `;
        newNote
          .querySelector(".delete-button")
          .addEventListener("click", () => deleteNote(newNote));
        notesContainer.appendChild(newNote);
      });
    }
  }
});
