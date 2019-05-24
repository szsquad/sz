#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const program = require('commander');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.config/webpack.base');

// const pkgPath = path.resolve(process.cwd(), './package.json');
// const pak = fs.readFileSync(pkgPath, 'utf8');

program
  .version('0.0.1')
  .command('create')
  .arguments('project-name')
  .action(cmd => {
    console.log(cmd);
  })



program
  .command('run')
  .action(() => {
    const options = {
      compress: true,
      noInfo: true,
      hot: true,
      disableHostCheck: true,
      historyApiFallback: true,
    }
    const server = new WebpackDevServer(webpack(config), options)
    server.listen(8080, '127.0.0.1', () => {
      console.log('Starting server on http://localhost:8080');
    });
  })

program.parse(process.argv);