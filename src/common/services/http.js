'use strict'

import axios from 'axios'
import ElementUI from 'element-ui';
import qs from 'qs';


var instance = axios.create({
  baseURL: '/forward_webfront',
  paramsSerializer: function(params) {
    return qs.stringify(params, {
      allowDots: true,
      indices: false
    });
  }
});

instance.defaults.withCredentials = true;

instance.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  response = checkStatus(response);
  response = checkCode(response)
  return response
}, error => {
  return Promise.resolve(error.response)
})

// eslint-disable-next-line require-jsdoc
function checkStatus(response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  var msg = '网络异常';
  // var lcode = common.getCookie('_lcode_');
  // if (lcode == 'en') {
  //   msg = 'network anomaly'
  // } else if (lcode == 'zh_TW') {
  //   msg = '網絡異常'
  // }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: msg
  }
}

// eslint-disable-next-line require-jsdoc
function checkCode(res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    ElementUI.Message.error(res.msg);
  }
  if (res.request && res.request.responseURL && res.request.responseURL.indexOf('/i18n/js') === -1 && res.data && res.data.result == 1) {
    if (res.data.message) {
      ElementUI.Message.error(res.data.message)
    }
  }
  return res;
}

export default {
  ...instance,
  form: function(url, data) {
    return instance({
      method: 'post',
      url,
      data,
      transformRequest: [function (data) {
        return qs.stringify(data, {
          allowDots: true,
          indices: false
        });
      }]
    })
  }
}