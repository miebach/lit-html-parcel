
import hyperHTML from 'hyperhtml'; // ES6 WORKS!

function timeTpl(render) {
  render`
    <div>
      <h1>The time is</h1>
      <h2>It is ${new Date().toLocaleTimeString()}.</h2>
    </div>
  `;
}

function buttonTpl(render) {
  render`
    <div>
      <button></button>
    </div>
  `;
}

function attachTo(tpl,elementId) {
  tpl(hyperHTML(document.getElementById(elementId)));
}

function attachTimeTplTo(elementId) {
  attachTo(timeTpl,elementId);
}

function attachButtonTplTo(elementId) {
  attachTo(buttonTpl,elementId);
}

module.exports = {
  attachTimeTplTo: attachTimeTplTo
};

if (module.hot) {
  module.hot.dispose(function () {
    // module is about to be replaced
    //clearinterval(intervalId); // https://stackoverflow.com/a/1795107/362951
  });

  module.hot.accept(function () {
    // module or one of its dependencies was just updated
  });
}

