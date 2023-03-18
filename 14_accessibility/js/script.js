let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.header__list-link');

burger.addEventListener('click', function(){

  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');

});

menuLinks.forEach(function(element) {
  element.addEventListener('click', function() {

    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');

  })
});

let searchLine = document.querySelector('.serch-form');
let magnifier = document.querySelector('.header__serch-btn');
let closeBtn  = document.querySelector('.serch-form__closed');

magnifier.addEventListener('click', function() {

  searchLine.classList.toggle('serch-form--active');

});

closeBtn.addEventListener('click', function() {

  searchLine.classList.remove('serch-form--active');

});

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}'
  },
});

let tabsBtn = document.querySelectorAll('.tabs__btn');
let stap = document.querySelectorAll('.steps');

tabsBtn.forEach(function(element) {
  element.addEventListener('click', function(e) {

    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs__btn--active')});
    e.currentTarget.classList.add('tabs__btn--active');

    stap.forEach(function(element){ element.classList.remove('steps--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('steps--active');
  })
});

(() => {
  new Accordion(".accordion-container");
})();
