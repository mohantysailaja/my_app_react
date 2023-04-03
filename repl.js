 
 //node install
 //npm install --save readline-sync
 
 readlineSync = require('readline-sync');
var questionOne = "Am I older than 25 ?";
var answerOne = "yes";
  
var questionTwo = "Am I from city Bangalore?";
var answerTwo = "yes";

var score = 0;
function play(question,answer){
  var useranswer = readlineSync.question(question);
 // console.log("you entered" + useranswer);
  console.log("you entered " + useranswer);
  //processing
  if(useranswer === answer){
      console.log("you were right!");
      score = score + 1;
      //score ++;
    console.log("your score is ", score)
  }else{
      console.log("you were wrong!")
      //score = score -1 ;
    score --;
    console.log("your score is ", score)
  }         
  }
  //calling the function

 // play("where do I work? ","Workday");
  //play("where do I live? ","Bangalore");
//console.log("your score is ", score)
play(questionOne,answerOne);
play(questionTwo,answerTwo);
