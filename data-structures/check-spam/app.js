'use strict';

function checkSpam(str) {
 let lowerStr = str.toLowerCase();
	if (~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx')) {
		return console.log(true);
	} else {
		return console.log(false);
	}
}

checkSpam('buy  viagra now');