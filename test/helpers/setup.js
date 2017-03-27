const browserEnv = require('browser-env');
const { join } = require('path');
const hook = require('vue-node');

browserEnv();
hook(join(__dirname, 'webpack.config.test.js'));
