// Function to make the filter drop down menu appear or hide.
function filterDropDownToggle() {
    var listOfLangs = document.getElementById('listOfLangs');

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
    switch(lang){
        case 'html':
            var htmlBox = document.getElementById('htmlBox');
            htmlBox.checked = !htmlBox.checked;
            break;
        case 'css':
            var cssBox = document.getElementById('cssBox');
            cssBox.checked = !cssBox.checked;
            break;
        case 'js':
            var jsBox = document.getElementById('jsBox');
            jsBox.checked = !jsBox.checked;
    }
}