'use strict';

let arr = [-1, 2, 3, -9];
let arr2 = [2, -1, 2, 3, -9];
let arr3 = [-1, 2, 3, -9, 11];

function getMaxSubsum(arr) {
	let optimiseArray = [];
	let sum = 0;

	for (let i=0; i < arr.length; i++) {
		if (arr[i]>= 0) {
			sum += arr[i];
		}
	}
	return console.log(sum);
}

getMaxSubsum(arr);
getMaxSubsum(arr2);
getMaxSubsum(arr3);