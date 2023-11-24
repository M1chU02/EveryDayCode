document.addEventListener("DOMContentLoaded", function () {
  const dropArea = document.getElementById("dropArea");
  const fileInput = document.getElementById("fileInput");
  const preview = document.getElementById("preview");

  dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.classList.add("dragover");
  });

  dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("dragover");
  });

  dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    dropArea.classList.remove("dragover");
    const files = e.dataTransfer.files;
    handleFiles(files);
  });

  fileInput.addEventListener("change", () => {
    const files = fileInput.files;
    handleFiles(files);
  });

  function handleFiles(files) {
    for (const file of files) {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.onload = function (e) {
          const img = document.createElement("img");
          img.src = e.target.result;
          preview.innerHTML = "";
          preview.appendChild(img);
        };

        reader.readAsDataURL(file);
      }
    }
  }
});
