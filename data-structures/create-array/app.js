'use strict';

let styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');

styles[styles.length-2] = 'Классика';

styles.shift();
styles.unshift('Рэп', 'Рэгги');

console.log(styles);