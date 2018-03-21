'use strict';

function rle(value) {
	let cache = 1;
	let newString = "";
	for (let i=0; i<value.length; i++) {
		if (value[i]===value[i+1]) {
			cache++;

		} else {
			newString+=value[i];
			if (cache > 1) {
				newString += cache;
				cache=1;

			}


		}
	}
	return newString;
}


console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));