const canvas = document.getElementById("drawingCanvas");
const context = canvas.getContext("2d");
const colorInput = document.getElementById("color");
const brushSizeInput = document.getElementById("brushSize");
const clearButton = document.getElementById("clearButton");
const brushButton = document.getElementById("brushButton");
const eraserButton = document.getElementById("eraserButton");
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let eraserMode = false;

function startDrawing(e) {
  if (eraserMode) {
    context.globalCompositeOperation = "destination-out";
  } else {
    context.globalCompositeOperation = "source-over";
  }

  if (eraserMode) {
    context.lineWidth = brushSizeInput.value;
    context.strokeStyle = "white";
  } else {
    context.lineWidth = brushSizeInput.value;
    context.strokeStyle = colorInput.value;
  }

  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function stopDrawing() {
  isDrawing = false;
}

function draw(e) {
  if (!isDrawing) return;

  context.lineCap = "round";
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function toggleEraserMode() {
  eraserMode = !eraserMode;
  brushButton.classList.remove("active");
}

function toggleBrushMode() {
  eraserMode = false;
  brushButton.classList.add("active");
}

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);
clearButton.addEventListener("click", clearCanvas);
brushButton.addEventListener("click", toggleBrushMode);
eraserButton.addEventListener("click", toggleEraserMode);
