'use strict';

function filterRange(arr,a,b) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if ( arr[i] >= a && arr[i] <= b) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

let arr = [5, 4, 3, 8, 0];

let filtered = filterRange(arr,3,5);


console.log(filtered);