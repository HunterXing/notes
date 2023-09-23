(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{562:function(t,a,s){t.exports=s.p+"assets/img/image-20220417180040063.b521fa47.png"},753:function(t,a,s){"use strict";s.r(a);var n=s(4),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"一、前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),n("p",[t._v("在react中，遇到组件间的状态管理怎么做，下面我从简单场景、缓存状态、全局状态管理三个角度出发，来整理此类问题")]),t._v(" "),n("h2",{attrs:{id:"二、简单场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、简单场景"}},[t._v("#")]),t._v(" 二、简单场景")]),t._v(" "),n("blockquote",[n("p",[t._v("在比较简单的组件场景下，我们推荐使用状态提升和组件组合两种可供选择的方案")])]),t._v(" "),n("h3",{attrs:{id:"_2-1-状态提升"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-状态提升"}},[t._v("#")]),t._v(" 2.1 状态提升")]),t._v(" "),n("p",[t._v("针对一中的场景，我们可以这么做")]),t._v(" "),n("p",[t._v("我们将状态一级级的往下。这样在每个子组件中都能使用App顶层组件中的User信息和setUser方法了。")]),t._v(" "),n("p",[n("img",{attrs:{src:s(562),alt:"image-20220417180040063"}})]),t._v(" "),n("p",[t._v("代码已放在github的gist中👉 "),n("a",{attrs:{href:"https://gist.github.com/HunterXing/886248c6cb1de7322ff5a322b6ea93e1",target:"_blank",rel:"noopener noreferrer"}},[t._v("组件状态管理-状态提升"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"_2-2-组件组合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-组件组合"}},[t._v("#")]),t._v(" 2.2 组件组合")]),t._v(" "),n("p",[t._v("比如，考虑这样一个 "),n("code",[t._v("Page")]),t._v(" 组件，它层层向下传递 "),n("code",[t._v("user")]),t._v(" 和 "),n("code",[t._v("avatarSize")]),t._v(" 属性，从而让深度嵌套的 "),n("code",[t._v("Link")]),t._v(" 和 "),n("code",[t._v("Avatar")]),t._v(" 组件可以读取到这些属性：")]),t._v(" "),n("div",{staticClass:"language-jsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Page")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("user")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("avatarSize")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("avatarSize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... 渲染出 ...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PageLayout")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("user")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("avatarSize")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("avatarSize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... 渲染出 ...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NavigationBar")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("user")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("avatarSize")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("avatarSize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... 渲染出 ...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Link")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("permalink"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Avatar")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("user")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("size")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("avatarSize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Link")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("如果在最后只有 "),n("code",[t._v("Avatar")]),t._v(" 组件真的需要 "),n("code",[t._v("user")]),t._v(" 和 "),n("code",[t._v("avatarSize")]),t._v("，那么层层传递这两个 props 就显得非常冗余。而且一旦 "),n("code",[t._v("Avatar")]),t._v(" 组件需要更多从来自顶层组件的 props，你还得在中间层级一个一个加上去，这将会变得非常麻烦。")]),t._v(" "),n("p",[t._v("不使用redux或context的解决方案是"),n("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/composition-vs-inheritance.html#containment",target:"_blank",rel:"noopener noreferrer"}},[t._v("将 "),n("code",[t._v("Avatar")]),t._v(" 组件自身传递下去"),n("OutboundLink")],1),t._v("，因为中间组件无需知道 "),n("code",[t._v("user")]),t._v(" 或者 "),n("code",[t._v("avatarSize")]),t._v(" 等 props：")]),t._v(" "),n("div",{staticClass:"language-jsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" user "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" userLink "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Link")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("permalink"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Avatar")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("user")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("size")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("avatarSize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n    ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Link")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PageLayout")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("userLink")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("userLink"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 现在，我们有这样的组件：")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Page")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("user")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("avatarSize")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("avatarSize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... 渲染出 ...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PageLayout")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("userLink")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... 渲染出 ...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NavigationBar")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("userLink")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... 渲染出 ...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userLink"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("这种变化下，只有最顶部的 Page 组件需要知道 "),n("code",[t._v("Link")]),t._v(" 和 "),n("code",[t._v("Avatar")]),t._v(" 组件是如何使用 "),n("code",[t._v("user")]),t._v(" 和 "),n("code",[t._v("avatarSize")]),t._v(" 的。")]),t._v(" "),n("p",[t._v("这种对组件的"),n("em",[t._v("控制反转")]),t._v("减少了在你的应用中要传递的 props 数量，这在很多场景下会使得你的代码更加干净，使你对根组件有更多的把控。但是，这并不适用于每一个场景：这种将逻辑提升到组件树的更高层次来处理，会使得这些高层组件变得更复杂，并且会强行将低层组件适应这样的形式，这可能不会是你想要的。")]),t._v(" "),n("p",[t._v("上面⬆️的列子来源于官网")]),t._v(" "),n("h2",{attrs:{id:"三、缓存状态"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、缓存状态"}},[t._v("#")]),t._v(" 三、缓存状态")]),t._v(" "),n("h3",{attrs:{id:"_3-1-react-query"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-react-query"}},[t._v("#")]),t._v(" 3.1 react-query")]),t._v(" "),n("blockquote",[n("p",[t._v("在使用 React Hooks 编写组件时，我们常需要手动维护来自服务器的处理状态。在日常开发中引起一些麻烦。 处理异步数据时，我们需要考虑很多事情，例如更新，缓存或重新获取。 使用 React-Query 能够更高效的帮你管理服务端的状态。")])]),t._v(" "),n("p",[t._v("常规开发，如下是一个简单的从服务端获取数据的案例")]),t._v(" "),n("div",{staticClass:"language-jsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updateData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("isError"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setError"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("isLoading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setLoading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setError")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setLoading")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" axios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/user'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateData")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setError")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setLoading")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("p",[t._v("我们需要手动去维护error、loading、data等状态，特别麻烦。")]),t._v(" "),n("p",[t._v("有了react-query，我们就能这么写")]),t._v(" "),n("div",{staticClass:"language-jsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useQuery "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-query'")]),t._v("\n \n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isLoading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isError"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("useQuery")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userData'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" axios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/user'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   \n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isError"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("Error")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   \n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isLoading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("loading")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n       ")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("user")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n     ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v('例子中 "userData" 字符串就是这个 query 独一无二的key。 可以看到，React-Query封装了完整的请求中间状态（isLoading、isError...）。 不仅如此，React-Query还为我们做了如下工作：')]),t._v(" "),n("ol",[n("li",[n("strong",[t._v("多个组件请求同一个query时只发出一个请求")])]),t._v(" "),n("li",[t._v("缓存数据失效/更新策略（判断缓存合适失效，失效后自动请求数据）")]),t._v(" "),n("li",[t._v("对失效数据垃圾清理")])]),t._v(" "),n("h3",{attrs:{id:"_3-2-swr-待学习更新"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-swr-待学习更新"}},[t._v("#")]),t._v(" 3.2 swr（待学习更新）")]),t._v(" "),n("h2",{attrs:{id:"四、全局状态管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、全局状态管理"}},[t._v("#")]),t._v(" 四、全局状态管理")]),t._v(" "),n("blockquote",[n("p",[t._v("客户端浏览器一些状态怎么去全局管理呢，我们有三种方案，1. 在路由url上管理状态，2. 利用react的Context实现状态存储，3. 使用 redux-toolkit进行全局状态存储。其中2、3一般来说选择一个即可")])]),t._v(" "),n("h3",{attrs:{id:"_4-1-url"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-url"}},[t._v("#")]),t._v(" 4.1 url")]),t._v(" "),n("p",[t._v("通过在url路由上携带参数，来实现各个组件中状态的共享。此处可配合react-router一起食用更佳")]),t._v(" "),n("h3",{attrs:{id:"_4-2-context"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-context"}},[t._v("#")]),t._v(" 4.2 context")]),t._v(" "),n("p",[t._v("官方context的使用方式👉"),n("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/context.html#gatsby-focus-wrapper",target:"_blank",rel:"noopener noreferrer"}},[t._v("Context"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"_4-3-redux-推荐使用-redux-toolkit"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-redux-推荐使用-redux-toolkit"}},[t._v("#")]),t._v(" 4.3 redux (推荐使用 redux-toolkit)")]),t._v(" "),n("p",[t._v("除了redux，还有 Mobx、Recoil等工具可供学习，他们的差别可参考文章👉"),n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/394106764?utm_source=wechat_timeline&utm_medium=social&utm_oi=920304118067761152",target:"_blank",rel:"noopener noreferrer"}},[t._v("各流派 React 状态管理对比和原理实现"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/394106764?utm_source=wechat_timeline&utm_medium=social&utm_oi=920304118067761152",target:"_blank",rel:"noopener noreferrer"}},[t._v("各流派 React 状态管理对比和原理实现"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://juejin.cn/post/6937833844837974053",target:"_blank",rel:"noopener noreferrer"}},[t._v("React-Query 让你的状态管理更优雅"),n("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);