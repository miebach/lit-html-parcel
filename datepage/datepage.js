
//import hyperHTML from 'hyperhtml';
import hyperHTML from 'hyperhtml/esm';

// this is hyperHTML
function timeTpl(render) {
  render`
    <div>
      <h1>The time 4</h1>
      <h2>It is ${new Date().toLocaleTimeString()}.</h2>
    </div>
  `;
}

function attachTo(tpl,elementId) {
  tpl(hyperHTML(document.getElementById(elementId)));
}

function attachTimeTplTo(elementId) {
  attachTo(timeTpl,elementId);
}


module.exports = {
  attachTimeTplTo: attachTimeTplTo
}