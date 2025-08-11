document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const navMenu = document.querySelector('header nav ul');

    //open menu
    menuIcon.addEventListener('click', () => {
        navMenu.style.display = 'flex';
        navMenu.classList.add('active');
        menuIcon.classList.add('active');
        closeIcon.classList.add('active');
    });

    // Close menu
    closeIcon.addEventListener('click', () => {
        navMenu.style.display = 'none';
        navMenu.classList.remove('active');
        menuIcon.classList.remove('active');
        closeIcon.classList.remove('active');
    });

    // Adjust menu state on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 600) {
            navMenu.style.display = 'flex';
            menuIcon.classList.remove('active');
            closeIcon.classList.remove('active');
        } else {
            navMenu.style.display = 'none';
            menuIcon.classList.remove('active');
            closeIcon.classList.remove('active');
        }
    });
});