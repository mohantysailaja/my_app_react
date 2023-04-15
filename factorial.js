function factorialNum(num){

    let result = 1;
if(num === 0 || num === 1){
    return result;
}else  {
    for(var i =num ;i >=1 ;i --){
    result = result * i;//*= i
    console.log(result);
  }
return result;
}
}
let num =4;
var result = factorialNum(num);
console.log("the factorial of 4 is " ,result);
