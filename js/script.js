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


// filter dropdown

const filter = document.querySelector('.filter');


if (filter) {
    const items = filter.querySelectorAll('.block-filter')

    items.forEach(item => {
        item.addEventListener('click', event => {
            item.querySelector('.block-filter__dropdown').classList.toggle('_active')
            item.querySelector('.block-filter__icon').classList.toggle('_active')

            if(event.target.classList.contains('block-filter__item')) {
                item.querySelector('.block-filter__value').textContent = event.target.textContent;
            }
        })
    })
}