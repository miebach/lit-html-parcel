import hyperHTML from 'hyperhtml'; // ES6 WORKS!

console.log("mark1");

function click1(e) {
  e.preventDefault();
  console.log('click event');
}

function stopT(render) {
  render`<div><button onclick=${click1}>stop</button></div>`;
}


const stopId = 'main';
const render = hyperHTML(document.getElementById(stopId))
stopT(render);

console.log("mark10");


if (module.hot) {
  module.hot.dispose(function () {
    // module is about to be replaced
    //clearinterval(intervalId); // https://stackoverflow.com/a/1795107/362951
  });

  module.hot.accept(function () {
    // module or one of its dependencies was just updated
  });
}

