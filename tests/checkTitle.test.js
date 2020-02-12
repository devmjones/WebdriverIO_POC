const assert = require('assert');

// Test from documentation
describe('webdriver.io page', () => {
  it('should have the right title', () => {
    // browser url dependent on env variable
    browser.url('/');
    const title = browser.getTitle();
    assert.strictEqual(
      title,
      'WebdriverIO · Next-gen WebDriver test framework for Node.js'
    );
  });
});
