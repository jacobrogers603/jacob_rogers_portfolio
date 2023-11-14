function toggleHamburgerIcon() {
    console.log("touching ham icon");
    var hamburgerIcon = document.getElementById('hamburgerMenuIcon');
    
    if (hamburgerIcon.src.includes('hamburger_dilute.svg')) {
        auxiliaryNavInteractive();
    } else {
        auxiliaryNavNonInteractive();
    }   
}

window.addEventListener('resize', function(event) {
    var width = window.innerWidth;

    if(width > 414) {
        auxiliaryNavNonInteractive();
    }
});

function auxiliaryNavNonInteractive() {
    var hamburgerIcon = document.getElementById('hamburgerMenuIcon');
    var auxiliaryNav = document.getElementById('auxiliaryNav');
    var auxiliaryListOfLangs = document.getElementById('listOfLangsAux');

    hamburgerIcon.src = 'assets/images/hamburger_dilute.svg';
    auxiliaryNav.style.opacity = "0";
    auxiliaryNav.style.pointerEvents = "none";
    auxiliaryListOfLangs.style.opacity = "0";
    auxiliaryListOfLangs.style.pointerEvents = "none";
}

function auxiliaryNavInteractive() {
    var hamburgerIcon = document.getElementById('hamburgerMenuIcon');
    var auxiliaryNav = document.getElementById('auxiliaryNav');

    hamburgerIcon.src = 'assets/images/cancel_dilute.svg';
    auxiliaryNav.style.opacity = "1";
    auxiliaryNav.style.pointerEvents = "auto"; 
}