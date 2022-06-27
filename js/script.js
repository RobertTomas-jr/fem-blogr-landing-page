const closeBtn = document.querySelector('.menu-close');
const openBtn = document.querySelector('.menu-open');
const menuNav = document.querySelector('nav');

openBtn.addEventListener('click', () => {
        menuNav.classList.add('show');
        openBtn.style.display = 'none';
        closeBtn.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
        menuNav.classList.remove('show');
        openBtn.style.display = 'block';
        closeBtn.style.display = 'none';
})

