(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"+7Ma":function(t,e,r){},"/KYB":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this;var e=t.$createElement;var r=t._self._c||e;return r("div",{staticClass:"layout"},[r("Layout",{staticClass:"ivu-layout-has-sider",style:{minHeight:"100vh"}},[r("Sidebar"),t._v(" "),r("Layout",[r("Navbar"),t._v(" "),r("Content",{style:{margin:"20px",background:"#fff",minHeight:"260px"}},[r("router-view")],1)],1)],1)],1)};var i=[];var a=function(){var e=this;var t=e.$createElement;var r=e._self._c||t;return r("Sider",{ref:"side1",attrs:{"hide-trigger":"",collapsible:"","collapsed-width":78},model:{value:e.isCollapsed,callback:function(t){e.isCollapsed=t},expression:"isCollapsed"}},[r("Menu",{class:e.menuitemClasses,attrs:{"active-name":"1-2",theme:"dark",width:"auto"}},[r("MenuItem",{attrs:{name:"1-1"}},[r("Icon",{attrs:{type:"ios-navigate"}}),e._v(" "),r("span",[e._v("Option 1")])],1),e._v(" "),r("MenuItem",{attrs:{name:"1-2"}},[r("Icon",{attrs:{type:"ios-search"}}),e._v(" "),r("span",[e._v("Option 2")])],1),e._v(" "),r("MenuItem",{attrs:{name:"1-3"}},[r("Icon",{attrs:{type:"ios-settings"}}),e._v(" "),r("span",[e._v("Option 3")])],1)],1)],1)};var o=[];var f={computed:{isCollapsed:function t(){return this.$store.state.sidebar},menuitemClasses:function t(){return["menu-item",this.isCollapsed?"collapsed-menu":""]}}};var u=f;var s=r("n2Pq");var l=r("MF7y");var h=Object(l["a"])(u,a,o,false,null,null,null);var c=h.exports;var v=function(){var e=this;var t=e.$createElement;var r=e._self._c||t;return r("Header",{staticClass:"layout-header-bar",style:{padding:0}},[r("Icon",{class:e.rotateIcon,style:{margin:"0 20px"},attrs:{type:"md-menu",size:"24"},nativeOn:{click:function(t){return e.collapsedSider(t)}}})],1)};var p=[];var g={computed:{rotateIcon:function t(){return["menu-icon",this.$store.state.siderbar?"rotate-icon":""]}},methods:{collapsedSider:function t(){this.$store.commit("SIDEBAR",!this.$store.state.sidebar)}}};var y=g;var d=r("TQtR");var w=Object(l["a"])(y,v,p,false,null,"237f45b4",null);var _=w.exports;var m=r("/asr");var b={components:{Sidebar:c,Navbar:_,HelloWorld:m["a"]},data:function t(){return{isCollapsed:false}},computed:{rotateIcon:function t(){return["menu-icon",this.isCollapsed?"rotate-icon":""]},menuitemClasses:function t(){return["menu-item",this.isCollapsed?"collapsed-menu":""]}},methods:{collapsedSider:function t(){this.$refs.side1.toggleCollapse()}}};var E=b;var A=r("6k5g");var R=Object(l["a"])(E,n,i,false,null,"75e3f93f",null);var P=e["default"]=R.exports},"/asr":function(t,e,r){"use strict";var n=function(){var t=this;var e=t.$createElement;var r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._v(" "),r("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),r("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])};var i=[function(){var t=this;var e=t.$createElement;var r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),r("br"),t._v(" "),r("li",[r("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this;var e=t.$createElement;var r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("\n        vue-router\n      ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("\n        vuex\n      ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("\n        vue-loader\n      ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("\n        awesome-vue\n      ")])])])}];var a={name:"HelloWorld",data:function t(){return{msg:"Welcome to Your Vue.js App12"}}};var o=a;var f=r("rHWL");var u=r("MF7y");var s=Object(u["a"])(o,n,i,false,null,"453c3e14",null);var l=e["a"]=s.exports},"6k5g":function(t,e,r){"use strict";var n=r("Gf9Q");var i=r.n(n);var a=i.a},"71t8":function(t,tt,et){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var n=et("ZRwL");var a=et("F3So");var f=et("u3k6");tt.Buffer=c;tt.SlowBuffer=d;tt.INSPECT_MAX_BYTES=50;c.TYPED_ARRAY_SUPPORT=t.TYPED_ARRAY_SUPPORT!==undefined?t.TYPED_ARRAY_SUPPORT:e();tt.kMaxLength=r();function e(){try{var t=new Uint8Array(1);t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}};return t.foo()===42&&typeof t.subarray==="function"&&t.subarray(1,1).byteLength===0}catch(t){return false}}function r(){return c.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(t,e){if(r()<e){throw new RangeError("Invalid typed array length")}if(c.TYPED_ARRAY_SUPPORT){t=new Uint8Array(e);t.__proto__=c.prototype}else{if(t===null){t=new c(e)}t.length=e}return t}function c(t,e,r){if(!c.TYPED_ARRAY_SUPPORT&&!(this instanceof c)){return new c(t,e,r)}if(typeof t==="number"){if(typeof e==="string"){throw new Error("If encoding is specified then the first argument must be a string")}return l(this,t)}return i(this,t,e,r)}c.poolSize=8192;c._augment=function(t){t.__proto__=c.prototype;return t};function i(t,e,r,n){if(typeof e==="number"){throw new TypeError('"value" argument must not be a number')}if(typeof ArrayBuffer!=="undefined"&&e instanceof ArrayBuffer){return p(t,e,r,n)}if(typeof e==="string"){return h(t,e,r)}return g(t,e)}c.from=function(t,e,r){return i(null,t,e,r)};if(c.TYPED_ARRAY_SUPPORT){c.prototype.__proto__=Uint8Array.prototype;c.__proto__=Uint8Array;if(typeof Symbol!=="undefined"&&Symbol.species&&c[Symbol.species]===c){Object.defineProperty(c,Symbol.species,{value:null,configurable:true})}}function u(t){if(typeof t!=="number"){throw new TypeError('"size" argument must be a number')}else if(t<0){throw new RangeError('"size" argument must not be negative')}}function s(t,e,r,n){u(e);if(e<=0){return o(t,e)}if(r!==undefined){return typeof n==="string"?o(t,e).fill(r,n):o(t,e).fill(r)}return o(t,e)}c.alloc=function(t,e,r){return s(null,t,e,r)};function l(t,e){u(e);t=o(t,e<0?0:y(e)|0);if(!c.TYPED_ARRAY_SUPPORT){for(var r=0;r<e;++r){t[r]=0}}return t}c.allocUnsafe=function(t){return l(null,t)};c.allocUnsafeSlow=function(t){return l(null,t)};function h(t,e,r){if(typeof r!=="string"||r===""){r="utf8"}if(!c.isEncoding(r)){throw new TypeError('"encoding" must be a valid string encoding')}var n=w(e,r)|0;t=o(t,n);var i=t.write(e,r);if(i!==n){t=t.slice(0,i)}return t}function v(t,e){var r=e.length<0?0:y(e.length)|0;t=o(t,r);for(var n=0;n<r;n+=1){t[n]=e[n]&255}return t}function p(t,e,r,n){e.byteLength;if(r<0||e.byteLength<r){throw new RangeError("'offset' is out of bounds")}if(e.byteLength<r+(n||0)){throw new RangeError("'length' is out of bounds")}if(r===undefined&&n===undefined){e=new Uint8Array(e)}else if(n===undefined){e=new Uint8Array(e,r)}else{e=new Uint8Array(e,r,n)}if(c.TYPED_ARRAY_SUPPORT){t=e;t.__proto__=c.prototype}else{t=v(t,e)}return t}function g(t,e){if(c.isBuffer(e)){var r=y(e.length)|0;t=o(t,r);if(t.length===0){return t}e.copy(t,0,0,r);return t}if(e){if(typeof ArrayBuffer!=="undefined"&&e.buffer instanceof ArrayBuffer||"length"in e){if(typeof e.length!=="number"||X(e.length)){return o(t,0)}return v(t,e)}if(e.type==="Buffer"&&f(e.data)){return v(t,e.data)}}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function y(t){if(t>=r()){throw new RangeError("Attempt to allocate Buffer larger than maximum "+"size: 0x"+r().toString(16)+" bytes")}return t|0}function d(t){if(+t!=t){t=0}return c.alloc(+t)}c.isBuffer=function t(e){return!!(e!=null&&e._isBuffer)};c.compare=function t(e,r){if(!c.isBuffer(e)||!c.isBuffer(r)){throw new TypeError("Arguments must be Buffers")}if(e===r)return 0;var n=e.length;var i=r.length;for(var a=0,o=Math.min(n,i);a<o;++a){if(e[a]!==r[a]){n=e[a];i=r[a];break}}if(n<i)return-1;if(i<n)return 1;return 0};c.isEncoding=function t(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return true;default:return false}};c.concat=function t(e,r){if(!f(e)){throw new TypeError('"list" argument must be an Array of Buffers')}if(e.length===0){return c.alloc(0)}var n;if(r===undefined){r=0;for(n=0;n<e.length;++n){r+=e[n].length}}var i=c.allocUnsafe(r);var a=0;for(n=0;n<e.length;++n){var o=e[n];if(!c.isBuffer(o)){throw new TypeError('"list" argument must be an Array of Buffers')}o.copy(i,a);a+=o.length}return i};function w(t,e){if(c.isBuffer(t)){return t.length}if(typeof ArrayBuffer!=="undefined"&&typeof ArrayBuffer.isView==="function"&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer)){return t.byteLength}if(typeof t!=="string"){t=""+t}var r=t.length;if(r===0)return 0;var n=false;for(;;){switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case undefined:return Z(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return K(t).length;default:if(n)return Z(t).length;e=(""+e).toLowerCase();n=true}}}c.byteLength=w;function _(t,e,r){var n=false;if(e===undefined||e<0){e=0}if(e>this.length){return""}if(r===undefined||r>this.length){r=this.length}if(r<=0){return""}r>>>=0;e>>>=0;if(r<=e){return""}if(!t)t="utf8";while(true){switch(t){case"hex":return j(this,e,r);case"utf8":case"utf-8":return I(this,e,r);case"ascii":return Y(this,e,r);case"latin1":case"binary":return x(this,e,r);case"base64":return O(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return M(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase();n=true}}}c.prototype._isBuffer=true;function m(t,e,r){var n=t[e];t[e]=t[r];t[r]=n}c.prototype.swap16=function t(){var e=this.length;if(e%2!==0){throw new RangeError("Buffer size must be a multiple of 16-bits")}for(var r=0;r<e;r+=2){m(this,r,r+1)}return this};c.prototype.swap32=function t(){var e=this.length;if(e%4!==0){throw new RangeError("Buffer size must be a multiple of 32-bits")}for(var r=0;r<e;r+=4){m(this,r,r+3);m(this,r+1,r+2)}return this};c.prototype.swap64=function t(){var e=this.length;if(e%8!==0){throw new RangeError("Buffer size must be a multiple of 64-bits")}for(var r=0;r<e;r+=8){m(this,r,r+7);m(this,r+1,r+6);m(this,r+2,r+5);m(this,r+3,r+4)}return this};c.prototype.toString=function t(){var e=this.length|0;if(e===0)return"";if(arguments.length===0)return I(this,0,e);return _.apply(this,arguments)};c.prototype.equals=function t(e){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(this===e)return true;return c.compare(this,e)===0};c.prototype.inspect=function t(){var e="";var r=tt.INSPECT_MAX_BYTES;if(this.length>0){e=this.toString("hex",0,r).match(/.{2}/g).join(" ");if(this.length>r)e+=" ... "}return"<Buffer "+e+">"};c.prototype.compare=function t(e,r,n,i,a){if(!c.isBuffer(e)){throw new TypeError("Argument must be a Buffer")}if(r===undefined){r=0}if(n===undefined){n=e?e.length:0}if(i===undefined){i=0}if(a===undefined){a=this.length}if(r<0||n>e.length||i<0||a>this.length){throw new RangeError("out of range index")}if(i>=a&&r>=n){return 0}if(i>=a){return-1}if(r>=n){return 1}r>>>=0;n>>>=0;i>>>=0;a>>>=0;if(this===e)return 0;var o=a-i;var f=n-r;var u=Math.min(o,f);var s=this.slice(i,a);var l=e.slice(r,n);for(var h=0;h<u;++h){if(s[h]!==l[h]){o=s[h];f=l[h];break}}if(o<f)return-1;if(f<o)return 1;return 0};function b(t,e,r,n,i){if(t.length===0)return-1;if(typeof r==="string"){n=r;r=0}else if(r>2147483647){r=2147483647}else if(r<-2147483648){r=-2147483648}r=+r;if(isNaN(r)){r=i?0:t.length-1}if(r<0)r=t.length+r;if(r>=t.length){if(i)return-1;else r=t.length-1}else if(r<0){if(i)r=0;else return-1}if(typeof e==="string"){e=c.from(e,n)}if(c.isBuffer(e)){if(e.length===0){return-1}return E(t,e,r,n,i)}else if(typeof e==="number"){e=e&255;if(c.TYPED_ARRAY_SUPPORT&&typeof Uint8Array.prototype.indexOf==="function"){if(i){return Uint8Array.prototype.indexOf.call(t,e,r)}else{return Uint8Array.prototype.lastIndexOf.call(t,e,r)}}return E(t,[e],r,n,i)}throw new TypeError("val must be string, number or Buffer")}function E(t,e,r,n,i){var a=1;var o=t.length;var f=e.length;if(n!==undefined){n=String(n).toLowerCase();if(n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le"){if(t.length<2||e.length<2){return-1}a=2;o/=2;f/=2;r/=2}}function u(t,e){if(a===1){return t[e]}else{return t.readUInt16BE(e*a)}}var s;if(i){var l=-1;for(s=r;s<o;s++){if(u(t,s)===u(e,l===-1?0:s-l)){if(l===-1)l=s;if(s-l+1===f)return l*a}else{if(l!==-1)s-=s-l;l=-1}}}else{if(r+f>o)r=o-f;for(s=r;s>=0;s--){var h=true;for(var c=0;c<f;c++){if(u(t,s+c)!==u(e,c)){h=false;break}}if(h)return s}}return-1}c.prototype.includes=function t(e,r,n){return this.indexOf(e,r,n)!==-1};c.prototype.indexOf=function t(e,r,n){return b(this,e,r,n,true)};c.prototype.lastIndexOf=function t(e,r,n){return b(this,e,r,n,false)};function A(t,e,r,n){r=Number(r)||0;var i=t.length-r;if(!n){n=i}else{n=Number(n);if(n>i){n=i}}var a=e.length;if(a%2!==0)throw new TypeError("Invalid hex string");if(n>a/2){n=a/2}for(var o=0;o<n;++o){var f=parseInt(e.substr(o*2,2),16);if(isNaN(f))return o;t[r+o]=f}return o}function R(t,e,r,n){return V(Z(e,t.length-r),t,r,n)}function P(t,e,r,n){return V(J(e),t,r,n)}function T(t,e,r,n){return P(t,e,r,n)}function B(t,e,r,n){return V(K(e),t,r,n)}function S(t,e,r,n){return V(q(e,t.length-r),t,r,n)}c.prototype.write=function t(e,r,n,i){if(r===undefined){i="utf8";n=this.length;r=0}else if(n===undefined&&typeof r==="string"){i=r;n=this.length;r=0}else if(isFinite(r)){r=r|0;if(isFinite(n)){n=n|0;if(i===undefined)i="utf8"}else{i=n;n=undefined}}else{throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported")}var a=this.length-r;if(n===undefined||n>a)n=a;if(e.length>0&&(n<0||r<0)||r>this.length){throw new RangeError("Attempt to write outside buffer bounds")}if(!i)i="utf8";var o=false;for(;;){switch(i){case"hex":return A(this,e,r,n);case"utf8":case"utf-8":return R(this,e,r,n);case"ascii":return P(this,e,r,n);case"latin1":case"binary":return T(this,e,r,n);case"base64":return B(this,e,r,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,e,r,n);default:if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase();o=true}}};c.prototype.toJSON=function t(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function O(t,e,r){if(e===0&&r===t.length){return n.fromByteArray(t)}else{return n.fromByteArray(t.slice(e,r))}}function I(t,e,r){r=Math.min(t.length,r);var n=[];var i=e;while(i<r){var a=t[i];var o=null;var f=a>239?4:a>223?3:a>191?2:1;if(i+f<=r){var u,s,l,h;switch(f){case 1:if(a<128){o=a}break;case 2:u=t[i+1];if((u&192)===128){h=(a&31)<<6|u&63;if(h>127){o=h}}break;case 3:u=t[i+1];s=t[i+2];if((u&192)===128&&(s&192)===128){h=(a&15)<<12|(u&63)<<6|s&63;if(h>2047&&(h<55296||h>57343)){o=h}}break;case 4:u=t[i+1];s=t[i+2];l=t[i+3];if((u&192)===128&&(s&192)===128&&(l&192)===128){h=(a&15)<<18|(u&63)<<12|(s&63)<<6|l&63;if(h>65535&&h<1114112){o=h}}}}if(o===null){o=65533;f=1}else if(o>65535){o-=65536;n.push(o>>>10&1023|55296);o=56320|o&1023}n.push(o);i+=f}return C(n)}var U=4096;function C(t){var e=t.length;if(e<=U){return String.fromCharCode.apply(String,t)}var r="";var n=0;while(n<e){r+=String.fromCharCode.apply(String,t.slice(n,n+=U))}return r}function Y(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i){n+=String.fromCharCode(t[i]&127)}return n}function x(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i){n+=String.fromCharCode(t[i])}return n}function j(t,e,r){var n=t.length;if(!e||e<0)e=0;if(!r||r<0||r>n)r=n;var i="";for(var a=e;a<r;++a){i+=G(t[a])}return i}function M(t,e,r){var n=t.slice(e,r);var i="";for(var a=0;a<n.length;a+=2){i+=String.fromCharCode(n[a]+n[a+1]*256)}return i}c.prototype.slice=function t(e,r){var n=this.length;e=~~e;r=r===undefined?n:~~r;if(e<0){e+=n;if(e<0)e=0}else if(e>n){e=n}if(r<0){r+=n;if(r<0)r=0}else if(r>n){r=n}if(r<e)r=e;var i;if(c.TYPED_ARRAY_SUPPORT){i=this.subarray(e,r);i.__proto__=c.prototype}else{var a=r-e;i=new c(a,undefined);for(var o=0;o<a;++o){i[o]=this[o+e]}}return i};function k(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}c.prototype.readUIntLE=function t(e,r,n){e=e|0;r=r|0;if(!n)k(e,r,this.length);var i=this[e];var a=1;var o=0;while(++o<r&&(a*=256)){i+=this[e+o]*a}return i};c.prototype.readUIntBE=function t(e,r,n){e=e|0;r=r|0;if(!n){k(e,r,this.length)}var i=this[e+--r];var a=1;while(r>0&&(a*=256)){i+=this[e+--r]*a}return i};c.prototype.readUInt8=function t(e,r){if(!r)k(e,1,this.length);return this[e]};c.prototype.readUInt16LE=function t(e,r){if(!r)k(e,2,this.length);return this[e]|this[e+1]<<8};c.prototype.readUInt16BE=function t(e,r){if(!r)k(e,2,this.length);return this[e]<<8|this[e+1]};c.prototype.readUInt32LE=function t(e,r){if(!r)k(e,4,this.length);return(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};c.prototype.readUInt32BE=function t(e,r){if(!r)k(e,4,this.length);return this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};c.prototype.readIntLE=function t(e,r,n){e=e|0;r=r|0;if(!n)k(e,r,this.length);var i=this[e];var a=1;var o=0;while(++o<r&&(a*=256)){i+=this[e+o]*a}a*=128;if(i>=a)i-=Math.pow(2,8*r);return i};c.prototype.readIntBE=function t(e,r,n){e=e|0;r=r|0;if(!n)k(e,r,this.length);var i=r;var a=1;var o=this[e+--i];while(i>0&&(a*=256)){o+=this[e+--i]*a}a*=128;if(o>=a)o-=Math.pow(2,8*r);return o};c.prototype.readInt8=function t(e,r){if(!r)k(e,1,this.length);if(!(this[e]&128))return this[e];return(255-this[e]+1)*-1};c.prototype.readInt16LE=function t(e,r){if(!r)k(e,2,this.length);var n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n};c.prototype.readInt16BE=function t(e,r){if(!r)k(e,2,this.length);var n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n};c.prototype.readInt32LE=function t(e,r){if(!r)k(e,4,this.length);return this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};c.prototype.readInt32BE=function t(e,r){if(!r)k(e,4,this.length);return this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};c.prototype.readFloatLE=function t(e,r){if(!r)k(e,4,this.length);return a.read(this,e,true,23,4)};c.prototype.readFloatBE=function t(e,r){if(!r)k(e,4,this.length);return a.read(this,e,false,23,4)};c.prototype.readDoubleLE=function t(e,r){if(!r)k(e,8,this.length);return a.read(this,e,true,52,8)};c.prototype.readDoubleBE=function t(e,r){if(!r)k(e,8,this.length);return a.read(this,e,false,52,8)};function D(t,e,r,n,i,a){if(!c.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<a)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}c.prototype.writeUIntLE=function t(e,r,n,i){e=+e;r=r|0;n=n|0;if(!i){var a=Math.pow(2,8*n)-1;D(this,e,r,n,a,0)}var o=1;var f=0;this[r]=e&255;while(++f<n&&(o*=256)){this[r+f]=e/o&255}return r+n};c.prototype.writeUIntBE=function t(e,r,n,i){e=+e;r=r|0;n=n|0;if(!i){var a=Math.pow(2,8*n)-1;D(this,e,r,n,a,0)}var o=n-1;var f=1;this[r+o]=e&255;while(--o>=0&&(f*=256)){this[r+o]=e/f&255}return r+n};c.prototype.writeUInt8=function t(e,r,n){e=+e;r=r|0;if(!n)D(this,e,r,1,255,0);if(!c.TYPED_ARRAY_SUPPORT)e=Math.floor(e);this[r]=e&255;return r+1};function L(t,e,r,n){if(e<0)e=65535+e+1;for(var i=0,a=Math.min(t.length-r,2);i<a;++i){t[r+i]=(e&255<<8*(n?i:1-i))>>>(n?i:1-i)*8}}c.prototype.writeUInt16LE=function t(e,r,n){e=+e;r=r|0;if(!n)D(this,e,r,2,65535,0);if(c.TYPED_ARRAY_SUPPORT){this[r]=e&255;this[r+1]=e>>>8}else{L(this,e,r,true)}return r+2};c.prototype.writeUInt16BE=function t(e,r,n){e=+e;r=r|0;if(!n)D(this,e,r,2,65535,0);if(c.TYPED_ARRAY_SUPPORT){this[r]=e>>>8;this[r+1]=e&255}else{L(this,e,r,false)}return r+2};function N(t,e,r,n){if(e<0)e=4294967295+e+1;for(var i=0,a=Math.min(t.length-r,4);i<a;++i){t[r+i]=e>>>(n?i:3-i)*8&255}}c.prototype.writeUInt32LE=function t(e,r,n){e=+e;r=r|0;if(!n)D(this,e,r,4,4294967295,0);if(c.TYPED_ARRAY_SUPPORT){this[r+3]=e>>>24;this[r+2]=e>>>16;this[r+1]=e>>>8;this[r]=e&255}else{N(this,e,r,true)}return r+4};c.prototype.writeUInt32BE=function t(e,r,n){e=+e;r=r|0;if(!n)D(this,e,r,4,4294967295,0);if(c.TYPED_ARRAY_SUPPORT){this[r]=e>>>24;this[r+1]=e>>>16;this[r+2]=e>>>8;this[r+3]=e&255}else{N(this,e,r,false)}return r+4};c.prototype.writeIntLE=function t(e,r,n,i){e=+e;r=r|0;if(!i){var a=Math.pow(2,8*n-1);D(this,e,r,n,a-1,-a)}var o=0;var f=1;var u=0;this[r]=e&255;while(++o<n&&(f*=256)){if(e<0&&u===0&&this[r+o-1]!==0){u=1}this[r+o]=(e/f>>0)-u&255}return r+n};c.prototype.writeIntBE=function t(e,r,n,i){e=+e;r=r|0;if(!i){var a=Math.pow(2,8*n-1);D(this,e,r,n,a-1,-a)}var o=n-1;var f=1;var u=0;this[r+o]=e&255;while(--o>=0&&(f*=256)){if(e<0&&u===0&&this[r+o+1]!==0){u=1}this[r+o]=(e/f>>0)-u&255}return r+n};c.prototype.writeInt8=function t(e,r,n){e=+e;r=r|0;if(!n)D(this,e,r,1,127,-128);if(!c.TYPED_ARRAY_SUPPORT)e=Math.floor(e);if(e<0)e=255+e+1;this[r]=e&255;return r+1};c.prototype.writeInt16LE=function t(e,r,n){e=+e;r=r|0;if(!n)D(this,e,r,2,32767,-32768);if(c.TYPED_ARRAY_SUPPORT){this[r]=e&255;this[r+1]=e>>>8}else{L(this,e,r,true)}return r+2};c.prototype.writeInt16BE=function t(e,r,n){e=+e;r=r|0;if(!n)D(this,e,r,2,32767,-32768);if(c.TYPED_ARRAY_SUPPORT){this[r]=e>>>8;this[r+1]=e&255}else{L(this,e,r,false)}return r+2};c.prototype.writeInt32LE=function t(e,r,n){e=+e;r=r|0;if(!n)D(this,e,r,4,2147483647,-2147483648);if(c.TYPED_ARRAY_SUPPORT){this[r]=e&255;this[r+1]=e>>>8;this[r+2]=e>>>16;this[r+3]=e>>>24}else{N(this,e,r,true)}return r+4};c.prototype.writeInt32BE=function t(e,r,n){e=+e;r=r|0;if(!n)D(this,e,r,4,2147483647,-2147483648);if(e<0)e=4294967295+e+1;if(c.TYPED_ARRAY_SUPPORT){this[r]=e>>>24;this[r+1]=e>>>16;this[r+2]=e>>>8;this[r+3]=e&255}else{N(this,e,r,false)}return r+4};function F(t,e,r,n,i,a){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function $(t,e,r,n,i){if(!i){F(t,e,r,4,34028234663852886e22,-34028234663852886e22)}a.write(t,e,r,n,23,4);return r+4}c.prototype.writeFloatLE=function t(e,r,n){return $(this,e,r,true,n)};c.prototype.writeFloatBE=function t(e,r,n){return $(this,e,r,false,n)};function z(t,e,r,n,i){if(!i){F(t,e,r,8,17976931348623157e292,-17976931348623157e292)}a.write(t,e,r,n,52,8);return r+8}c.prototype.writeDoubleLE=function t(e,r,n){return z(this,e,r,true,n)};c.prototype.writeDoubleBE=function t(e,r,n){return z(this,e,r,false,n)};c.prototype.copy=function t(e,r,n,i){if(!n)n=0;if(!i&&i!==0)i=this.length;if(r>=e.length)r=e.length;if(!r)r=0;if(i>0&&i<n)i=n;if(i===n)return 0;if(e.length===0||this.length===0)return 0;if(r<0){throw new RangeError("targetStart out of bounds")}if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(i<0)throw new RangeError("sourceEnd out of bounds");if(i>this.length)i=this.length;if(e.length-r<i-n){i=e.length-r+n}var a=i-n;var o;if(this===e&&n<r&&r<i){for(o=a-1;o>=0;--o){e[o+r]=this[o+n]}}else if(a<1e3||!c.TYPED_ARRAY_SUPPORT){for(o=0;o<a;++o){e[o+r]=this[o+n]}}else{Uint8Array.prototype.set.call(e,this.subarray(n,n+a),r)}return a};c.prototype.fill=function t(e,r,n,i){if(typeof e==="string"){if(typeof r==="string"){i=r;r=0;n=this.length}else if(typeof n==="string"){i=n;n=this.length}if(e.length===1){var a=e.charCodeAt(0);if(a<256){e=a}}if(i!==undefined&&typeof i!=="string"){throw new TypeError("encoding must be a string")}if(typeof i==="string"&&!c.isEncoding(i)){throw new TypeError("Unknown encoding: "+i)}}else if(typeof e==="number"){e=e&255}if(r<0||this.length<r||this.length<n){throw new RangeError("Out of range index")}if(n<=r){return this}r=r>>>0;n=n===undefined?this.length:n>>>0;if(!e)e=0;var o;if(typeof e==="number"){for(o=r;o<n;++o){this[o]=e}}else{var f=c.isBuffer(e)?e:Z(new c(e,i).toString());var u=f.length;for(o=0;o<n-r;++o){this[o+r]=f[o%u]}}return this};var Q=/[^+\/0-9A-Za-z-_]/g;function H(t){t=W(t).replace(Q,"");if(t.length<2)return"";while(t.length%4!==0){t=t+"="}return t}function W(t){if(t.trim)return t.trim();return t.replace(/^\s+|\s+$/g,"")}function G(t){if(t<16)return"0"+t.toString(16);return t.toString(16)}function Z(t,e){e=e||Infinity;var r;var n=t.length;var i=null;var a=[];for(var o=0;o<n;++o){r=t.charCodeAt(o);if(r>55295&&r<57344){if(!i){if(r>56319){if((e-=3)>-1)a.push(239,191,189);continue}else if(o+1===n){if((e-=3)>-1)a.push(239,191,189);continue}i=r;continue}if(r<56320){if((e-=3)>-1)a.push(239,191,189);i=r;continue}r=(i-55296<<10|r-56320)+65536}else if(i){if((e-=3)>-1)a.push(239,191,189)}i=null;if(r<128){if((e-=1)<0)break;a.push(r)}else if(r<2048){if((e-=2)<0)break;a.push(r>>6|192,r&63|128)}else if(r<65536){if((e-=3)<0)break;a.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((e-=4)<0)break;a.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else{throw new Error("Invalid code point")}}return a}function J(t){var e=[];for(var r=0;r<t.length;++r){e.push(t.charCodeAt(r)&255)}return e}function q(t,e){var r,n,i;var a=[];for(var o=0;o<t.length;++o){if((e-=2)<0)break;r=t.charCodeAt(o);n=r>>8;i=r%256;a.push(i);a.push(n)}return a}function K(t){return n.toByteArray(H(t))}function V(t,e,r,n){for(var i=0;i<n;++i){if(i+r>=e.length||i>=t.length)break;e[i+r]=t[i]}return i}function X(t){return t!==t}}).call(this,et("Jhcj"))},F3So:function(t,e){e.read=function(t,e,r,n,i){var a,o;var f=i*8-n-1;var u=(1<<f)-1;var s=u>>1;var l=-7;var h=r?i-1:0;var c=r?-1:1;var v=t[e+h];h+=c;a=v&(1<<-l)-1;v>>=-l;l+=f;for(;l>0;a=a*256+t[e+h],h+=c,l-=8){}o=a&(1<<-l)-1;a>>=-l;l+=n;for(;l>0;o=o*256+t[e+h],h+=c,l-=8){}if(a===0){a=1-s}else if(a===u){return o?NaN:(v?-1:1)*Infinity}else{o=o+Math.pow(2,n);a=a-s}return(v?-1:1)*o*Math.pow(2,a-n)};e.write=function(t,e,r,n,i,a){var o,f,u;var s=a*8-i-1;var l=(1<<s)-1;var h=l>>1;var c=i===23?Math.pow(2,-24)-Math.pow(2,-77):0;var v=n?0:a-1;var p=n?1:-1;var g=e<0||e===0&&1/e<0?1:0;e=Math.abs(e);if(isNaN(e)||e===Infinity){f=isNaN(e)?1:0;o=l}else{o=Math.floor(Math.log(e)/Math.LN2);if(e*(u=Math.pow(2,-o))<1){o--;u*=2}if(o+h>=1){e+=c/u}else{e+=c*Math.pow(2,1-h)}if(e*u>=2){o++;u/=2}if(o+h>=l){f=0;o=l}else if(o+h>=1){f=(e*u-1)*Math.pow(2,i);o=o+h}else{f=e*Math.pow(2,h-1)*Math.pow(2,i);o=0}}for(;i>=8;t[r+v]=f&255,v+=p,f/=256,i-=8){}o=o<<i|f;s+=i;for(;s>0;t[r+v]=o&255,v+=p,o/=256,s-=8){}t[r+v-p]|=g*128}},Gf9Q:function(t,e,r){},OuBy:function(t,e,r){"use strict";r.r(e);var n=r("GNMU");var i=r("9w2N");var a=r("eo8p");var o=r("CO9E");var f=r.n(o);var u=function(){var t=this;var e=t.$createElement;var r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("router-view")],1)};var s=[];var l={name:"App"};var h=l;var c=r("Qbu0");var v=r("MF7y");var p=Object(v["a"])(h,u,s,false,null,null,null);var g=p.exports;var y=r("/KYB");var d=r("YQvC");var w=[{path:"/",name:"dashboard",component:function t(e){return Promise.resolve().then(function(){var t=[r("/KYB")];e.apply(null,t)}.bind(this)).catch(r.oe)},children:[{path:"dashboard",component:function t(e){return Promise.resolve().then(function(){var t=[r("YQvC")];e.apply(null,t)}.bind(this)).catch(r.oe)}}]}];var _=w;var m={sidebar:false};var b={};var E={SIDEBAR:function t(e,r){e.sidebar=r}};var A={};var R={state:m,getters:b,mutations:E,actions:A};var P=r("hIvp");var T=r("TbYA");n["default"].use(i["a"]);n["default"].use(a["a"]);n["default"].use(f.a);var B=new i["a"]({routes:_,scrollBehavior:function t(e,r,n){if(n){return n}else{return{x:0,y:0}}}});var S=new a["a"].Store(R);n["default"].config.productionTip=false;new n["default"]({el:"#app",router:B,store:S,components:{App:g},template:"<App/>"})},Qbu0:function(t,e,r){"use strict";var n=r("mSxA");var i=r.n(n);var a=i.a},TQtR:function(t,e,r){"use strict";var n=r("oZWe");var i=r.n(n);var a=i.a},TbYA:function(e,t,r){(function(P){var t=function(){"use strict";function _(t,e){return e!=null&&t instanceof e}var m;try{m=Map}catch(t){m=function(){}}var b;try{b=Set}catch(t){b=function(){}}var E;try{E=Promise}catch(t){E=function(){}}function A(t,c,e,v,p){if(typeof c==="object"){e=c.depth;v=c.prototype;p=c.includeNonEnumerable;c=c.circular}var g=[];var y=[];var d=typeof P!="undefined";if(typeof c=="undefined")c=true;if(typeof e=="undefined")e=Infinity;function w(t,i){if(t===null)return null;if(i===0)return t;var a;var e;if(typeof t!="object"){return t}if(_(t,m)){a=new m}else if(_(t,b)){a=new b}else if(_(t,E)){a=new E(function(e,r){t.then(function(t){e(w(t,i-1))},function(t){r(w(t,i-1))})})}else if(A.__isArray(t)){a=[]}else if(A.__isRegExp(t)){a=new RegExp(t.source,R(t));if(t.lastIndex)a.lastIndex=t.lastIndex}else if(A.__isDate(t)){a=new Date(t.getTime())}else if(d&&P.isBuffer(t)){if(P.allocUnsafe){a=P.allocUnsafe(t.length)}else{a=new P(t.length)}t.copy(a);return a}else if(_(t,Error)){a=Object.create(t)}else{if(typeof v=="undefined"){e=Object.getPrototypeOf(t);a=Object.create(e)}else{a=Object.create(v);e=v}}if(c){var r=g.indexOf(t);if(r!=-1){return y[r]}g.push(t);y.push(a)}if(_(t,m)){t.forEach(function(t,e){var r=w(e,i-1);var n=w(t,i-1);a.set(r,n)})}if(_(t,b)){t.forEach(function(t){var e=w(t,i-1);a.add(e)})}for(var n in t){var o;if(e){o=Object.getOwnPropertyDescriptor(e,n)}if(o&&o.set==null){continue}a[n]=w(t[n],i-1)}if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(t);for(var n=0;n<f.length;n++){var u=f[n];var s=Object.getOwnPropertyDescriptor(t,u);if(s&&!s.enumerable&&!p){continue}a[u]=w(t[u],i-1);if(!s.enumerable){Object.defineProperty(a,u,{enumerable:false})}}}if(p){var l=Object.getOwnPropertyNames(t);for(var n=0;n<l.length;n++){var h=l[n];var s=Object.getOwnPropertyDescriptor(t,h);if(s&&s.enumerable){continue}a[h]=w(t[h],i-1);Object.defineProperty(a,h,{enumerable:false})}}return a}return w(t,e)}A.clonePrototype=function t(e){if(e===null)return null;var r=function(){};r.prototype=e;return new r};function e(t){return Object.prototype.toString.call(t)}A.__objToStr=e;function t(t){return typeof t==="object"&&e(t)==="[object Date]"}A.__isDate=t;function r(t){return typeof t==="object"&&e(t)==="[object Array]"}A.__isArray=r;function n(t){return typeof t==="object"&&e(t)==="[object RegExp]"}A.__isRegExp=n;function R(t){var e="";if(t.global)e+="g";if(t.ignoreCase)e+="i";if(t.multiline)e+="m";return e}A.__getRegExpFlags=R;return A}();if(true&&e.exports){e.exports=t}}).call(this,r("71t8").Buffer)},YQvC:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this;var e=t.$createElement;var r=t._self._c||e;return t._m(0)};var i=[function(){var t=this;var e=t.$createElement;var r=t._self._c||e;return r("div",[r("h1",[t._v("Dashboard")]),t._v(" "),r("h1",[t._v("1112223334444")])])}];var a={};var o=a;var f=r("MF7y");var u=Object(f["a"])(o,n,i,false,null,null,null);var s=e["default"]=u.exports},ZRwL:function(t,e,r){"use strict";e.byteLength=o;e.toByteArray=f;e.fromByteArray=g;var u=[];var s=[];var l=typeof Uint8Array!=="undefined"?Uint8Array:Array;var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var i=0,a=n.length;i<a;++i){u[i]=n[i];s[n.charCodeAt(i)]=i}s["-".charCodeAt(0)]=62;s["_".charCodeAt(0)]=63;function h(t){var e=t.length;if(e%4>0){throw new Error("Invalid string. Length must be a multiple of 4")}var r=t.indexOf("=");if(r===-1)r=e;var n=r===e?0:4-r%4;return[r,n]}function o(t){var e=h(t);var r=e[0];var n=e[1];return(r+n)*3/4-n}function c(t,e,r){return(e+r)*3/4-r}function f(t){var e;var r=h(t);var n=r[0];var i=r[1];var a=new l(c(t,n,i));var o=0;var f=i>0?n-4:n;for(var u=0;u<f;u+=4){e=s[t.charCodeAt(u)]<<18|s[t.charCodeAt(u+1)]<<12|s[t.charCodeAt(u+2)]<<6|s[t.charCodeAt(u+3)];a[o++]=e>>16&255;a[o++]=e>>8&255;a[o++]=e&255}if(i===2){e=s[t.charCodeAt(u)]<<2|s[t.charCodeAt(u+1)]>>4;a[o++]=e&255}if(i===1){e=s[t.charCodeAt(u)]<<10|s[t.charCodeAt(u+1)]<<4|s[t.charCodeAt(u+2)]>>2;a[o++]=e>>8&255;a[o++]=e&255}return a}function v(t){return u[t>>18&63]+u[t>>12&63]+u[t>>6&63]+u[t&63]}function p(t,e,r){var n;var i=[];for(var a=e;a<r;a+=3){n=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(t[a+2]&255);i.push(v(n))}return i.join("")}function g(t){var e;var r=t.length;var n=r%3;var i=[];var a=16383;for(var o=0,f=r-n;o<f;o+=a){i.push(p(t,o,o+a>f?f:o+a))}if(n===1){e=t[r-1];i.push(u[e>>2]+u[e<<4&63]+"==")}else if(n===2){e=(t[r-2]<<8)+t[r-1];i.push(u[e>>10]+u[e>>4&63]+u[e<<2&63]+"=")}return i.join("")}},mSxA:function(t,e,r){},n2Pq:function(t,e,r){"use strict";var n=r("+7Ma");var i=r.n(n);var a=i.a},oZWe:function(t,e,r){},rHWL:function(t,e,r){"use strict";var n=r("wRpG");var i=r.n(n);var a=i.a},u3k6:function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return r.call(t)=="[object Array]"}},wRpG:function(t,e,r){}},[["OuBy",9,0,1]]]);