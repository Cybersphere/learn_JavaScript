'use strict';

let age = +prompt("Введите возраст", '');

if (age < 14 || age > 90) {
	alert('ok');
}

if (!(age >= 14 && age <= 90)) {
	alert('ок');
}

