'use strict';

function checkAge(age) {

	return (age>18) ?  true : concfirm('Родители разрешили?');
}

function checkAge(age) {

	return (age>18) || concfirm('Родители разрешили?');
}

