//https://www.scaler.com/topics/palindrome-in-javascript/
//https://www.scaler.com/topics/course/javascript-beginners/
function palindrome(str)
 {

  var len = str.length;
  var mid = Math.floor(len/2);

  for ( var i = 0; i < mid; i++ ) {
      if (str[i] !== str[len - 1 - i]) {
        debugger;
        return false;
      }
  }

 return true;
  
}
//palindrome('eye');
palindrome('frog');
/*function checkPalindrome(str) {  
  // get the total length of the words  
  const len = str.length;  

  // Use for loop to divide the words into 2 half  
  for (let i = 0; i < len / 2; i++) {  
      // validate the first and last characters are the same  
      if (str[i] !== str[len - 1 - i]) {  
        console.log( 'It is not palindrome'); 
        return;
      }  
  }  
// If they are not the same, then it is not a palindrome
  console.log( 'It is a palindrome');  
}  

// take input of the string or number from the prompt  
const string = console.log('Enter a string or number to check for Palindrome: ');  

const value = checkPalindrome(string);  

// log it's value in the console
console.log(value);  */



