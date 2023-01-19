"use strict";

const burgerBtn = document.querySelector('.burger__btn');
const nav = document.querySelector('.nav');
let countBurger = 0;


burgerBtn.addEventListener('click', () =>{
    renderMenu();
});


function renderMenu(){
    if (countBurger == 0){
        nav.classList.add('visible');
        burgerBtn.classList.add('active');
        countBurger++;
    } else {
        nav.classList.remove('visible');
        burgerBtn.classList.remove('active');

        countBurger--;
    }
}

















