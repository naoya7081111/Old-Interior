const btn = document.querySelector('.mobile-menu__btn');
const closeBtn = document.querySelector('.mobile-menu__close-btn');
const menu = document.querySelector('.mobile-menu');
const overray = document.querySelector('.mobile-menu__overray');
const els = [btn, closeBtn, menu, overray];

btn.addEventListener('click', () => {
    els.forEach((el) => {
        el.classList.toggle('menu-open');
    })
})

closeBtn.addEventListener('click', () => {
    els.forEach((el) => {
        el.classList.toggle('menu-open');
    })
})

overray.addEventListener('click', () => {
    els.forEach((el) => {
        el.classList.remove('menu-open');
    })
})