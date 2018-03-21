'use strict';

nextValue:
for (let i = 2; i <=10; i++) {
	for (let j = 2; i <= 10; i++) {
		if ( i% j == 0 ) {
			continue nextValue;
		} else {
			console.log(i);
		}
	}
}