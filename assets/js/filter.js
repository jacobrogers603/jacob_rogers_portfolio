window.onload = function () {
  var htmlBoxAux = document.getElementById("htmlBoxAux");
  var htmlBox = document.getElementById("htmlBox");
  var cssBoxAux = document.getElementById("cssBoxAux");
  var cssBox = document.getElementById("cssBox");
  var jsBoxAux = document.getElementById("jsBoxAux");
  var jsBox = document.getElementById("jsBox");
  var nextJsBox = document.getElementById("nextJsBox");
  var nextJsBoxAux = document.getElementById("nextJsBoxAux");
  var reactBox = document.getElementById("reactBox");
  var reactBoxAux = document.getElementById("reactBoxAux");
  var databaseBox = document.getElementById("databaseBox");
  var databaseBoxAux = document.getElementById("databaseBoxAux");
  var authBox = document.getElementById("authBox");
  var authBoxAux = document.getElementById("authBoxAux");
  var tsBox = document.getElementById("tsBox");
  var tsBoxAux = document.getElementById("tsBoxAux");
  var tailwindBox = document.getElementById("tailwindBox");
  var tailwindBoxAux = document.getElementById("tailwindBoxAux");

  htmlBoxAux.checked = true;
  htmlBox.checked = true;
  cssBoxAux.checked = true;
  cssBox.checked = true;
  jsBoxAux.checked = true;
  jsBox.checked = true;
  nextJsBox.checked = true;
  nextJsBoxAux.checked = true;
  reactBox.checked = true;
  reactBoxAux.checked = true;
  databaseBox.checked = true;
  databaseBoxAux.checked = true;
  authBox.checked = true;
  authBoxAux.checked = true;
  tsBox.checked = true;
  tsBoxAux.checked = true;
  tailwindBox.checked = true;
  tailwindBoxAux.checked = true;
};

// Function to make the filter drop down menu appear or hide.
function filterDropDownToggle(input) {
  var listOfLangs;
  var listButtonChevron;
  if (input === "aux") {
    listOfLangs = document.getElementById("listOfLangsAux");
    listButtonChevron = document.getElementById("listButtonChevronAux");
  } else {
    listOfLangs = document.getElementById("listOfLangs");
    listButtonChevron = document.getElementById("listButtonChevron");
  }

  if (listOfLangs.style.opacity === "0" || listOfLangs.style.opacity === "") {
    listOfLangs.style.opacity = "1";
    listOfLangs.style.pointerEvents = "auto";
    listButtonChevron.src = "assets/images/chevron_up.png";
  } else {
    listOfLangs.style.opacity = "0";
    listOfLangs.style.pointerEvents = "none";
    listButtonChevron.src = "assets/images/chevron_down.png";
  }
}

