document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById("fileInput");
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const filteredImage = document.getElementById("filteredImage");
  const download = document.getElementById("download");
  const brightnessSlider = document.getElementById("brightnessSlider");
  const brightnessValue = document.getElementById("brightnessValue");
  const contrastSlider = document.getElementById("contrastSlider");
  const contrastValue = document.getElementById("contrastValue");

  let image = new Image();
  let appliedFilters = [];

  fileInput.addEventListener("change", function (e) {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = function (e) {
        image.src = e.target.result;
        image.onload = applyFilter;
      };

      reader.readAsDataURL(selectedFile);
    }
  });

  document.getElementById("grayscale").addEventListener("click", function () {
    toggleFilter("grayscale(100%)");
  });

  document.getElementById("sepia").addEventListener("click", function () {
    toggleFilter("sepia(100%)");
  });

  document.getElementById("invert").addEventListener("click", function () {
    toggleFilter("invert(100%)");
  });

  document.getElementById("brightness").addEventListener("click", function () {
    const brightness = brightnessValue.value;
    toggleFilter(`brightness(${brightness}%)`);
  });

  brightnessSlider.addEventListener("input", function () {
    brightnessValue.value = brightnessSlider.value;
  });

  brightnessValue.addEventListener("input", function () {
    brightnessSlider.value = brightnessValue.value;
    const brightness = brightnessValue.value;
    toggleFilter(`brightness(${brightness}%)`);
  });

  document.getElementById("contrast").addEventListener("click", function () {
    const contrast = contrastValue.value;
    toggleFilter(`contrast(${contrast}%)`);
  });

  contrastSlider.addEventListener("input", function () {
    contrastValue.value = contrastSlider.value;
  });

  contrastValue.addEventListener("input", function () {
    contrastSlider.value = contrastValue.value;
    const contrast = contrastValue.value;
    toggleFilter(`contrast(${contrast}%)`);
  });

  document.getElementById("reset").addEventListener("click", function () {
    appliedFilters = [];
    applyFilter();
  });

  function toggleFilter(filter) {
    const filterIndex = appliedFilters.indexOf(filter);
    if (filterIndex === -1) {
      appliedFilters.push(filter);
    } else {
      appliedFilters.splice(filterIndex, 1);
    }
    applyFilter();
  }

  function applyFilter() {
    canvas.width = image.width;
    canvas.height = image.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.filter = appliedFilters.join(" ");
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    ctx.filter = "none";

    const filteredDataURL = canvas.toDataURL("image/jpeg");
    filteredImage.src = filteredDataURL;

    download.href = filteredImage.src;
    download.setAttribute("download", "filtered_image.jpg");
    download.style.display = "block";
  }
});
