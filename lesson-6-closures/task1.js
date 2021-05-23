"use strict"

function sum(a) {
    return function (b) {
        console.log(a + b);
    }
}

sum(3)(3);
sum(-2)(-8);