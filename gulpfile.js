var gulp = require('gulp');
var opn = require('opn')
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackDevConfig = require('./build/webpack.dev.conf.js');
var config = require('./config')
var args = require('process.args')();

gulp.task('dev', function (callback) {
  webpackDevConfig.then(function(myConfig) {
    const param = args.dev;
    const port = param.port || myConfig.devServer.port;
    const host = param.host || myConfig.devServer.host;
    const baseUrl = `http://${host}:${port}/`
    const devServer = new WebpackDevServer(webpack(myConfig), {
      hot: true
    });
    devServer.listen(port, host, function (err) {
      callback();
      if (err) throw new gutil.PluginError('webpack-dev-server', err);
    })
    devServer.middleware.waitUntilValid(function () {
      console.log('> 构建完成，已自动在浏览器打开页面，如未自动打开，请手工复制下面的链接，复制到浏览器里打开。')
      console.log(`> Listening at ${baseUrl} \n`)
      if (config.autoOpenBrowser) {
        opn(baseUrl)
      }
    })
  })
});