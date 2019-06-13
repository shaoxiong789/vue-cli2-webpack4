var gulp = require('gulp');
var opn = require('opn')
const path = require('path')
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var args = require('process.args')();
const rm = require('rimraf')
const ora = require('ora')
const chalk = require('chalk')
const fs = require('fs');

gulp.task('init', function (callback) {
  fs.exists('./config/proxy.js', function(exists) {
    if(!exists){
      fs.writeFile('./config/proxy.js', `module.exports = {
  '/forward_webfront': {
    target: 'https://yuhmc-1.woqu365.com', // 接口的域名
    secure: true, // 如果是https接口，需要配置这个参数
    changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
  }
}`,'utf8',function(error){
        if(error){
          return false;
        }
        callback()
      })
    } else {
      callback()
    }
  })
})
// 对一些npm模块做版本校验，自动更新
gulp.task('renew', function (callback) {
  callback()
  // const ncu = require('npm-check-updates');

  // const exec = function (cmd) {
  //   return require('child_process').execSync(cmd).toString().trim()
  // }
  // ncu.run({
  //   jsonUpgraded: true,
  //   packageManager: 'npm',
  //   args: [ 'vue' ],
  //   silent: true
  // }).then((upgraded) => {
  //   console.log('dependencies to upgrade:', upgraded);
  //   Object.keys(upgraded).forEach((key) => {
  //     exec(`cnpm i ${key} --save`)
  //   })
  //   callback()
  // });
}) 

gulp.task('dev', gulp.series('init', 'renew', (callback) => {
  var webpackDevConfig = require('./build/webpack.dev.conf.js');
  var config = require('./config')
  var utils = require('./build/utils')
  webpackDevConfig.then(function(myConfig) {
    const param = args.dev;
    const port = param.port || myConfig.devServer.port;
    const host = param.host || myConfig.devServer.host;
    const mypath = param.path || '**';
    myConfig.entry = utils.getEntries(path.join(__dirname, `./src/pages/${mypath}/**/main.js`))
    const baseUrl = `http://${host}:${port}/`
    const devServer = new WebpackDevServer(webpack(myConfig), myConfig.devServer);
    devServer.listen(port, host, function (err) {
      callback();
      if (err) throw new gutil.PluginError('webpack-dev-server', err);
    })
    devServer.middleware.waitUntilValid(function () {
      console.log('> 构建完成，已自动在浏览器打开页面，如未自动打开，请手工复制下面的链接，复制到浏览器里打开。')
      Object.keys(myConfig.entry).forEach((entry) => {
        console.log(`> Listening at ${baseUrl}${entry}.html \n`)
      })
      if (config.autoOpenBrowser) {
        opn(baseUrl)
      }
    })
  })
}));

gulp.task('build', gulp.series('init', 'renew', (callback) => {
  var webpackProdConfig = require('./build/webpack.prod.conf');
  var config = require('./config')
  const spinner = ora('building for production...')
  spinner.start()
  rm(path.join(config.build.assetsRoot), err => {
    if (err) throw err
    webpack(webpackProdConfig, (err, stats) => {
      spinner.stop()
      if (err) throw err
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
        chunks: false,
        chunkModules: false
      }) + '\n\n')
  
      if (stats.hasErrors()) {
        console.log(chalk.red('  Build failed with errors.\n'))
        process.exit(1)
      }
  
      console.log(chalk.cyan('  Build complete.\n'))
      console.log(chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
        '  Opening index.html over file:// won\'t work.\n'
      ))
      callback()
    })
  })
}));