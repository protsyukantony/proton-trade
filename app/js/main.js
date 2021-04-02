const burger = document.querySelector('.header-burger');

if (burger) {
    const menu = document.querySelector('.header-menu');
    
    burger.addEventListener('click', function(e) {
        document.body.classList.toggle('lock');
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });
}