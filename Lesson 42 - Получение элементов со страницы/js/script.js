'use strict';

const box = document.getElementById('box');
console.log(box);


const buttons = document.getElementsByTagName('button');
console.log(buttons[1]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
// console.log(hearts);

hearts.forEach(element => {
    console.log(element);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);