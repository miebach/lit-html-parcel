console.log("hello world");


import {html, render} from 'lit-html';

// This is a lit-html template function. It returns a lit-html template.
const helloTemplate = (name) => html`<div>Hello ${name}!</div>`;

// Call the function with some data, and pass the result to render()


function state1 () {
  // This renders <div>Hello Steve!</div> to the document body
  render(helloTemplate('Steve'), document.body);
  setTimeout(state2, 1000); 
}

function state2 () {
  // This updates to <div>Hello Kevin!</div>, but only updates the ${name} part
  render(helloTemplate('Kevin'), document.body);
  setTimeout(state1, 1000); 
}

state1();


