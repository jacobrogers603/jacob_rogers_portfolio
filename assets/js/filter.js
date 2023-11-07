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
    var htmlBoxAux = document.getElementById("htmlBoxAux");
    var htmlBox = document.getElementById("htmlBox");
    var cssBoxAux = document.getElementById("cssBoxAux");
    var cssBox = document.getElementById("cssBox");
    var jsBoxAux = document.getElementById("jsBoxAux");
    var jsBox = document.getElementById("jsBox");

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
  }

  var htmlUsed = false;
  var cssUsed = false;
  var jsUsed = false;

  if(htmlBox.checked){
    htmlUsed = true;
  }
  if(cssBox.checked){
    cssUsed = true;
  }
  if(jsBox.checked){
    jsUsed = true;
  }

  filterCards(htmlUsed, cssUsed, jsUsed);
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

// Filter the project cards based on the dropdown menu selections.
function filterCards(htmlUsed, cssUsed, jsUsed){
    console.log(htmlUsed, cssUsed, jsUsed);
    // Find the project grid.
    var projectGrid = document.getElementById('projectGrid');
    
    // Find all the cards and loop through them.
    var projects = projectGrid.getElementsByClassName('project');
    
    // Check if each card has at least one of the langs that are being used.
    // If it does not, set its display to none or something.
    for(var project of projects) {
        var safeFlag = false;
        
        var langsUsed = project.querySelector('.langsUsed');
        var langsUsedChildren = langsUsed.children;

        for(var lang of langsUsedChildren){
            if(lang.className === "htmlUsed" && htmlUsed === true){
                safeFlag = true;
                break;
            }
            if(lang.className === "cssUsed" && cssUsed === true){
                safeFlag = true;
                break;
            }
            if(lang.className === "jsUsed" && jsUsed === true){
                safeFlag = true;
                break;
            }
        }
        if(safeFlag === false){
            project.style.display = "none";
        }else{
            project.style.display = "flex";
        }
    }

}
