console.log("hello world");

import {html, render} from 'lit-html';
import Router from 'routerjs';

// This is a lit-html template function. It returns a lit-html template.
const pageTemplate = (name) => html`
	<div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">

      <li class="pure-menu-item pure-menu-selected"><a id="link-home" href="#/" class="pure-menu-link">Home</a></li>

      <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
        <a href="#/page1" id="linkPages" class="pure-menu-link">Pages</a>
        <ul class="pure-menu-children">
          <li class="pure-menu-item"><a id="link1" href="#/page1" class="pure-menu-link">Page 1</a></li>
          <li class="pure-menu-item"><a id="link2" href="#/page2" class="pure-menu-link">Page 2</a></li>
          <li class="pure-menu-item"><a id="link3" href="#/page3" class="pure-menu-link">Page 3</a></li>
        </ul>
      </li>
    </ul>
	</div>

  <h2 name='h2-header'>This is the ${name} page!</h2>
`;

// Call the function with some data, and pass the result to render()

function page(pageName) {
  render(pageTemplate(pageName), document.body);
}

function pageIndex() { page('index'); }
function page1() { page('first'); }
function page2() { page('second'); }
function page3() { page('third'); }

const router = new Router({
  ignorecase: true
});

router
.addRoute('#/page1', page1)
.addRoute('#/page2', page2)
.addRoute('#/page3', page3)
.addRoute('#/', pageIndex)
.run()
;
