(function(l){function e(e){var t=e[0];var r=e[1];var a=e[2];var n,s,o=0,i=[];for(;o<t.length;o++){s=t[o];if(v[s]){i.push(v[s][0])}v[s]=0}for(n in r){if(Object.prototype.hasOwnProperty.call(r,n)){l[n]=r[n]}}if(f)f(e);while(i.length){i.shift()()}c.push.apply(c,a||[]);return u()}function u(){var e;for(var t=0;t<c.length;t++){var r=c[t];var a=true;for(var n=1;n<r.length;n++){var s=r[n];if(v[s]!==0)a=false}if(a){c.splice(t--,1);e=o(o.s=r[0])}}return e}var r={};var v={3:0};var c=[];function o(e){if(r[e]){return r[e].exports}var t=r[e]={i:e,l:false,exports:{}};l[e].call(t.exports,t,t.exports,o);t.l=true;return t.exports}o.m=l;o.c=r;o.d=function(e,t,r){if(!o.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:r})}};o.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};o.t=function(t,e){if(e&1)t=o(t);if(e&8)return t;if(e&4&&typeof t==="object"&&t&&t.__esModule)return t;var r=Object.create(null);o.r(r);Object.defineProperty(r,"default",{enumerable:true,value:t});if(e&2&&typeof t!="string")for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r};o.n=function(t){var e=t&&t.__esModule?function e(){return t["default"]}:function e(){return t};o.d(e,"a",e);return e};o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};o.p="/";var t=window["webpackJsonp"]=window["webpackJsonp"]||[];var a=t.push.bind(t);t.push=e;t=t.slice();for(var n=0;n<t.length;n++)e(t[n]);var f=a;c.push(["aF1+",0,1]);return u()})({"+MJi":function(e,t,r){"use strict";var a=r("3NXA");var n=r.n(a);var s=n.a},"/asr":function(e,t,r){"use strict";var a=function(){var e=this;var t=e.$createElement;var r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._v(" "),r("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),r("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])};var n=[function(){var e=this;var t=e.$createElement;var r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),r("br"),e._v(" "),r("li",[r("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this;var t=e.$createElement;var r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[e._v("\n        vue-router\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[e._v("\n        vuex\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[e._v("\n        vue-loader\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[e._v("\n        awesome-vue\n      ")])])])}];var s={name:"HelloWorld",data:function e(){return{msg:"Welcome to Your Vue.js App12"}}};var o=s;var i=r("rHWL");var l=r("MF7y");var u=Object(l["a"])(o,a,n,false,null,"453c3e14",null);var v=t["a"]=u.exports},"1q3/":function(e,t,r){"use strict";var a=r("g1AY");var n=r.n(a);var s=n.a},"3NXA":function(e,t,r){},C0Oc:function(e,t,r){},NeTt:function(e,t,r){"use strict";var a=r("C0Oc");var n=r.n(a);var s=n.a},VTna:function(e,t,r){"use strict";var a=r("d8U+");var n=r.n(a);var s=n.a},"aF1+":function(e,t,r){"use strict";r.r(t);var a=r("GNMU");var n=r("9w2N");var s=r("eo8p");var o=r("CO9E");var i=r.n(o);var l=function(){var e=this;var t=e.$createElement;var r=e._self._c||t;return r("div",{staticClass:"wrapper"},[r("router-view")],1)};var u=[];var v={name:"App"};var c=v;var f=r("+MJi");var p=r("MF7y");var d=Object(p["a"])(c,l,u,false,null,null,null);var h=d.exports;var m=function(){var e=this;var t=e.$createElement;var r=e._self._c||t;return r("div",{staticClass:"layout"},[r("Layout",{staticClass:"ivu-layout-has-sider",style:{minHeight:"100vh"}},[r("Sidebar"),e._v(" "),r("Layout",[r("Navbar"),e._v(" "),r("Content",{style:{margin:"20px",background:"#fff",minHeight:"260px"}},[r("router-view")],1)],1)],1)],1)};var _=[];var b=function(){var t=this;var e=t.$createElement;var r=t._self._c||e;return r("Sider",{ref:"side1",attrs:{"hide-trigger":"",collapsible:"","collapsed-width":78},model:{value:t.isCollapsed,callback:function(e){t.isCollapsed=e},expression:"isCollapsed"}},[r("Menu",{class:t.menuitemClasses,attrs:{"active-name":"1-2",theme:"dark",width:"auto"}},[r("MenuItem",{attrs:{name:"1-1"}},[r("Icon",{attrs:{type:"ios-navigate"}}),t._v(" "),r("span",[t._v("Option 1")])],1),t._v(" "),r("MenuItem",{attrs:{name:"1-2"}},[r("Icon",{attrs:{type:"ios-search"}}),t._v(" "),r("span",[t._v("Option 2")])],1),t._v(" "),r("MenuItem",{attrs:{name:"1-3"}},[r("Icon",{attrs:{type:"ios-settings"}}),t._v(" "),r("span",[t._v("Option 3")])],1)],1)],1)};var g=[];var y={computed:{isCollapsed:function e(){return this.$store.state.sidebar},menuitemClasses:function e(){return["menu-item",this.isCollapsed?"collapsed-menu":""]}}};var w=y;var j=r("1q3/");var C=Object(p["a"])(w,b,g,false,null,null,null);var O=C.exports;var x=function(){var t=this;var e=t.$createElement;var r=t._self._c||e;return r("Header",{staticClass:"layout-header-bar",style:{padding:0}},[r("Icon",{class:t.rotateIcon,style:{margin:"0 20px"},attrs:{type:"md-menu",size:"24"},nativeOn:{click:function(e){return t.collapsedSider(e)}}})],1)};var k=[];var E={computed:{rotateIcon:function e(){return["menu-icon",this.$store.state.siderbar?"rotate-icon":""]}},methods:{collapsedSider:function e(){this.$store.commit("SIDEBAR",!this.$store.state.sidebar)}}};var M=E;var S=r("VTna");var $=Object(p["a"])(M,x,k,false,null,"7659499c",null);var I=$.exports;var A=r("/asr");var T={components:{Sidebar:O,Navbar:I,HelloWorld:A["a"]},data:function e(){return{isCollapsed:false}},computed:{rotateIcon:function e(){return["menu-icon",this.isCollapsed?"rotate-icon":""]},menuitemClasses:function e(){return["menu-item",this.isCollapsed?"collapsed-menu":""]}},methods:{collapsedSider:function e(){this.$refs.side1.toggleCollapse()}}};var N=T;var H=r("NeTt");var J=Object(p["a"])(N,m,_,false,null,"2d063386",null);var P=J.exports;var F=r("nJba");var D=[{path:"/",name:"dashboard",component:P,children:[{path:"dashboard",component:function e(t){return Promise.resolve().then(function(){var e=[r("nJba")];t.apply(null,e)}.bind(this)).catch(r.oe)}}]}];var L=D;var W={sidebar:false};var R={};var B={SIDEBAR:function e(t,r){t.sidebar=r}};var G={};var U={state:W,getters:R,mutations:B,actions:G};var V=r("hIvp");a["default"].use(n["a"]);a["default"].use(s["a"]);a["default"].use(i.a);var Y=new n["a"]({routes:L,scrollBehavior:function e(t,r,a){if(a){return a}else{return{x:0,y:0}}}});var q=new s["a"].Store(U);a["default"].config.productionTip=false;new a["default"]({el:"#app",router:Y,store:q,components:{App:h},template:"<App/>"})},"d8U+":function(e,t,r){},g1AY:function(e,t,r){},nJba:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this;var t=e.$createElement;var r=e._self._c||t;return e._m(0)};var n=[function(){var e=this;var t=e.$createElement;var r=e._self._c||t;return r("div",[r("h1",[e._v("Dashboard")])])}];var s={};var o=s;var i=r("MF7y");var l=Object(i["a"])(o,a,n,false,null,null,null);var u=t["default"]=l.exports},rHWL:function(e,t,r){"use strict";var a=r("wRpG");var n=r.n(a);var s=n.a},wRpG:function(e,t,r){}});