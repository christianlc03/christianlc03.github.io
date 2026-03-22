const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');

menuBtn.addEventListener('click', () => {
    menuNav.style.display = menuNav.style.display === 'none' ? 'block' : 'none';
    menuBtn.querySelector('.menu-btn-icon').textContent = menuNav.style.display === 'none' ? '☰' : '✖';
});