'use strict';

function filterRangeInPlace(arr,a,b) {
	for (let i=0; i<arr.length; i++) {
		if (arr[i] < a ||  arr[i]> b) {
			arr.splice(i--,1);
		}
	}
}

let arr = [1,5,8,9,0,4,3,4,2];
filterRangeInPlace(arr,3,5);

console.log(arr);