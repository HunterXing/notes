(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{796:function(t,a,e){"use strict";e.r(a);var s=e(4),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("blockquote",[e("p",[t._v("前提：知道webpack4的基础配置以及如何使用配置文件进行打包\n["),e("a",{attrs:{href:"https://www.jianshu.com/p/5b849114fe89",target:"_blank",rel:"noopener noreferrer"}},[t._v("第一讲 Webpack 4 学习01（基础配置）"),e("OutboundLink")],1),t._v("](https://www.jianshu.com/p/5b849114fe89)")])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"一、单出口形式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、单出口形式"}},[t._v("#")]),t._v(" 一、单出口形式")]),t._v(" "),e("p",[e("code",[t._v("webpack.config.js")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const path = require('path');\n\n\nmodule.exports = {\n  //单出口形式\n  entry:['./public/index.js','./public/index2.js'],//有多个文件\n  output:{\n    path:path.resolve(__dirname,'build'),\n    filename:'bundle.js'\n  }\n}\n")])])]),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/13711753-850516cd9eebe483.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image"}})]),t._v(" "),e("ul",[e("li",[e("p",[t._v("运行"),e("code",[t._v("npm run dev")])]),t._v(" "),e("blockquote",[e("p",[t._v("生成唯一的打包文件 "),e("code",[t._v("bundle.js")])])]),t._v(" "),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/13711753-f68336e70cef7458.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image"}})])])]),t._v(" "),e("h2",{attrs:{id:"二、多出口形式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、多出口形式"}},[t._v("#")]),t._v(" 二、多出口形式")]),t._v(" "),e("p",[t._v("​\t"),e("code",[t._v("webpack.config.js")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v("const path = require('path');\n\nmodule.exports = "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//多出口形式")]),t._v("\n  entry"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    entryOne"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("'./public/entryOne/index.js'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    entryTwo"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("'./public/entryTwo/index.js'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  output"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("path.resolve(__dirname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("'build')"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    filename"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".js'\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("​")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("文件结构")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/13711753-d99c4b4b8fb1fb21.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image"}})])]),t._v(" "),e("li",[e("p",[t._v("运行"),e("code",[t._v("npm run dev")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("生成两个打包文件")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/13711753-f492bcf2a6a47e94.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"image"}})])])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);