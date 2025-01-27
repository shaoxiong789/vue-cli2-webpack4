'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const entries = utils.getEntries(path.join(__dirname, '../src/pages/**/main.*'))
const HtmlInjectForCDNPlugin = require('./HtmlInjectForCDNPlugin')
const md5 = require('md5')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: entries,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ?
      config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', ".ts", ".tsx", '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'components': resolve('src/components'),
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        use: [{
            loader: 'vue-loader',
            options: {}
          },
          {
            loader: 'iview-loader',
            options: {
              prefix: false
            }
          }
        ]
      },
      {
        test: /\.(tsx|ts|js)?$/,
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')],
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        ),
        type: 'javascript/auto',
        use: [{
          loader: 'ts-loader',
          options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true
          }
        }, {
          loader: 'babel-loader',
        }]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      name (module, chunks, cacheGroups) {
        const allChunks = Object.keys(entries)
        // 最多生成两个两个chunk文件，后面根据项目实际情况进行配置
        if (cacheGroups == 'vendors') {
          // if (allChunks.length === chunks.length) {
          //   return 'vendors/vendors~all';
          // } else {
          //   return ['vendors/vendors'].concat(md5(chunks.map((chunk) => {
          //     return chunk.name
          //   }).join('.'))).join('~')
          //   // return ['vendors/vendors'].concat(module._buildHash).join('~')
          // }
          return 'chunk-vendors'
        }
        if (cacheGroups == 'common') {
          return 'chunk-comomns'
        }
      },
      cacheGroups: {
        // 把项目中的公共组件或模块抽出来
        common: {
          test: /[\\/]src[\\/]components[\\/]/,
          chunks: "all"
        },
        // 把包仓库里用到的模块抽出来
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all"
        }
      }
    },
    runtimeChunk: 'single'
  },  
  plugins: [
    new VueLoaderPlugin(),
    new HtmlInjectForCDNPlugin(utils.getCDNAsset())
  ],
  externals: {
    'vue': 'Vue',
    'wq-base': 'WQBASE',
    'vue-i18n': 'VueI18n'
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
