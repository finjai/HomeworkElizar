var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
}

function multiplyNumeric(image) {
    for(var k in image) {
        if(typeof image[k] == 'number') {
            image[k]*=2;
        }
    }
    return console.log(image);
}

multiplyNumeric(image);

