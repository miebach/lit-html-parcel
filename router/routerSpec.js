const assert = require('assert');
const puppeteer = require('puppeteer');


async function getBrowserPage(http_port, path = '') {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  //console.log(`http:${http_port}/#`) ${http_port}
  await page.goto(`http://localhost:${http_port}/${path}`, {
    timeout: 2000
  });
  return [browser,page];
}

async function innerBy(page, tagName, tagValue) {
  // puppeteer-get-inner-html:
  // https://stackoverflow.com/questions/46431288/puppeteer-get-inner-html
  return await page.$eval(`[${tagName}='${tagValue}']`, (element) => {
      return element.innerHTML
  });
}

async function clickBy(page,aName,aValue) {
  const link = await page.$(`[${aName}="${aValue}"]`);
  return await link.click()
}


// https://medium.com/@ankit_m/ui-testing-with-puppeteer-and-mocha-part-1-getting-started-b141b2f9e21

// https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2018-f68950900bc3

const http_port = process.env.npm_package_config_http_server_dist_port;

describe('router demo',function(){

  it('should find header 2', async () => {
    const [browser,page] = await getBrowserPage(http_port);
    //await page.screenshot({path: 'index.png'});

    assert('This is the index page!' === await
      innerBy(page,'name','h2-header'));

    await clickBy(page,'id','link2');

    assert('This is the second page!' === await
      innerBy(page, 'name','h2-header'));
    await browser.close();
  });

})
