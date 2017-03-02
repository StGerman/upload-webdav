#!/usr/bin/env node
const prog = require('caporal');
const webdav_fs = require('webdav-fs')
const jsonfile = require('jsonfile')

prog
  .version('1.0.0')
  .command('init', 'initialize webdav credentials')
  .argument('[config]', 'path for config', /^s1|s2|s3|s4|production$/, 's1')
  .action(() => {
    const file_path = 'upload-webdav.json'
    const default_config = {
      uri: 'http://path_to_webdav',
      username: 'username',
      password: 'password'
    }
    jsonfile.writeFile(file_path, default_config, function (err) {
      console.error(err)
    })
  })
  .command('deploy', 'Deploy an application')
  .argument('[env]', 'Environment to deploy on', /^s1|s2|s3|s4|production$/, 's1')
  .argument('[env]', 'Environment to deploy on', /^s1|s2|s3|s4|production$/, 's1')
  .argument('[env]', 'Environment to deploy on', /^s1|s2|s3|s4|production$/, 's1')
  .action(function(args, options, logger) {
    console.log(args)
    // args and options are objects
    // args = {"app": "myapp", "env": "production"}
    // options = {"tail" : 100}
  })

prog.parse(process.argv);

// ./upload-webdav deploy production
