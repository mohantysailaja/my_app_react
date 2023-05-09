

//taking input and console 
 var btnTranslate = document.querySelector("#btn-translate");
var txtInput =document.querySelector("#txtapple")
console.log(txtInput)

function clickHandler(){
    console.log("cliked !!!!!!!");
    console.log("input",txtInput.value);
};
btnTranslate.addEventListener("click",clickHandler)
//w3schools
document.querySelector("#demo").innerHTML = "Hello World!";
document.querySelector("h3, h4").style.backgroundColor = "skyblue";