// A function to check a checkbox if its parent container is clicked.
function optionSelected(lang) {
  var htmlBoxAux = document.getElementById("htmlBoxAux");
  var htmlBox = document.getElementById("htmlBox");
  var cssBoxAux = document.getElementById("cssBoxAux");
  var cssBox = document.getElementById("cssBox");
  var jsBoxAux = document.getElementById("jsBoxAux");
  var jsBox = document.getElementById("jsBox");
  var nextJsBoxAux = document.getElementById("nextJsBoxAux");
  var nextJsBox = document.getElementById("nextJsBox");
  var reactBoxAux = document.getElementById("reactBoxAux");
  var reactBox = document.getElementById("reactBox");
  var databaseBoxAux = document.getElementById("databaseBoxAux");
  var databaseBox = document.getElementById("databaseBox");
  var authBoxAux = document.getElementById("authBoxAux");
  var authBox = document.getElementById("authBox");
  var tsBoxAux = document.getElementById("tsBoxAux");
  var tsBox = document.getElementById("tsBox");
  var tailwindBox = document.getElementById("tailwindBox");
  var tailwindBoxAux = document.getElementById("tailwindBoxAux");

  switch (lang) {
    case "html":
      htmlBox.checked = !htmlBox.checked;
      htmlBoxAux.checked = !htmlBoxAux.checked;
      break;
    case "css":
      cssBox.checked = !cssBox.checked;
      cssBoxAux.checked = !cssBoxAux.checked;
      break;
    case "js":
      jsBox.checked = !jsBox.checked;
      jsBoxAux.checked = !jsBoxAux.checked;
      break;
    case "nextJs":
      nextJsBox.checked = !nextJsBox.checked;
      nextJsBoxAux.checked = !nextJsBoxAux.checked;
      break;
    case "react":
      reactBox.checked = !reactBox.checked;
      reactBoxAux.checked = !reactBoxAux.checked;
      break;
    case "database":
      databaseBox.checked = !databaseBox.checked;
      databaseBoxAux.checked = !databaseBoxAux.checked;
      break;
    case "auth":
      authBox.checked = !authBox.checked;
      authBoxAux.checked = !authBoxAux.checked;
      break;
    case "ts":
      tsBox.checked = !tsBox.checked;
      tsBoxAux.checked = !tsBoxAux.checked;
      break;
    case "tailwind":
      tailwindBox.checked = !tailwindBox.checked;
      tailwindBoxAux.checked = !tailwindBoxAux.checked;
      break;
  }

  var htmlUsed = false;
  var cssUsed = false;
  var jsUsed = false;
  var nextJsUsed = false;
  var reactUsed = false;
  var databaseUsed = false;
  var authUsed = false;
  var tsUsed = false;
  var tailwindUsed = false;

  if (htmlBox.checked) {
    htmlUsed = true;
  }
  if (cssBox.checked) {
    cssUsed = true;
  }
  if (jsBox.checked) {
    jsUsed = true;
  }
  if (nextJsBox.checked) {
    nextJsUsed = true;
  }
  if (reactBox.checked) {
    reactUsed = true;
  }
  if (databaseBox.checked) {
    databaseUsed = true;
  }
  if (authBox.checked) {
    authUsed = true;
  }
  if (tsBox.checked) {
    tsUsed = true;
  }
  if (tailwindBox.checked) {
    tailwindUsed = true;
  }

  filterCards(
    htmlUsed,
    cssUsed,
    jsUsed,
    nextJsUsed,
    reactUsed,
    databaseUsed,
    authUsed,
    tsUsed,
    tailwindUsed
  );
}

// Close the filter drop down if the screen goes to mobile size.
window.addEventListener("resize", function (event) {
  var width = window.innerWidth;
  var listOfLangs = document.getElementById("listOfLangs");

  if (width < 415) {
    listOfLangs.style.opacity = "0";
    listOfLangs.style.pointerEvents = "none";
  }
});

function filterCards(htmlUsed, cssUsed, jsUsed, nextJsUsed, reactUsed, databaseUsed, authUsed, tsUsed, tailwindUsed) {
  // Find the project grid.
  var projectGrid = document.getElementById("projectGrid");

  // Find all the cards and loop through them.
  var projects = projectGrid.getElementsByClassName("project");

  // Check if each card has at least one of the langs that are being used.
  // If it does not, set its display to none or something.
  for (var project of projects) {
    var safeFlag = false;

    var langsUsed = project.querySelector(".langsUsed");
    var langsUsedChildren = langsUsed.children;

    // Loop through all the languages checkboxes and check if any of them is used.
    for (var lang of langsUsedChildren) {
      if (
        (lang.className === "htmlUsed" && htmlUsed === true) ||
        (lang.className === "cssUsed" && cssUsed === true) ||
        (lang.className === "jsUsed" && jsUsed === true) ||
        (lang.className === "nextJsUsed" && nextJsUsed === true) ||
        (lang.className === "reactUsed" && reactUsed === true) ||
        (lang.className === "databaseUsed" && databaseUsed === true) ||
        (lang.className === "authUsed" && authUsed === true) ||
        (lang.className === "tsUsed" && tsUsed === true) ||
        (lang.className === "tailwindUsed" && tailwindUsed === true)
      ) {
        safeFlag = true;
        break;
      }
    }

    if (safeFlag === false) {
      project.style.display = "none";
    } else {
      project.style.display = "flex";
    }
  }
}
