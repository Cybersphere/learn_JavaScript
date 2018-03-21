'use strict';

let str = '$120';

function extractCurrencyValue(str) {
	return console.log(+str.slice(1));
}

extractCurrencyValue(str);