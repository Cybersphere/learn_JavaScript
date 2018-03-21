'use strict';

function truncate(str, maxlength) {
	if (str.length > maxlength) {
		let newStr = str.slice(0, maxlength-3) + '...';
		return console.log(newStr);
	}
	return console.log(str);
}

truncate('dghasfafasfasfafasfasfasfasfaasfsa', 10);