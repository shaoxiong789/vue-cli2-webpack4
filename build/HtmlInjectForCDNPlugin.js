const HtmlWebpackPlugin = require('html-webpack-plugin')
const fetch = require('node-fetch');
const md5 = require('md5')
class HtmlInjectForCDNPlugin {
  constructor (options) {
    const userOptions = options || {};
    const defaultOptions = {
      styles: [
      ],
      scripts: [
      ]
    };
    this.options = Object.assign(defaultOptions, userOptions);
  }
  apply (compiler) {
    var self = this;
    compiler.hooks.compilation.tap('HtmlWebpackPluginHooks', function(hwpCompilation) {
      HtmlWebpackPlugin.getHooks(hwpCompilation).alterAssetTags.tapAsync(
        'sri',
        function cb(data, callback) {
          Promise.all([
            Promise.all(
              self.options.scripts.map((script) => {
                return new Promise((resolve, reject) => {
                  fetch(script).then((res) => {
                    res.buffer().then((buffer) => {
                      resolve(`${script}?${md5(buffer)}`)
                    })
                  })
                })
              })
            ).then((scripts) => {
              data.assetTags.scripts.unshift(...scripts.map((script) => {
                return { tagName: 'script',
                  voidTag: false,
                  attributes: { src: script } 
                }
              }))
            }),
            Promise.all(
              self.options.styles.map((style) => {
                return new Promise((resolve, reject) => {
                  fetch(style).then((res) => {
                    res.buffer().then((buffer) => {
                      resolve(`${style}?${md5(buffer)}`)
                    })
                  })
                })
              })
            ).then((styles) => {
              data.assetTags.styles.unshift(...styles.map((style) => {
                return { 
                  tagName: 'link',
                  voidTag: true,
                  attributes: {
                    href: style,
                    rel: 'stylesheet'
                  }
                }
              }))
            })
          ]).then(() => {
            callback(null, data);
          })
        }
      );
    });
  }
}

module.exports = HtmlInjectForCDNPlugin;