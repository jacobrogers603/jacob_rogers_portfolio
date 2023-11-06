function toggleHamburgerIcon() {
    var hamburgerIcon = document.getElementById('hamburgerMenuIcon');
    var auxiliaryNav = document.getElementById('auxiliaryNav');
    
    if (hamburgerIcon.src.includes('hamburgerMenu.png')) {
        hamburgerIcon.src = 'assets/images/cancel_x_icon.png';
        auxiliaryNav.style.opacity = "1";
        auxiliaryNav.style.pointerEvents = "auto"; // Make it interactive
    } else {
        hamburgerIcon.src = 'assets/images/hamburgerMenu.png';
        auxiliaryNav.style.opacity = "0";
        auxiliaryNav.style.pointerEvents = "none"; // Make it non-interactive
    }   
}
