// eslint-disable-next-line import/no-extraneous-dependencies
const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'e2e/**/*.test.js',
  output: 'e2e/output',
  helpers: {
    Playwright: {
      browser: 'chromium',
<<<<<<< HEAD
      url: 'http://localhost:9000',
=======
      url: 'http://localhost:8080',
>>>>>>> c7ee8fe (update)
      show: true,
    },
  },
  include: {
    I: './steps_file.js',
  },
  name: 'restaurant-apps-starter-project',
};
