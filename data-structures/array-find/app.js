'use strict';

let arr = ["test", 2, 1.5, false];


function find(arr,value) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == value) {
			 return i;
		}
			return -1;
	}
}

console.log(find(arr, 1.5));;