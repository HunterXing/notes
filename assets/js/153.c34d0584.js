(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{825:function(t,a,s){"use strict";s.r(a);var e=s(4),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、目的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、目的"}},[t._v("#")]),t._v(" 一、目的")]),t._v(" "),s("p",[t._v("实现服务端同一域名下部署多个vue项目或者react项目。")]),t._v(" "),s("h2",{attrs:{id:"二、静态资源所在目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、静态资源所在目录结构"}},[t._v("#")]),t._v(" 二、静态资源所在目录结构")]),t._v(" "),s("p",[t._v("比如网站静态资源所在目录结构如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n    ├── index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html\n    ├── react\n    └── vue\n")])])]),s("p",[t._v("然后用下面两个相同域名，不同的子目录，可以访问不同的工程")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://你的网址/react\nhttp://你的网址/vue\n")])])]),s("h2",{attrs:{id:"三、修改前端工程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、修改前端工程"}},[t._v("#")]),t._v(" 三、修改前端工程")]),t._v(" "),s("h3",{attrs:{id:"_1-index-html文件修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-index-html文件修改"}},[t._v("#")]),t._v(" 1. index.html文件修改")]),t._v(" "),s("p",[t._v("添加如下mata")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<meta base="/子目录名/">\n')])])]),s("h3",{attrs:{id:"_2-打包后的静态资源添加publicpath-已react为例子-配置webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-打包后的静态资源添加publicpath-已react为例子-配置webpack"}},[t._v("#")]),t._v(" 2. 打包后的静态资源添加publicPath，已react为例子，配置webpack")]),t._v(" "),s("p",[t._v("打包的静态资源才能正确指向")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('publicPath: "/react/"\n')])])]),s("h3",{attrs:{id:"_3-路由基路由修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-路由基路由修改"}},[t._v("#")]),t._v(" 3. 路由基路由修改")]),t._v(" "),s("p",[t._v("Vue-router修改baseUrl")]),t._v(" "),s("p",[t._v("React-router修改basename")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<BrowserRouter\n  basename={string}\n  forceRefresh={bool}\n  getUserConfirmation={func}\n  keyLength={number}\n>\n  <App />\n</BrowserRouter>\n")])])]),s("h2",{attrs:{id:"四、nginx-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、nginx-配置"}},[t._v("#")]),t._v(" 四、nginx 配置")]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" 你的网址"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#不修改此处，确保用户直接输入ip+端口无法访问到系统")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("var"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("react "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("#添加前缀"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("但html中存放react的目录名尽量也要改成相同名字\n           "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alias")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("var"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("react"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try_files")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("  @router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("vue "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("#添加前缀"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("但html中存放vue的目录名尽量也要改成相同名字\n           "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("alias")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("var"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try_files")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 保证react history模式路由刷新之后，不会"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" @router "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rewrite")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("$ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("react"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html last"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);