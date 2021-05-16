var empthy = " ";
var sign = "#";
var newLine ="\n";
var St = "";

function stringMake(x,y) {
    for(var i = 1; i <= y; i++) {
        if (i % 2 !== 0) {
            for (var j = 1; j <= x; j++) {
                if (j % 2 == 0) {
                    St += empthy;
                } else {
                    St += sign;
                }
            }
        } else {
            for (var j = 1; j <= x; j++) {
                if (j % 2 == 0) {
                    St += sign;
                } else {
                    St += empthy;
                }
            }
        }
        St += newLine;
    }
    return St;
}

stringMake(6,6);

console.log(St);


