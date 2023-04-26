let x = 1;

if(x === 1 ){
    let x = 2;
    console.log(x);//output expected:2
}
console.log(x);//output expected:1
//for loop 

for(var i = 0; i<=10; i++)
{
    console.log("the number is :" + i);
}

/*code for printing in p id demo using html
let text = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = text;
*/

/*
//https://www.scaler.com/topics/javascript-let-keyword/
function print()
{
    let num = 12;
    document.write("Num inside the function= " + num);
}
print();
//Num inside the function = 12
document.write("Num outside the function = " + num); //Since num is outside scope so will not give any output.
*/
