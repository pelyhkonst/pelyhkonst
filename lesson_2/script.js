for (let i = 1; i < 10; i++){
    if (i == 6)
        continue;
    console.log(i)
}

let q = 1;
do{
    q++;
    if (q == 6)
        continue;
    console.log(q)
}
while (q < 10)


let w = 1;
while (w < 10){
    w++;
    if (w == 6)
        continue;
    console.log(w)
}

function calc(a,b) {
    return (a + b);
}

console.log(calc(2,3))

