var userName
var userSecondName;
var userThirdName;
var userAge;
var pension;

do {
    userName = prompt('Какое Ваше имя ?');
    if(!isNaN(userName)) {
        alert('Некорректнве данные, попробуйте еще раз');
    }
} while ((!isNaN(userName))||(userName == null));

do {
    userSecondName = prompt('Какая Ваша фамилия ?');
    if (!isNaN(userSecondName)) {
        alert('Некорректнве данные, попробуйте еще раз');
    }
} while ((!isNaN(userSecondName))||(userSecondName == null));

do {
    userThirdName = prompt('Какое Ваше отчество ?');
    if (!isNaN(userThirdName)) {
        alert('Было введено число, попробуйте еще раз');
    }
} while ((!isNaN(userThirdName))||(userThirdName == null));

do {
    userAge = prompt('Сколько Вам лет ?');
    userAge = Number(userAge);
    if (isNaN(userAge)) {
        alert('Введено не число, попробуйте еще раз');
    }
} while ((isNaN(userAge))||(userAge == null));

var userDay = userAge*365;
var userAfter5Year = userAge + 5;


var userSex = confirm('Ваш пол - мужской?');
userSex = (userSex===true)? 'мужской' : 'женский';
pension = (userAge>60)? 'да' : 'нет';


alert('Ваше ФИО:'+' '+userSecondName+' '+userName+' '+userThirdName + '\n' +
    'Ваш возраст в годах:' + ' ' + userAge + '\n' +
    'Ваш возраст в днях:' + ' ' + userDay + '\n' +
    'Через пять лет Вам будет:' + ' ' + userAfter5Year + '\n' +
    'Ваш пол:' + ' ' + userSex + '\n' +
    'Вы на пенсии:' + ' ' + pension
);