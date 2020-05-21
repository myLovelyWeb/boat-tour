'use strict';

let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--no-js');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

let linkFullCard = document.querySelector('.js-modalFullCard')
let modalFullCard = document.querySelector('.full-card');
let closeFullCard = modalFullCard.querySelector('.full-card__close-btn');

linkFullCard.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFullCard.classList.remove('visually-hidden');
});

closeFullCard.addEventListener('click', function() {
  modalFullCard.classList.add('visually-hidden');
});
