const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body;



// если на странице и бургер и меню
if (burger && menu) {  
    // слушетель событий по клику выполняется функция которая тоглит класс эктив(если нет добавлем, если есть убираем)
    burger.addEventListener('click', () => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        // блокирует скролл при открытом меню
        body.classList.toggle('_lock')
    })
}