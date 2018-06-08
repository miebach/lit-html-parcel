console.log("hello world");

import {html, render} from 'lit-html';

// This is a lit-html template function. It returns a lit-html template.
const pageTemplate = (name) => html`<div>This is the ${name} page!</div>`;

// Call the function with some data, and pass the result to render()

function page1 () {
  render(pageTemplate('first'), document.body);
}

function page2 () {
  render(pageTemplate('second'), document.body);
}

page1();
