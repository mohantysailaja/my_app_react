
//input
//var username = prompt("Give me your username");

//processing
//var welcomemessage = "this scrips looks correct to me !!!" + username;

//output
//alert(welcomemessage);
//the above coe works fine !

//https://www.javascripttutorial.net/javascript-dom/javascript-events/
/*var btnclick =document.querySelector('#btnclick');
btnclick.addEventListener("click",function clickEventHandler(){
    console.log("clicked")
});
//error Cannot read properties of null (reading 'addEventListener')*/

//calling a function on button click to show your current date and time to primt on a paragraph and it worked for me !
function myFunction(){
 document.getElementById("demoprint").innerHTML = Date();
}
//myFunction();//this line gives me "Uncaught TypeError: Cannot set properties of null (setting 'innerHTML')" error so commented 

/*function funcCar(){
const car = {type:"Fiat", model:"500", color:"white"};
document.getElementById("printoperation").innerHTML = "The car type is " + car.type;
}*/
//math operation
/*function myFunctionOP(p1, p2) {
    return p1 * p2;
  }
  var result =myFunctionOP(4,3);
   document.getElementById("printoperation").innerHTML = result;*/

//https://codedamn.com/news/javascript/fixing-cannot-read-property-addeventlistener-of-null-error-in-javascript*/
/*const btnclick = document.querySelector("#btnclick");
// there is no anchor tag in our HTML file with id "no_link"

btnclick?.addEventListener('click', () => {
    alert('You visited the link')
});*/

/*var element = document.querySelector('.a');
element.addEventListener("click", 
    function (event) { 
        event.preventDefault(); // don't navigate away
        console.log('Ouch! Stop poking me!'); 
    }
);*/
//https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null/60798553#60798553