window.onload = function () {
  localStorage.clear();

  // Definitions
  var canvas = document.getElementById("paint-canvas");
  var context = canvas.getContext("2d");
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  var boundings = canvas.getBoundingClientRect();

  // Specifications
  var mouseX = 0;
  var mouseY = 0;
  context.strokeStyle = "black"; // initial brush color
  context.lineWidth = 1; // initial brush width
  var isDrawing = false;

  // Handle Colors
  var colors = document.getElementsByClassName("colors")[0];

  colors.addEventListener("click", function (event) {
    context.strokeStyle = event.target.value || "green";
  });

  // Handle Brushes
  var brushes = document.getElementsByClassName("brushes")[0];

  brushes.addEventListener("click", function (event) {
    context.lineWidth = event.target.value || 1;
  });

  // Mouse Down Event
  canvas.addEventListener("mousedown", function (event) {
    setMouseCoordinates(event);
    isDrawing = true;

    // Start Drawing
    context.beginPath();
    context.moveTo(mouseX, mouseY);
  });

  // Mouse Move Event
  canvas.addEventListener("mousemove", function (event) {
    setMouseCoordinates(event);

    if (isDrawing) {
      context.lineTo(mouseX, mouseY);
      context.stroke();
    }
  });

  // Mouse Up Event
  canvas.addEventListener("mouseup", function (event) {
    setMouseCoordinates(event);
    isDrawing = false;
  });

  // Handle Mouse Coordinates
  function setMouseCoordinates(event) {
    mouseX = event.clientX - boundings.left;
    mouseY = event.clientY - boundings.top;
  }

  // Handle Clear Button
  var clearButton = document.getElementById("clear");

  clearButton.addEventListener("click", function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  // Handle Save Button
  var saveButton = document.getElementById("save");

  saveButton.addEventListener("click", function () {
    var imageName = prompt("Please enter image name");
    var canvasDataURL = canvas.toDataURL();
    var a = document.createElement("a");
    a.href = canvasDataURL;
    a.download = imageName || "drawing";
    a.click();
  });

  // Handle Save Button
  var recognizeButton = document.getElementById("recognize");

  recognizeButton.addEventListener("click", function () {
    var canvasDataURL = canvas.toDataURL();
    $.ajax({
      type: "POST",
      url: "http://localhost:5000/api/doodle",
      data: {
        imgBase64: canvasDataURL,
      },
      success: function (data) {
        var result = JSON.parse(data);
        console.log(result);

        var appleCount = 0;
        var icecreamCount = 0;
        var anvilCount = 0;
        var airplaneCount = 0;

        for (var key in result) {
          console.log(key, result[key]);

          if (key == "apple") {
            appleCount = result[key];
          } else if ((key = "icecream")) {
            icecreamCount = result[key];
          } else if ((key = "airplane")) {
            airplaneCount = result[key];
          } else if ((key = "anvil")) {
            anvilCount = result[key];
          }
        }

        localStorage.setItem("apple", appleCount);
        localStorage.setItem("icecream", icecreamCount);
        localStorage.setItem("airplane", airplaneCount);
        localStorage.setItem("anvil", anvilCount);
      },
    }).done(function (o) {});
  });
};
