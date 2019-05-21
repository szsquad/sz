#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const program = require('commander');

const pkgPath = path.resolve(process.cwd(), './package.json');
const pak = fs.readFileSync(pkgPath, 'utf8');

program
  .version(JSON.parse(pak).version)
  .command('create')
  .arguments('project-name')
  .action(cmd => {
    console.log(cmd);
  })



program
  .command('run')
  .action(() => {
    console.log('run+++++++');
    
  })

program.parse(process.argv);