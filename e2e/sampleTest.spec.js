const { bootstrap } = require('./bootstrap');

describe('test text replacer extension with react app', () => {
  let extPage, appPage, browser;

  beforeAll(async () => {
    const context = await bootstrap({ appUrl: 'http://localhost:3000'/*, slowMo: 50, devtools: true*/ });

    extPage = context.extPage;
    appPage = context.appPage;
    browser = context.browser;
  });

  it('should render a button in the web application', async () => {
    // 1. When a user opens the React application
    appPage.bringToFront();
    // 1.1. The user should see a button on the web page
    const btn = await appPage.$('.action');
    const btnText = await btn.evaluate(e => e.innerText);
    expect(btnText).toEqual('click to show text');
    // 2. Then the user clicks the button to display the text
    await btn.click();

    // 3. When the user goes to the chrome extension
    await extPage.bringToFront();

    // 4. When the user writes the word "music" and its replacement "**TEST**"
    // in the extension and the user clicks on the "replace" button
    const fromInput = await extPage.$('#from');
    await fromInput.type('music');
    const toInput = await extPage.$('#to');
    await toInput.type('**TEST**');
    const replaceBtn = await extPage.$('#replace');
    await replaceBtn.click();

    // 5. When the user goes back to the website
    appPage.bringToFront();
    const textEl = await appPage.$('.text');
    const text = await textEl.evaluate(e => e.innerText);
    // 5.1. Then the user should see the string "**TEST**" on the page
    expect(text).toEqual(expect.stringContaining('**TEST**'));
    // 5.2 Then the user should no longer see the string "music" on the page
    expect(text).toEqual(expect.not.stringContaining('music'));
  });

  afterAll(async () => {
    await browser.close();
  });
});
