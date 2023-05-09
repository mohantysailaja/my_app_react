//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
//The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.

/*const x = {a: 1, b: 2};
const y = Object.keys(x);
const z = Object.values(x);
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
console.log(y);
console.log(z);
console.log(Object.keys(object1));
// Expected output: Array ["a", "b", "c"]
*/

/*The unary plus operator (+) before the variable x converts the string '123' to a number 123. Therefore, the variable y is assigned the numeric value 123, which is then logged to the console.*/

const x = '123';
const y = +x;
console.log(y);

//https://www.samanthaming.com/pictorials/how-to-reverse-a-string/
const name1 = "sailaja"
const splitName = name1.split('');
console.log(splitName);

//
const j = [1,2,3,4];
const k = j.filter(i => i % 2 === 0).map(i => i *2);
console.log(k);