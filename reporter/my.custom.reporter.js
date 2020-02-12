const WDIOReporter = require('@wdio/reporter').default;
const chalk = require('chalk');

class CustomReporter extends WDIOReporter {
  constructor(options) {
    /*
     * make reporter to write to the output stream by default
     */
    options = Object.assign(options, { stdout: true });
    super(options);
  }

  onTestPass(test) {
    this.write(chalk.green.bold(`Congratulations! Your test '${test.title}' passed 👏 \n`));
  }

  onTestFail() {
    this.write(chalk.red.bold(`Bummer! Your test '${test.title}' failed 😱 \n`));
  }

  onTestSkip() {
    this.write(chalk.yellow.bold(`Not today, test! Your test '${test.title}' was skipped 🤷️ \n`));
  }
}

exports.default = CustomReporter;