'use strict'

module.exports = function (opt) {
  const pkg = require('./package.json')
  const spawn = require('child_process').spawnSync
  const colophon =
    {
      author: pkg.author,
      build: {
        branch: spawn('git', [ 'branch' ]).stdout.toString().split('* ', 2)[1].split('\n', 1)[0],
        clean: spawn('git', [ 'status' ]).stdout.toString().endsWith('clean\n'),
        rev: spawn('git', [ 'rev-parse', 'HEAD' ]).stdout.toString().slice(0, 7)
      },
      description: pkg.description,
      homepage: pkg.homepage,
      license: pkg.license,
      source: pkg.repository,
      version: pkg.version,
      year: new Date().getFullYear()
    }

  return {
    code: 'module.exports = ' + JSON.stringify(colophon),
    dependencies: [
      require.resolve('./package.json'),
      require.resolve('child_process')
    ],
    cacheable: true
  }
}
