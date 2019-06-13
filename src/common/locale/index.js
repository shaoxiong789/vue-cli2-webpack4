'use strict'

import Vue from 'vue'
import VueI18n from 'vue-i18n';
import ELEMENT from 'element-ui';
import WQBASE from 'wq-base';
// import http from '@/common/services/http';
// import config from 'config/index';
// console.log(process.module);
Vue.use(VueI18n);
var lcode = getCookie('_lcode_') || 'zh_CN';
var zh = '';

function getCookie(name) {
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  var arr = document.cookie.match(reg);
  if (arr) {
    return unescape(arr[2]);
  } else {
    return null;
  }
};

function dynamicLoadJs(url, success, error) {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  if (typeof (success) == 'function') {
    script.onload = script.onreadystatechange = function () {
      if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
        success();
        script.onload = script.onreadystatechange = null;
      }
    };
  }
  if (typeof (error) == 'function') {
    script.onerror = function () {
      error();
    }
  }
  head.appendChild(script);
}

export default {
  setLocale() {
    if (lcode == 'zh_CN') {
      ELEMENT.locale(ELEMENT.lang.zhCN)
      WQBASE && WQBASE.locale(ELEMENT.lang.zhCN);
    } else if (lcode == 'en') {
      ELEMENT.locale(ELEMENT.lang.en)
      WQBASE && WQBASE.locale(ELEMENT.lang.en);
    } else if (lcode == 'zh_TW') {
      ELEMENT.locale(ELEMENT.lang.zhTW)
      WQBASE && WQBASE.locale(ELEMENT.lang.zhTW);
    }
  },
  initI18n(url = '', param = '', project) {
    var moduleName = process.module;
    if (process.build == 'fb' || process.env.NODE_ENV != 'production') {
      if (lcode == 'zh_CN') {
        zh = require('@/' + moduleName + '/modules/' + project + '/language/zh')['default'];
        if (!zh) {
          zh = require('@/' + moduleName + '/modules/' + project + '/language/zh');
        }
      } else if (lcode == 'en') {
        zh = require('@/' + moduleName + '/modules/' + project + '/language/en')['default'];
      } else if (lcode == 'zh_TW') {
        zh = require('@/' + moduleName + '/modules/' + project + '/language/tw')['default'];
      }
    }
    var that = this;
    return new Promise(function (resolve, reject) {
      var messages = {};
      if (url) {
        var paths = url.substring(url.lastIndexOf('/'), url.lastIndexOf('.htm'));
        var loadJs = 'https://i18ncdn.woqukaoqin.com/i18n/resource/js/' + lcode + paths + '.js';
        dynamicLoadJs(loadJs, () => {
          var lanMes = {};
          if (zh) {
            lanMes = Object.assign(WQBASE.wqLanguage, zh);
          } else {
            lanMes = WQBASE.wqLanguage;
          }
          messages[lcode] = lanMes;
          const i18n = new VueI18n({
            locale: lcode, // 语言标识
            messages
          });
          that.setLocale();
          resolve(i18n)
        }, () => {
          if (zh) {
            messages[lcode] = zh;
            const i18n = new VueI18n({
              locale: lcode, // 语言标识
              messages
            });
            that.setLocale();
            resolve(i18n)
          } else {
            messages[lcode] = {};
            resolve(new VueI18n({
              locale: lcode, // 语言标识
              messages
            }));
            that.setLocale();
          }
        })
      } else {
        if (zh) {
          messages[lcode] = zh;
          const i18n = new VueI18n({
            locale: lcode, // 语言标识
            messages
          });
          that.setLocale();
          resolve(i18n)
        } else {
          messages[lcode] = {};
          resolve(new VueI18n({
            locale: lcode, // 语言标识
            messages
          }));
          that.setLocale();
        }
      }

      // if (url && process.build != 'fb' && process.env.NODE_ENV === 'production') {
      //   http.post('/forward_webfront/api/at' + url, {}).then((result) => {
      //     if (zh) {
      //       var lan = Object.assign(result.data, zh);
      //       messages[lcode] = lan;
      //       const i18n = new VueI18n({
      //         locale: getCookie('_lcode_') || 'zh_CN', // 语言标识
      //         messages
      //       });
      //       that.setLocale();
      //       resolve(i18n)
      //     } else {
      //       messages[lcode] = result.data;
      //       const i18n = new VueI18n({
      //         locale: lcode, // 语言标识
      //         messages
      //       });
      //       that.setLocale();
      //       resolve(i18n)
      //     }
      //   })
      // } else {
      //   if (zh) {
      //     messages[lcode] = zh;
      //     const i18n = new VueI18n({
      //       locale: lcode, // 语言标识
      //       messages
      //     });
      //     that.setLocale();
      //     resolve(i18n)
      //   } else {
      //     messages[lcode] = {};
      //     resolve(new VueI18n({
      //       locale: lcode, // 语言标识
      //       messages
      //     }));
      //     that.setLocale();
      //   }
      // }
    })
  },
  getCookie: getCookie
}