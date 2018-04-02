'use strict';

function addClass(obj, selector) {
	let classesArray = obj.className.split(' ');

	for (let i = 0; i < classesArray.length; i++) {
		if(classesArray[i] == selector) return;
	}

	classesArray.push(selector);
	obj.className = classesArray.join(' ');
	return console.log(obj.className);
}

let obj = {
	className: 'open menu'
};

addClass(obj, 'new');
addClass(obj, 'open');

