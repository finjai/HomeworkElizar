'use strict';

var DrinkStorage = new tAJAXStorage();

document.getElementById('btn-1').addEventListener("click", function () {
    var nameDrink = prompt('Введите название напитка');
    var isAlco = prompt('Он алкогольный ? да : нет');
    var recipe = prompt('опишите рецепт');

    DrinkStorage.AddValue(nameDrink, [nameDrink, isAlco, recipe]);
});

document.getElementById('btn-2').addEventListener('click', function () {
    var nameDrink = prompt('Какой напиток ?');
    DrinkStorage.GetValue(nameDrink);
    document.querySelector('.inf_win').innerHTML = 'Напиток : ' + '\n' + DrinkStorage.GetValue(nameDrink);
});

document.getElementById('btn-3').addEventListener('click', function () {
    var nameDrink = prompt('Какой напиток удалить ?');
    DrinkStorage.DeleteValue(nameDrink);
    document.querySelector('.inf_win').innerHTML = 'Напиток ' + nameDrink + ' удален';
});

document.getElementById('btn-4').addEventListener('click', function () {
    document.querySelector('.inf_win').innerHTML = 'Напитки: ' + DrinkStorage.GetKeys();
})
