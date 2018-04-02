'use strict';

let arr = [];

while(true) {
	let value = +prompt('Введите число', 0);

	if (value == 0 || value == '') break;
	arr.push(value);
}

let sum  = 0;

for (let i = 0; i < arr.length; i++) {
	sum += arr[i];
}

alert(sum);

