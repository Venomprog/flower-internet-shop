"use strict";

document.addEventListener('DOMContentLoaded', () =>{
    
const burgerBtn = document.querySelector('.burger__btn');
const nav = document.querySelector('.nav');
const navList = document.querySelectorAll('.nav__item');
let countBurger = 0;

navList.forEach(item =>{
    item.addEventListener('click', () =>{
        renderMenu();
    });
});
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

});























