let list = document.querySelectorAll('.header_sliderbar-item');
function activeLink() {
    list.forEach((item) =>
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item)=>
item.addEventListener('click', activeLink));


// Menu Slider-Bar
let tongle = document.querySelector('.header_btn-toggle');
let sliderbar = document.querySelector('.header_sliderbar');
let main = document.querySelector('.main');

tongle.onclick = function() {
    sliderbar.classList.toggle('active')
    main.classList.toggle('active')
}

// Show SubBar
const sliderbarItems = document.querySelectorAll('.header_sliderbar-item');
const links = document.querySelectorAll('.header_sliderbar-item-link')
