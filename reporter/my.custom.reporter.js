const WDIOReporter = require('@wdio/reporter').default;

class CustomReporter extends WDIOReporter {
  constructor(options) {
    /*
     * make reporter to write to the output stream by default
     */
    options = Object.assign(options, { stdout: true });
    super(options);
  }

  onTestPass(test) {
    this.write(`Congratulations! Your test "${test.title}" passed 👏 \n`)
  }
}


exports.default = CustomReporter;