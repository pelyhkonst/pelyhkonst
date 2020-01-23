let x = prompt('Enter a value of x', '');
let n = prompt('Enter the power of the x', '');


function pow(x, n) {
   let res = x;

   for (let i = 1; i < n; i++){
       res *= x;
   }
   return res;
   console.log('получили ' + res);

}

















































