var A = [];
var sum = 0;
var i = 0;
do {
    var x = prompt("Введите числа:");
    A.push(Number(x));
    i++;
} while((x != null)&&(x !="")) ;

for(i = 0; i < A.length; i++) {
    sum+= A[i];
}
alert(sum);


