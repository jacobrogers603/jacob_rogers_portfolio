function toggleHamburgerIcon() {
    var hamburgerIcon = document.getElementById('hamburgerMenuIcon');
    
    if (hamburgerIcon.src.includes('hamburgerMenu.png')) {
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

    hamburgerIcon.src = 'assets/images/hamburgerMenu.png';
    auxiliaryNav.style.opacity = "0";
    auxiliaryNav.style.pointerEvents = "none";
}

function auxiliaryNavInteractive() {
    var hamburgerIcon = document.getElementById('hamburgerMenuIcon');
    var auxiliaryNav = document.getElementById('auxiliaryNav');

    hamburgerIcon.src = 'assets/images/cancel_x_icon.png';
    auxiliaryNav.style.opacity = "1";
    auxiliaryNav.style.pointerEvents = "auto"; 
}