(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{515:function(t,a,s){t.exports=s.p+"assets/img/image-20210818221426180.e180cfbf.png"},516:function(t,a,s){t.exports=s.p+"assets/img/image-20210818221448871.bfc23ac2.png"},713:function(t,a,s){"use strict";s.r(a);var n=s(4),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h4",{attrs:{id:"bfc的基本概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bfc的基本概念"}},[t._v("#")]),t._v(" BFC的基本概念")]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("块格式化上下文（Block Formatting Context，BFC）")]),t._v(" 是Web页面的可视化CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。   ——"),n("strong",[t._v("来自MDN")])])]),t._v(" "),n("h4",{attrs:{id:"如何创建bfc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何创建bfc"}},[t._v("#")]),t._v(" 如何创建BFC")]),t._v(" "),n("blockquote",[n("p",[t._v("下列方式会创建"),n("strong",[t._v("块格式化上下文")]),t._v("：")])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("根元素("),n("code",[t._v("<html>")]),t._v(")")])]),t._v(" "),n("li",[n("p",[t._v("浮动元素（元素的 "),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/float",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("float")]),n("OutboundLink")],1),t._v(" 不是 "),n("code",[t._v("none")]),t._v("）")])]),t._v(" "),n("li",[n("p",[t._v("绝对定位元素（元素的 "),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/position",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("position")]),n("OutboundLink")],1),t._v(" 为 "),n("code",[t._v("absolute")]),t._v(" 或 "),n("code",[t._v("fixed")]),t._v("）")])]),t._v(" "),n("li",[n("p",[t._v("行内块元素（元素的 "),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/display",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("display")]),n("OutboundLink")],1),t._v(" 为 "),n("code",[t._v("inline-block")]),t._v("）")])]),t._v(" "),n("li",[n("p",[t._v("表格单元格（元素的 "),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/display",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("display")]),n("OutboundLink")],1),t._v("为 "),n("code",[t._v("table-cell")]),t._v("，HTML表格单元格默认为该值）")])]),t._v(" "),n("li",[n("p",[t._v("表格标题（元素的 "),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/display",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("display")]),n("OutboundLink")],1),t._v(" 为 "),n("code",[t._v("table-caption")]),t._v("，HTML表格标题默认为该值）")])]),t._v(" "),n("li",[n("p",[t._v("匿名表格单元格元素（元素的 "),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/display",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("display")]),n("OutboundLink")],1),t._v("为 "),n("code",[t._v("table、``table-row")]),t._v("、 "),n("code",[t._v("table-row-group、``table-header-group、``table-footer-group")]),t._v("（分别是HTML table、row、tbody、thead、tfoot的默认属性）或 "),n("code",[t._v("inline-table")]),t._v("）")])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("overflow")]),n("OutboundLink")],1),t._v(" 值不为 "),n("code",[t._v("visible")]),t._v(" 的块元素")])]),t._v(" "),n("li",[n("p",[t._v("**"),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/display",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("display")]),n("OutboundLink")],1),t._v(" 值为 "),n("code",[t._v("flow-root")]),t._v(" 的元素 ， ** "),n("strong",[t._v("可以创建无副作用的BFC")]),t._v("（火狐53+，chrome58+，opera45+支持）")])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/contain",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("contain")]),n("OutboundLink")],1),t._v(" 值为 "),n("code",[t._v("layout")]),t._v("、"),n("code",[t._v("content")]),t._v("或 paint 的元素")])]),t._v(" "),n("li",[n("p",[t._v("弹性元素（"),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/display",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("display")]),n("OutboundLink")],1),t._v("为 "),n("code",[t._v("flex")]),t._v(" 或 "),n("code",[t._v("inline-flex")]),t._v("元素的直接子元素）")])]),t._v(" "),n("li",[n("p",[t._v("网格元素（"),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/display",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("display")]),n("OutboundLink")],1),t._v("为 "),n("code",[t._v("grid")]),t._v(" 或 "),n("code",[t._v("inline-grid")]),t._v(" 元素的直接子元素）")])]),t._v(" "),n("li",[n("p",[t._v("多列容器（元素的 "),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-count",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("column-count")]),n("OutboundLink")],1),t._v(" 或 "),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-width",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("column-width")]),n("OutboundLink")],1),t._v(" 不为 "),n("code",[t._v("auto，包括 ``column-count")]),t._v(" 为 "),n("code",[t._v("1")]),t._v("）")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("column-span")]),t._v(" 为 "),n("code",[t._v("all")]),t._v(" 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（"),n("a",{attrs:{href:"https://github.com/w3c/csswg-drafts/commit/a8634b96900279916bd6c505fda88dda71d8ec51",target:"_blank",rel:"noopener noreferrer"}},[t._v("标准变更"),n("OutboundLink")],1),t._v("，"),n("a",{attrs:{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=709362",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chrome bug"),n("OutboundLink")],1),t._v("）。")])])]),t._v(" "),n("h4",{attrs:{id:"bfc的使用场景-通过例子讲解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bfc的使用场景-通过例子讲解"}},[t._v("#")]),t._v(" BFC的使用场景（通过例子讲解）")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("清除浮动")]),t._v(" "),n("p",[n("code",[t._v("css")])]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #f00"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* BFC方式，以下任意一种 */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* overflow: auto; */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* position: absolute; */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* position: fixed; */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* display: table; */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* display: flex; */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".fl")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #0f0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("code",[t._v("html")])]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("blockquote",[n("p",[t._v("效果展示")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/13711753-cf9c6f21267aa2eb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"BFC清除浮动"}})])]),t._v(" "),n("li",[n("p",[t._v("解决外边距塌陷")]),t._v(" "),n("blockquote",[n("p",[t._v("创建新的BFC避免两个相邻 "),n("code",[t._v("<div>")]),t._v(" 之间的 "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing",target:"_blank",rel:"noopener noreferrer"}},[t._v("外边距合并"),n("OutboundLink")],1),t._v(" 问题")])]),t._v(" "),n("p",[t._v("下面代码：")]),t._v(" "),n("blockquote",[n("p",[t._v("三个p标签，距离上方15px, 下方20px")])]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 15px auto 20px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #f00"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("code",[t._v("html")])]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bfc-container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("3"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("blockquote",[n("p",[t._v("效果展示")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(515),alt:"image-20210818221426180"}}),t._v(" )")]),t._v(" "),n("blockquote",[n("p",[t._v("两个p标签之间的高度为20px, 并不是 20+15 = 45 px, 这就是边距重叠，选择最大的一个边距，及20px")])]),t._v(" "),n("p",[t._v("解决方法就是"),n("strong",[t._v("给p标签一个父元素，并创建BFC")])]),t._v(" "),n("p",[n("code",[t._v("css")])]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 15px auto 20px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #f00"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("code",[t._v("html")])]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("3"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:s(516),alt:"image-20210818221448871"}})]),t._v(" "),n("blockquote",[n("p",[t._v("这时候，中间的元素边距不会发生重叠，此时的间距就是 45px")])]),t._v(" "),n("p",[t._v("大家可以去尝试一下")])])]),t._v(" "),n("p",[t._v("参考文档：")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);