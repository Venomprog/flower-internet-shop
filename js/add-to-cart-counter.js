"use strict";

document.addEventListener('DOMContentLoaded', () =>{


const minesBtn = document.querySelector('.btn-mines');
const plusBtn = document.querySelector('.btn-plus');
const countNum = document.querySelector('.count--number');
let count = 0;
countNum.innerHTML = '';
function renderCount(){
    if (count <= 0){
        count = 0;
    }
    countNum.innerHTML = `<div> ${count} </div>`;
}

minesBtn.addEventListener('click', () =>{
    count--;
    renderCount();
});
plusBtn.addEventListener('click', () =>{
    count++;
    renderCount();
});
















});