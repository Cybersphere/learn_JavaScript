'use strict';

function  removeClass(obj,cls) {
	let arr = obj.className.split(' ');

	for (let i=0; i< arr.length; i++) {
		if (arr[i] == cls) {
			arr.splice(i,1);
		}
	}
	obj.className = arr.join('');
	console.log(obj.className);
}


let obj = {
	className: 'open menu'
};


removeClass(obj,'open');