let object = {
    width: 1024,
    height: 1690,
    name: 'rectangle',

};

console.log(object)

object.bool = true;

object.colors = {
    border: 'red',
    background: 'black'
}



for (let key in object){
    console.log("Ключ - " + key + ', и его значение - ' + object[key])
}

console.log(Object.keys(object).length);


let arr = ['one','two','three','four','five']

arr.forEach(function (item, i, mass) {
    console.log('сначала item: ' + item + ', затем i: ' + i + ' и наконец mass: ' + mass );
})

console.log(arr.length)