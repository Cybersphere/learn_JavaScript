'use strict';

let schedule = {};

function isEmpty(obj) {
	for (let key in obj) {
		return false;
	}
	return true;
}

console.log(isEmpty(schedule));

schedule["8:30"] = "подъём";

console.log(isEmpty(schedule));