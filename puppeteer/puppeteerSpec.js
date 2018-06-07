const assert = require('assert');
const puppeteer = require('puppeteer');

describe('Puppeteer simple example',function(){
  it('should load google start page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://google.com');
    //await page.screenshot({path: 'google.png'});
    await browser.close();
    assert(true);
  })
})
