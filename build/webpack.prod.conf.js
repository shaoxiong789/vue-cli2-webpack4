'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const md5 = require('md5')
const entries = utils.getEntries(path.join(__dirname, '../src/pages/**/main.js'))
const allChunks = Object.keys(entries)
const htmlPlugins = []

// 生产环境，生成各模块html页面
allChunks.forEach((chunk, index) => {
  htmlPlugins.push(
    new HtmlWebpackPlugin({
      filename: `${chunk}.html`,
      template: `${path.dirname(entries[chunk])}/template.html`,
      inject: true,
      chunks: [chunk, 'vendors', 'async-vendors', 'manifest'],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        collapseBooleanAttributes: true,
        removeScriptTypeAttributes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      // chunksSortMode: 'dependency'
    })
  )
}) 

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    path: config.build.assetsRoot,
    // filename: utils.assetsPath('js/[name]/[name].js?[chunkhash:8]'),
    filename({ chunk }) {
      // const Chunk = chunk.Chunk;
      console.log(chunk.name, chunk.id, '1121--------------------------');
      return utils.assetsPath('js/[name]/[name].js?[chunkhash:8]');
    },
    chunkFilename: utils.assetsPath('js/chunk/[name].js?[chunkhash:8]')
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  performance: {
    hints: false
  },
  optimization: {
    splitChunks: {
      // chunks: "all",
      chunks (chunk) {
        return chunk.name != 'excluded-chunk';
      },
      name (module, chunks, cacheGroups) {
        // console.log(chunks.length);
        // console.log(chunks.map((chunk) => {
        //   return chunk.name
        // }))
        // console.log('splitChunks----------------');
        // console.log(chunks.map((chunk) => {
        //   return chunk.name
        // }), allChunks.length === chunks.length);
        if (allChunks.length === chunks.length) {
          return 'vendors/vendors~all';
        } else {
          return ['vendors/vendors'].concat(md5(chunks.map((chunk) => {
            return chunk.name
          }).join('.'))).join('~')
        }
        // return ['vendors'].concat(chunks.map((chunk) => {
        //   return chunk.name
        // })).join('~')
        // console.log(module, cacheGroups);
        // return 'xxx'
        // return cacheGroups + '.[name]'
      },
      cacheGroups: {
        // commons: {
        //   test: /[\\/]node_modules[\\/]/,
        //   name: "vendors",
        //   chunks: "all"
        // },
        // commons: {
        //   test: /[\\/]node_modules[\\/]/,
        //   name: "vendors",
        //   chunks: "all",
        //   minChunks: 1
        // }
        // 'async-vendors': {
        //   name: 'async-vendors',
        //   minChunks: 2,
        //   priority: -20,
        //   chunks: 'async',
        //   reuseExistingChunk: true
        // },
        // vendors: {
        //   test: /[\\/]node_modules[\\/]/,
        //   priority: -10
        // },
        // default: {
        //   minChunks: 2,
        //   priority: -20,
        //   reuseExistingChunk: true
        // }
      }
    },
    // runtimeChunk: true,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: false
        },
        sourceMap: config.build.productionSourceMap,
        cache: true,
        parallel: true
      }),
      new OptimizeCSSPlugin({
        cssProcessorOptions: config.build.productionSourceMap
          ? { safe: true, map: { inline: false } }
          : { safe: true }
      }),
    ]
  },    
  plugins: [
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: utils.assetsPath('css/[name]/[name].css?[contenthash:8]'),
      chunkFilename: utils.assetsPath('css/[name]/[name].[id].css?[contenthash:8]')
    }),       
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    ...htmlPlugins,
    // keep module.id stable when vendor modules does not change
    new webpack.HashedModuleIdsPlugin(),

    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
