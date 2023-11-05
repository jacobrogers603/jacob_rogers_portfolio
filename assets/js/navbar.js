function toggleHamburgerIcon() {
    var hamburgerIcon = document.getElementById('hamburgerMenuIcon');
    if (hamburgerIcon.src.includes('hamburgerMenu.png')) {
        hamburgerIcon.src = 'assets/images/cancel_x_icon.png';
    } else {
        hamburgerIcon.src = 'assets/images/hamburgerMenu.png';
    }
}

