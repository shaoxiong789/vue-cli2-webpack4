var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackDevConfig = require('./build/webpack.dev.conf.js');
var args = require('process.args')();

webpackDevConfig.then(function(myConfig) {
  // console.log(myConfig);
  const param = args.dev || {};
  const port = param.port || myConfig.devServer.port;
  const host = param.host || myConfig.devServer.host;
  Object.keys(myConfig.entry).forEach((key) => {
    myConfig.entry[key] = [`webpack-dev-server/client?http://${host}:${port}/`, 'webpack/hot/dev-server']
    .concat(myConfig.entry[key])
  })
  console.log(args)
  console.log(myConfig);
  new WebpackDevServer(webpack(myConfig), {
    hot: true
  }).listen(port, host, function (err) {
    console.log('加载页面');
    // callback();
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
    // open({url: 'http://localhost:8080'})
  })
})