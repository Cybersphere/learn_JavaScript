'use strict';

let salaries = {
	"Вася": 100,
	"Петя": 300,
	"Даша": 250
};
let sumSalaries = 0;

for (let key in salaries) {
	sumSalaries += salaries[key];
}

console.log(sumSalaries);