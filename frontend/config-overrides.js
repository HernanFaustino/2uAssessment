const path = require('path');
const { updateConfig } = require('react-app-rewire-antd-theme');
 
const options = {
  stylesDir: path.join(__dirname, './src/styles'),
  antDir: path.join(__dirname, './node_modules/antd'),
  varFile: path.join(__dirname, './src/styles/variables.less'),
  mainLessFile: path.join(__dirname, './src/styles/index.less'),
  themeVariables: [
    '@primary-color',
    '@primary-1',
  ],
  indexFileName: 'index.html',
  generateOnce: false,
  publicPath: '',
}
module.exports = function override(config, env) {
  config = updateConfig(config, env, options)
  return config;
};
