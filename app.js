console.log("hello world");

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

setInterval(timeTpl, 1000, hyperHTML(document.getElementById('root')));


function emptyTpl(render) {
  render`
    <div>
    </div>
  `;
}

if (module.hot) {
  /*
  module.hot.dispose(function () {
    // module is about to be replaced
    //clearinterval(intervalId); // https://stackoverflow.com/a/1795107/362951
  });

  module.hot.accept(function () {
    // module or one of its dependencies was just updated
  });
  */
}
