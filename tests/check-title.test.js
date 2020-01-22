//const assert = require('assert')
import assert from 'assert';

describe('webdriver.io page', () => {
    before(() => {
       // Would be great for a test data setup API call or something
    });

    beforeEach(() =>{
     browser.url('https://webdriver.io');
 });
    it('should have the right title', () => {
        const title = browser.getTitle();
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })
});