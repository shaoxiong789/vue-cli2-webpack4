(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{"/asr":function(t,e,a){"use strict";var r=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])};var s=[function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("\n        vue-router\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("\n        vuex\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("\n        vue-loader\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("\n        awesome-vue\n      ")])])])}];var n={name:"HelloWorld",data:function t(){return{msg:"Welcome to Your Vue.js App12"}}};var i=n;var o=a("rHWL");var l=a("MF7y");var v=Object(l["a"])(i,r,s,false,null,"453c3e14",null);var u=e["a"]=v.exports},"2Vph":function(t,e,a){},HuNF:function(t,e,a){"use strict";var r=a("Yxwr");var s=a.n(r);var n=s.a},Jp4F:function(t,e,a){"use strict";var r=a("2Vph");var s=a.n(r);var n=s.a},Pl8O:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"layout"},[a("Layout",{staticClass:"ivu-layout-has-sider",style:{minHeight:"100vh"}},[a("Sidebar"),t._v(" "),a("Layout",[a("Navbar"),t._v(" "),a("Content",{style:{margin:"20px",background:"#fff",minHeight:"260px"}},[a("router-view")],1)],1)],1)],1)};var s=[];var n=function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return a("Sider",{ref:"side1",attrs:{"hide-trigger":"",collapsible:"","collapsed-width":78},model:{value:e.isCollapsed,callback:function(t){e.isCollapsed=t},expression:"isCollapsed"}},[a("Menu",{class:e.menuitemClasses,attrs:{"active-name":"1-2",theme:"dark",width:"auto"}},[a("MenuItem",{attrs:{name:"1-1"}},[a("Icon",{attrs:{type:"ios-navigate"}}),e._v(" "),a("span",[e._v("Option 1")])],1),e._v(" "),a("MenuItem",{attrs:{name:"1-2"}},[a("Icon",{attrs:{type:"ios-search"}}),e._v(" "),a("span",[e._v("Option 2")])],1),e._v(" "),a("MenuItem",{attrs:{name:"1-3"}},[a("Icon",{attrs:{type:"ios-settings"}}),e._v(" "),a("span",[e._v("Option 3")])],1)],1)],1)};var i=[];var o={computed:{isCollapsed:function t(){return this.$store.state.sidebar},menuitemClasses:function t(){return["menu-item",this.isCollapsed?"collapsed-menu":""]}}};var l=o;var v=a("bI9u");var u=a("MF7y");var c=Object(u["a"])(l,n,i,false,null,null,null);var p=c.exports;var m=function(){var e=this;var t=e.$createElement;var a=e._self._c||t;return a("Header",{staticClass:"layout-header-bar",style:{padding:0}},[a("Icon",{class:e.rotateIcon,style:{margin:"0 20px"},attrs:{type:"md-menu",size:"24"},nativeOn:{click:function(t){return e.collapsedSider(t)}}})],1)};var _=[];var h={computed:{rotateIcon:function t(){return["menu-icon",this.$store.state.siderbar?"rotate-icon":""]}},methods:{collapsedSider:function t(){this.$store.commit("SIDEBAR",!this.$store.state.sidebar)}}};var f=h;var d=a("Jp4F");var b=Object(u["a"])(f,m,_,false,null,"9ea56e94",null);var g=b.exports;var w=a("/asr");var C={components:{Sidebar:p,Navbar:g,HelloWorld:w["a"]},data:function t(){return{isCollapsed:false}},computed:{rotateIcon:function t(){return["menu-icon",this.isCollapsed?"rotate-icon":""]},menuitemClasses:function t(){return["menu-item",this.isCollapsed?"collapsed-menu":""]}},methods:{collapsedSider:function t(){this.$refs.side1.toggleCollapse()}}};var k=C;var y=a("HuNF");var j=Object(u["a"])(k,r,s,false,null,"255544c1",null);var I=e["default"]=j.exports},Yxwr:function(t,e,a){},bI9u:function(t,e,a){"use strict";var r=a("wckP");var s=a.n(r);var n=s.a},rHWL:function(t,e,a){"use strict";var r=a("wRpG");var s=a.n(r);var n=s.a},wRpG:function(t,e,a){},wckP:function(t,e,a){}}]);