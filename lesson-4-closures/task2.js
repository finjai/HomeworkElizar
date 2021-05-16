var obj = {
    className: 'open menu'
};

function deleteClassName(obj, nameClass) {
    var count = 0;
    var newClassName = "";
    var arrayClass = obj.className.split(' ');
    for(var i = 0; i < arrayClass.length; i++) {
        if(nameClass !== arrayClass[i]) {
            count++;
            newClassName += arrayClass[i]+' ';
        }
    }
    if(count > 0) {
        newClassName = newClassName.slice(0,newClassName.length-1);
        delete obj.className;
        obj.className = newClassName;
    }
    return obj;
}

deleteClassName(obj, 'open');

console.log(obj);
