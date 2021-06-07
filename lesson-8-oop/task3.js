'use strict';

function aclean(ana) {
    var m = [];

    for (var i = 0; i < ana.length; i++) {
        var sorted = ana[i].toLowerCase().split("").sort().join("");
        m[sorted] = ana[i];
    }

    return Object.values(m);
}

console.log(aclean(['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор']));







