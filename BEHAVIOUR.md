# Behaviour

Mocha and Puppeteer are used for behavior-driven development. They are included in the local packages, see package.json and yarn.lock

## mocha

Is called through ./bin/mocha so we can add our custom path for ./mocha.opts

https://stackoverflow.com/a/37793232/362951

There is a call script bin/runmocha

## puppeteer

### node version

Puppeteer requires at least Node v6.4.0, but some examples use async/await which is only supported in Node v7.6.0 or greater.

Installation with yarn:

`yarn add puppeteer`

### downloads chromium

When you install Puppeteer, it downloads a recent version of Chromium (~170Mb Mac, ~282Mb Linux, ~280Mb Win) that is guaranteed to work with the API.

To skip the download, see Environment variables.