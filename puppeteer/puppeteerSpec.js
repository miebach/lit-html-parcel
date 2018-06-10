const assert = require('assert');
const puppeteer = require('puppeteer');

describe('Puppeteer and local http-server',function(){
  it('should load index page', async () => {
    const http_port = process.env.npm_package_config_http_server_dist_port;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`http://localhost:${http_port}`, {
    	timeout: 2000
    });
    //await page.screenshot({path: 'index.png'});
    await browser.close();
    assert(true);
  })
})
