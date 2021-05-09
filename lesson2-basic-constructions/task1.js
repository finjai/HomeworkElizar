var M = [ 'а', 'о', 'и', 'ы', 'у', 'ю', 'я', 'э', 'е', 'ё' ];

var string = prompt("Введите строку");

var letter = 0;

var bool;

function countletter() {
    var b = string.toLowerCase().split('');

    for(var i = 0; i < b.length; i++) {
        for(var j = 0; j < 10; j++) {
            bool = b[i] === M[j];
            if(bool){
                letter++;
            }
        }
    }
    return(letter);
}

countletter();

console.log(`В строке ${letter} гласные(ых) букв(ы)`);
