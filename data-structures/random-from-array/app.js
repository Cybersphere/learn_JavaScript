'use strict';

let arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
let min = 0;
let max = arr.length-1;
let rand = min + Math.floor(Math.random() * (max + 1 - min));

console.log(arr[rand]);