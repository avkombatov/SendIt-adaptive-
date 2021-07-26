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

document.querySelector('.slider-prev').onclick = sliderLeft;
let left = 0;

function sliderLeft() {
    let brandSlider = document.querySelector('.brands__slider');
    left = left - 94;
    brandSlider.style.left = left + 'px';

}