var btnTranslate = document.querySelector("#btn-translate");
var txtInput =document.querySelector("#txtapple")
console.log(txtInput)

function clickHandler(){
    console.log("cliked !!!!!!!");
    console.log("input",txtInput.value);
};
btnTranslate.addEventListener("click",clickHandler)