import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello() {
  //  const myElement = <h1>I Love JSX!</h1>;

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(myElement)

const myEle = React.createElement('a',{},'link');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myEle);

 /* return <h1>I am learning my first react app 
             <p>learning react is fun !!!</p>
             <span>loved react !!!</span>
         </h1>;*/
         
}

export default Hello;