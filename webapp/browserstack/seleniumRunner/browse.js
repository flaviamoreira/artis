const wd = require('wd')
const async = require('async')

const logStatus = info => console.log('\x1b[36m%s\x1b[0m', info)

const logCommand = (meth, path) =>
  console.log(' > \x1b[33m%s\x1b[0m: %s', meth, path)

const wait4 = ms => wait.bind(null, ms)

const wait = (ms, cb) => setTimeout(cb, ms)

module.exports = (url, desired, remoteCfg, cb) => {
  if (typeof remoteCfg === 'function') {
    cb = remoteCfg
    remoteCfg = undefined
  }

  const browser = wd.remote(remoteCfg)

  async.series([
    browser.init.bind(browser, desired),
    wait4(100),
    browser.get.bind(browser, url),
    wait4(1000),
  ], (err) => {
    cb(err, browser)
  })
}
