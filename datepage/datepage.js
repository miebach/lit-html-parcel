
import hyperHTML from 'hyperhtml'; // ES6 WORKS!

function timeTpl(render) {
  render`
    <div>
      <h1>The time</h1>
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
};
