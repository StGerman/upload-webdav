#!/usr/bin/env node
const prog = require('caporal');
const webdav_fs = require("webdav-fs")

prog
  .version('1.0.0')
  .command('init', 'initialize webdav credentials')
  .action(() => {
    console.log('initializing...')
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
