console.log("hello world");

import MM from './datepage/datepage';

const attachTimeTplTo = MM.attachTimeTplTo;

function loopIt() {
  attachTimeTplTo('root');
  setTimeout(loopIt,1000);
}

loopIt();

function emptyTpl(render) {
  render`
    <div>
    </div>
  `;
}

/*
if (module.hot) {
  module.hot.dispose(function () {
    // module is about to be replaced
    //clearinterval(intervalId); // https://stackoverflow.com/a/1795107/362951
  });

  module.hot.accept(function () {
    // module or one of its dependencies was just updated
  });
}
*/
