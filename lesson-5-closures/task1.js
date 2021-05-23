"use strict"
var john = {
    sumBill: [],
    tip: [],
    bill: [124, 48, 268, 180, 42],
    calcTip: function () {
        for(var i = 0; i < this.bill.length; i++){
            if(this.bill[i] < 50) {
                this.tip[i] = this.bill[i]*0.2;
            } else if((this.bill[i] >= 50)&&(this.bill[i] <= 200)) {
                this.tip[i] = this.bill[i]*0.15;
            } else if(this.bill[i] >200) {
                this.tip[i] = this.bill[i]*0.1;
            }
            this.sumBill[i] = this.bill[i] + this.tip[i];
        }
    }
};

var mark = {
    sumBill: [],
    tip: [],
    bill: [77, 375, 110, 45],
    calcTip: function () {
        for(var i = 0; i < this.bill.length; i++){
            if(this.bill[i] < 100) {
                this.tip[i] = this.bill[i]*0.2;
            } else if((this.bill[i] >= 100)&&(this.bill[i] <= 300)) {
                this.tip[i] = this.bill[i]*0.1;
            } else if(this.bill[i] >200) {
                this.tip[i] = this.bill[i]*0.25;
            }
            this.sumBill[i] = this.bill[i] + this.tip[i];
        }
    }
};

function averageValue (object) {
    var sumTip = 0;
    for(var i = 0; i < object.tip.length; i++) {
        sumTip += object.tip[i];
    }
    return sumTip/object.tip.length;
}

mark.calcTip();
john.calcTip();

averageValue(john) > averageValue(mark)?console.log("Семья Jonh платит в среднем чаевых больше, что составляет  "+averageValue(john)):
    console.log("Cемья Mark платит в сднем чаевых больше, что составляет  "+averageValue(mark));


