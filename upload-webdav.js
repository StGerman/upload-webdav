#!/usr/bin/env node
const prog = require('caporal')
const webdav_fs = require('webdav-fs')
const jsonfile = require('jsonfile')

const config_path_validator = /^.*.json$/

prog
  .version('1.0.0')
  .command('init', 'initialize webdav credentials')
  .argument('[config]', 'path for config json', config_path_validator, 'upload-webdav.json')
  .action((args) => {
    const default_config = {
      uri: 'http://path_to_webdav',
      username: 'username',
      password: 'password'
    }
    jsonfile.writeFile(args['config'], default_config, function (err) {
      console.error(err)
    })
  })
  .command('deploy', 'Deploy an application')
  .argument('[config]', 'path to config', null, 'upload-webdav.json')
  .argument('[env]', 'Environment to deploy on', /^s1|s2|s3|s4|production$/, 's1')
  .action(function(args, options, logger) {
    console.log(args)
  })

prog.parse(process.argv);

// ./upload-webdav deploy production
