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

leftShift.addEventListener('click', function () {
    let brandSlider = document.querySelector('.brands__slider');
    left = left - 94;
    if (left < -564) {
        left = 0;
    }
    brandSlider.style.left = left + 'px';
})

rightShift.addEventListener('click', function () {
    let brandSlider = document.querySelector('.brands__slider');
    left = left + 94;
    if (left > 0) {
        left = 0;
    }
    brandSlider.style.left = left + 'px';
})