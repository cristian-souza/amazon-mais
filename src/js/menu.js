document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');

    if (menuToggle && navigation) {
        menuToggle.addEventListener('click', function() {
            navigation.classList.toggle('active');
            const isExpanded = navigation.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }
});
