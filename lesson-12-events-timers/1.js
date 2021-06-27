"use strict";

var wrap = document.getElementById('wrapper');
var wrapCenterX = wrap.offsetLeft + wrap.offsetWidth / 2; // узнаем центр DIV по X
var wrapCenterY = wrap.offsetTop + wrap.offsetHeight / 2 // узнаем центр DIV по Y
var wrapChildElemForDigitalWatch = document.createElement("div"); // создаем DIV для электронных часов
var radius = 120; // радиус (растояние)
var radiusForDigitalWatch = 70; // радиус (растояние) для электронных часов
var angleValue = 0; // угол
var distanceOfDigits = 30; // расстояние в градусах между цифрами на часах
var time = new Date(); //текущее время
var elemForArrowHours = document.createElement("div"); // создаем DIV для стрелки часов
var elemForArrowMinutes = document.createElement("div"); // создаем DIV для стрелки минут
var elemForArrowSeconds = document.createElement("div"); // создаем DIV для стрелки секунд
var hoursDeg = 30 * (time.getHours() + (1 / 60) * time.getMinutes()); //определяем по времени где должна быть стрелка часов
var minutesDeg = 6 * (time.getMinutes() + (1 / 60) * time.getSeconds()); //определяем по времени где должна быть стрелка минут
var secondsDeg = 6 * time.getSeconds() - 6; //определяем по времени где должна быть стрелка секунд


for (var i = 1; i <= 12; i++) {
    var wrapChildElem = document.createElement("div"),
        angle,
        wrapChildElemCenterX,
        wrapChildElemCenterY;

    angleValue += distanceOfDigits;
    angle = angleValue / 180 * Math.PI;

    wrapChildElem = wrap.appendChild(wrapChildElem);
    wrapChildElem.classList.add('childElem');
    wrapChildElem.innerHTML = i;

    wrapChildElemCenterX = wrapCenterX + radius * Math.sin(angle); // узнаем центр дочерного элемента по X
    wrapChildElemCenterY = wrapCenterY - radius * Math.cos(angle); // узнаем центр дочерного элемента по Y

    wrapChildElem.style.left = Math.round(wrapChildElemCenterX - wrapChildElem.offsetWidth/2) + "px";
    wrapChildElem.style.top = Math.round(wrapChildElemCenterY - wrapChildElem.offsetHeight/2) + "px";
}

// вставляем созданные элементы в конец дочерных элементов wrap(обвёртки)
wrapChildElemForDigitalWatch = wrap.appendChild(wrapChildElemForDigitalWatch);
elemForArrowHours = wrap.appendChild(elemForArrowHours);
elemForArrowMinutes = wrap.appendChild(elemForArrowMinutes);
elemForArrowSeconds = wrap.appendChild(elemForArrowSeconds);

// устанавливаем класс для электронных часов и к каждой стрелке
wrapChildElemForDigitalWatch.classList.add("childElemForDigitalWatch");
elemForArrowHours.classList.add("elemForArrowHours");
elemForArrowMinutes.classList.add("elemForArrowMinutes");
elemForArrowSeconds.classList.add("elemForArrowSeconds");

// определяем где будет стоять электронные часы
wrapChildElemForDigitalWatch.style.left = wrapCenterX - wrapChildElemForDigitalWatch.offsetWidth/2 + "px";
wrapChildElemForDigitalWatch.style.top = wrapCenterY - radiusForDigitalWatch + "px";
// определяем где будет стоять стрелка часа
elemForArrowHours.style.top = wrapCenterY - elemForArrowHours.offsetHeight+10 + "px";
elemForArrowHours.style.left = wrapCenterX - elemForArrowHours.offsetWidth/2 + "px";
// определяем где будет стоять стрелка минут
elemForArrowMinutes.style.top = wrapCenterY - elemForArrowMinutes.offsetHeight+10 + "px";
elemForArrowMinutes.style.left = wrapCenterX - elemForArrowMinutes.offsetWidth/2 + "px";
// определяем где будет стоять стрелка секунд
elemForArrowSeconds.style.top = wrapCenterY - elemForArrowSeconds.offsetHeight+10 + "px";
elemForArrowSeconds.style.left = wrapCenterX - elemForArrowSeconds.offsetWidth/2 + "px";

// определяем точку трансформации стрелок часов, минут, секунд по оси X и Y
elemForArrowHours.style.transformOrigin = "center 50px";
elemForArrowMinutes.style.transformOrigin = "center 110px";
elemForArrowSeconds.style.transformOrigin = "center 115px";

// функция для определения положение электронных часов и стрелок для часов, минут, секунд
function arrows() {
    var time = new Date();
    wrapChildElemForDigitalWatch.innerHTML = time.toLocaleTimeString();

    secondsDeg += 6;
    elemForArrowSeconds.style.transform = "rotate(" + secondsDeg + "deg)";

    minutesDeg += 6 * (1/60);
    elemForArrowMinutes.style.transform = "rotate(" + minutesDeg + "deg)";

    hoursDeg += 6 * (1/360);
    elemForArrowHours.style.transform = "rotate(" + hoursDeg + "deg)";
}

arrows();
window.setInterval (arrows, 1000);