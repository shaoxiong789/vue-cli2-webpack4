var gulp = require('gulp');
var open = require('gulp-open');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackDevConfig = require('./build/webpack.dev.conf.js');
var args = require('process.args')();

gulp.task('dev', function (callback) {
  webpackDevConfig.then(function(myConfig) {
    // console.log(myConfig);
    const param = args.dev;
    const port = param.port || myConfig.devServer.port;
    const host = param.host || myConfig.devServer.host;
    Object.keys(myConfig.entry).forEach((key) => {
      myConfig.entry[key] = [`webpack-dev-server/client?http://${host}:${port}/`, 'webpack/hot/dev-server']
      .concat(myConfig.entry[key])
    })
    console.log(args)
    // console.log(myConfig);
    const compiler = webpack(myConfig);
    // compiler.hooks.done((stats) => {
    //   console.log(stats);
    // })
    // console.log(compiler.hooks.done.tapPromise)
    // compiler.run(function (err, stats) {
    //   console.log('-----------------------------');
    // })
    const devServer = new WebpackDevServer(compiler, {
      hot: true
    }).listen(port, host, function (err) {
      console.log('加载页面');
      callback();
      if (err) throw new gutil.PluginError('webpack-dev-server', err);
      console.log('> 构建完成，已自动在浏览器打开页面，如未自动打开，请手工复制下面的链接，复制到浏览器里打开。')
    })
    console.log(devServer.IncomingMessage)
  })
});