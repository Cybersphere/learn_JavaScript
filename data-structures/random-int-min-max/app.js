'use strict';

function randomInteger(min,max) {
	let randomNumber = min + Math.random() * (max-min);
	randomNumber = Math.round(randomNumber);
	return console.log(randomNumber);
}

randomInteger(1,10);