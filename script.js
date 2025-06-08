document.addEventListener('DOMContentLoaded', () => {
    const botonMenu = document.getElementById('menu-hamburguesa');
    const nav = document.querySelector('nav');

    botonMenu.addEventListener('click', () => {
        nav.classList.toggle('nav-abierto');
    });
});