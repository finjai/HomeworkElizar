'use strict';

function isPal(str) {
    return (str.toLowerCase() === str.split('').reverse().join('').toLowerCase());
}

console.log(isPal('111111'));
console.log(isPal('Анна'));
console.log(isPal('Вася'));
