'use strict';

function camalize(str) {
	let arr = str.split('-');
	let newArr = [];
	console.log(arr);

	newArr.push(arr[0]);
	for (let i=1; i<arr.length; i++) {
		let word = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
		newArr.push(word);
	}
	return console.log(newArr.join(''));;

}



camalize('list-style-image');