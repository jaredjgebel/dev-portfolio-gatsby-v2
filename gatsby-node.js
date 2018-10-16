import Shell from 'child_process'

function postBuild(pages, callback) {
  Shell.execSync('cp -r src/images/* public/')
  callback()
}

export { postBuild }
