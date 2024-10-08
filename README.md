# 💻 Complete Guide to Test Chrome Extensions with Puppeteer

**This is a complete example on how to test a chrome extension with Puppeteer**. This repo is referenced [in our blog](https://tweak-extension.com/blog/complete-guide-test-chrome-extension-puppeteer). In this repo you can find:

* A simple chrome extension under `replacer-chrome-extension`.
* A simple React app under `src`.
* Puppeteer e2e tests under `e2e`.

## 🔎 Instructions

**Requirements**: Node >=20 and Chromium (even tough you're going to install Puppeteer make sure you have chromium - https://www.chromium.org/getting-involved/download-chromium/).

1. `npm install` to install the dependencies.
1. `npm start` to run the react app, must be running since it is the base for the e2e tests.
1. `npm run e2e` to run the e2e tests.

### npm run start

![Screenshot of npm run start](./npm-run-start.png)

### npm run e2e

![Screenshot of npm run e2e](./npm-run-e2e.png)

## 📚 Other Interesting Blogposts

* [What a Google Search Can't Tell You About These JS Testing Frameworks](https://tweak-extension.com/blog/comparison-e2e-javascript-testing-frameworks)
* [How to Simulate HTTP Request Errors](https://tweak-extension.com/blog/how-to-simulate-error-http-request)
* [The Different Shades of Testing Web Apps: Aiming for Balance](https://tweak-extension.com/blog/web-application-testing)
