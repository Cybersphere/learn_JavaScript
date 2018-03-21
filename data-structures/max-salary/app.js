'use strict';

let salaries = {
	"Вася": 100,
	"Петя": 300,
	"Даша": 250
};

let maxSalari = 0;
let maxName = '';
for (let key in salaries) {
	if (maxSalari < salaries[key]) {
		maxSalari = salaries[key];
		maxName = key;
	}
}
console.log(maxName);