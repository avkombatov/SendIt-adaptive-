//Выпадающая информация doubts

let doubtsTop = document.querySelectorAll('.doubts__main');

for (item of doubtsTop) {
    item.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            for (el of doubtsTop) {
                el.classList.remove('active');
            }
            this.classList.add('active');
        }
    })
}

// СЛАЙДЕР brands

let leftShift = document.querySelector('.slider-prev');
let rightShift = document.querySelector('.slider-next');
let left = 0;
let right = 0;

rightShift.addEventListener('click', function () {
    let brandSlider = document.querySelector('.brands__slider');
    right = right - 94;
    if (right < -564) {
        right = 0;
    }
    brandSlider.style.right = right + 'px';
})

leftShift.addEventListener('click', function () {
    let brandSlider = document.querySelector('.brands__slider');
    right = right + 94;
    if (right > 0) {
        right = 0;
    }
    brandSlider.style.right = right + 'px';
})



//выпадающее меню на экране менее 768px

let headerMenu = document.querySelector('.header__menu');
let mobileImg = document.querySelector('.mobile__img');
let menuClose = document.querySelector('.menu__close');

mobileImg.addEventListener('click', function () { //открытие меню
    headerMenu.style.display = "block";
});
menuClose.addEventListener('click', function () { // закрытие меню
    headerMenu.style.display = "none";
});

window.addEventListener("resize", function () { // отслеживание размера экрана
    if (innerWidth <= 768) {
        mobileImg.addEventListener('click', function () {
            headerMenu.style.display = "block";
        });
    } else {
        headerMenu.style.display = "none";
    }
});