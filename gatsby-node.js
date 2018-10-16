const Shell = require('child_process')

function postBuild(pages, callback) {
  Shell.execSync('cp -r src/images/* public/')
  callback()
}

module.exports = { postBuild }
