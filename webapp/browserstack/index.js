require('./fast-selenium.js')
const seleniumRunner = require('./seleniumRunner')
const test = require('./tests/sample.js')
const config = require('./config.json')

// tests to run
const tests = [
  {
    url: 'http://www.google.com',
    exec: test,
  },
]

const testCallback = (err, context) => {
  console.log('A test finished')
}

const endCallback = (err) => {
  console.log('All tests ended')
}

seleniumRunner(config, tests, testCallback, endCallback)

// const webdriver = require('selenium-webdriver')
// const { user, key } = require('./credentials.json')

// const capabilities = {
//   os: 'windows',
//   os_version: '7',
//   browserName: 'chrome',
//   browser_version: '55',
//   'browserstack.local': true,
//   'browserstack.user': user,
//   'browserstack.key': key,
// }

// const driver = new webdriver.Builder()
//   .usingServer('http://hub-cloud.browserstack.com/wd/hub')
//   .withCapabilities(capabilities)
//   .build()

// driver.get('http://localhost:3000/')
// driver.findElement(webdriver.By.id('simple')).click()
// driver.findElement(webdriver.By.id('open')).click()

// driver.getTitle().then(function(title) {
//   console.log(title)
// })

// driver.quit()
