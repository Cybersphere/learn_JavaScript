'use strict';

let quest;
do {
	quest = +prompt('Введите число', '100');
} while (quest <= 100  && quest != null);
