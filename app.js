console.log("hello world");

import {html, render} from 'lit-html';
import Router from 'routerjs';

// This is a lit-html template function. It returns a lit-html template.
const pageTemplate = (name) => html`
  <div id='menu'>
    <a id='link1' href='#/'> page1</a>
    | 
    <a id='link2' href='#/page2'>page2</a>
  </div>
  
  <h2 name='h2-header'>This is the ${name} page!</h2>
`;

// Call the function with some data, and pass the result to render()

function page(pageName) {
  render(pageTemplate(pageName), document.body);
}

function page1() { page('index'); }

function page2() { page('second'); }

const router = new Router({
  ignorecase: true
});

router
.addRoute('#/page2', page2)
.addRoute('#/', page1)
.run()
;
