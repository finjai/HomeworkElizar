var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

var winerQ = tasksCompleted.Anna;
var winerName = "Anna";

for (var k in tasksCompleted) {
    if(tasksCompleted[k] > winerQ) {
      winerQ = tasksCompleted[k];
      winerName = k;
    }
}

console.log("Победил(а) " + winerName + " c количеством задач: " + winerQ);