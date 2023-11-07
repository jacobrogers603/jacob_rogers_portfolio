// Function to make the filter drop down menu appear or hide.
function filterDropDownToggle(input) {
  var listOfLangs;
  if (input === "aux") {
    listOfLangs = document.getElementById("listOfLangsAux");
  } else {
    listOfLangs = document.getElementById("listOfLangs");
  }

  if (listOfLangs.style.opacity === "0" || listOfLangs.style.opacity === "") {
    listOfLangs.style.opacity = "1";
    listOfLangs.style.pointerEvents = "auto";
  } else {
    listOfLangs.style.opacity = "0";
    listOfLangs.style.pointerEvents = "none";
  }
}

// A function to check a checkbox if its parent container is clicked.
function optionSelected(lang) {
  switch (lang) {
    case "html":
      var htmlBoxAux = document.getElementById("htmlBoxAux");
      var htmlBox = document.getElementById("htmlBox");
      htmlBox.checked = !htmlBox.checked;
      htmlBoxAux.checked = !htmlBoxAux.checked;
      break;
    case "css":
      var cssBoxAux = document.getElementById("cssBoxAux");
      var cssBox = document.getElementById("cssBox");
      cssBox.checked = !cssBox.checked;
      cssBoxAux.checked = !cssBoxAux.checked;
      break;
    case "js":
      var jsBoxAux = document.getElementById("jsBoxAux");
      var jsBox = document.getElementById("jsBox");
      jsBox.checked = !jsBox.checked;
      jsBoxAux.checked = !jsBoxAux.checked;
      console.log(jsBoxAux.checked);
      break;
  }
}

// Close the filter drop down if the screen goes to mobile size.
window.addEventListener("resize", function (event) {
  var width = window.innerWidth;
  var listOfLangs = document.getElementById("listOfLangs");
  console.log(width);
  if (width < 415) {
    listOfLangs.style.opacity = "0";
    listOfLangs.style.pointerEvents = "none";
  }
});
