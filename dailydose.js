//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

const x = {a: 1, b: 2};
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