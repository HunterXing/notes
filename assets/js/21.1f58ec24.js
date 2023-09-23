(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{518:function(t,s,a){t.exports=a.p+"assets/img/20200712212205.d8da0dd2.png"},519:function(t,s,a){t.exports=a.p+"assets/img/20200712212256.b748594f.png"},520:function(t,s,a){t.exports=a.p+"assets/img/image-20220112103529281.d40343b9.png"},521:function(t,s,a){t.exports=a.p+"assets/img/image-20220112110637599.7fda7afe.png"},723:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",[t._v("JS为什么是单线程的？什么是异步？为什么要异步？单线程的JavaScript如何实现异步？什么是宏任务？什么是微任务？")])]),t._v(" "),n("h2",{attrs:{id:"一、单线程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、单线程"}},[t._v("#")]),t._v(" 一、单线程")]),t._v(" "),n("h3",{attrs:{id:"_1-1-那么js为什么是单线程的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-那么js为什么是单线程的"}},[t._v("#")]),t._v(" 1.1 那么JS为什么是单线程的？")]),t._v(" "),n("p",[t._v("JavaScript从设计之初就是单线程的。"),n("strong",[t._v("那么JS为什么是单线程的？它的设计理念在哪？")])]),t._v(" "),n("blockquote",[n("p",[t._v("我们都知道，JS设计之初就是为了在浏览器上进行DOM的操作。如果JS是多线程的，会造成什么结果？\n设想一下，JS进程1对某DOM进行修改操作，JS进程2删除该DOM，此时就会造成冲突（死锁）。")])]),t._v(" "),n("h2",{attrs:{id:"二、javascript实现的异步"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、javascript实现的异步"}},[t._v("#")]),t._v(" 二、JavaScript实现的异步")]),t._v(" "),n("h3",{attrs:{id:"_2-1-什么是异步"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-什么是异步"}},[t._v("#")]),t._v(" 2.1 什么是异步？")]),t._v(" "),n("blockquote",[n("p",[t._v("首先我们得知道计算机中的同步和异步和现实事件中的同步和异步的意思差别很大。计算机中"),n("strong",[t._v("同步")]),t._v("表示程序需要遵循先后执行的顺序，前面的程序走完后面的才能继续执行("),n("strong",[t._v("先...再...")]),t._v(")。"),n("strong",[t._v("异步")]),t._v("指的是后面的程序不需要等前面的程序执行完毕，可以执行（"),n("strong",[t._v("一边...一边...")]),t._v("）。括号中的应该能很形象的说明这两种情况。")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(518),alt:"Image"}})]),t._v(" "),n("h3",{attrs:{id:"_2-2-为什么要异步"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-为什么要异步"}},[t._v("#")]),t._v(" 2.2 为什么要异步？")]),t._v(" "),n("blockquote",[n("p",[t._v("如果JS中不存在异步,程序自上而下执行,如果某段程序响应时间过长，就会造成后面的程序持续等待，造成不好的用户体验。下面的代码是"),n("strong",[t._v("同步代码")])])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"程序1执行"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("sync")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" time "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" time "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'程序2卡了5秒'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sync")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'程序3执行'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("blockquote",[n("p",[t._v("运行之后我们发现"),n("strong",[t._v("程序1")]),t._v("执行之后，"),n("strong",[t._v("程序2")]),t._v("执行了5秒打印，然后"),n("strong",[t._v("程序3")]),t._v("才打印，程序3被阻塞，这会给用户造成不好的体验。")])]),t._v(" "),n("blockquote",[n("p",[t._v("接下来用"),n("code",[t._v("setTimeout")]),t._v("模拟异步，但是**setTimeout不是异步！！！**🔑"),n("a",{attrs:{href:"https://www.jianshu.com/p/2ce41d806866",target:"_blank",rel:"noopener noreferrer"}},[t._v("setTimeout真的是异步的吗????"),n("OutboundLink")],1)])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"程序1执行"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'程序2卡了5秒'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'程序3执行'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("此时输出")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("程序1执行\n程序3执行\n程序2卡了5秒\n")])])]),n("blockquote",[n("p",[t._v("从结果我们可以看出，此时程序3没有因为程序2造成阻塞的情况。")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(519),alt:"同步任务和异步任务的执行顺序"}})]),t._v(" "),n("h3",{attrs:{id:"_2-3-单线程的javascript如何实现异步"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-单线程的javascript如何实现异步"}},[t._v("#")]),t._v(" 2.3 单线程的JavaScript如何实现异步？")]),t._v(" "),n("blockquote",[n("p",[t._v("js是单线程的语言，所以它本身不可能是异步的，但js依赖浏览器或Node环境，通过**事件驱动（event-loop）**使得js具备了异步的属性")])]),t._v(" "),n("h2",{attrs:{id:"三、微任务和宏任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、微任务和宏任务"}},[t._v("#")]),t._v(" 三、微任务和宏任务")]),t._v(" "),n("h3",{attrs:{id:"_3-0-引言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-引言"}},[t._v("#")]),t._v(" 3.0 引言")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'定时器开始啦'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'执行 new Promise'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'执行then函数啦'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'代码执行结束'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n")])])]),n("p",[t._v("用二中的流程来分析这段代码的执行顺序。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'定时器开始啦'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n异步任务，进入event Table\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'执行 new Promise'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n同步任务，直接执行 "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"执行 new Promise"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'执行then函数啦'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n异步任务，进入event Table\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'代码执行结束'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n同步任务，直接执行 "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"代码执行结束"')]),t._v("\n\n")])])]),n("p",[t._v("同步任务部分，我们很清晰的知道")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("执行 new Promise\n代码执行结束\n")])])]),n("p",[t._v("异步任务部分的顺序怎么确定呢")]),t._v(" "),n("p",[n("code",[t._v("执行 new Promise")]),t._v(" 和 "),n("code",[t._v("定时器开始啦")]),t._v(" 究竟谁先谁后。")]),t._v(" "),n("p",[t._v("接下来就引入了宏任务和微任务概念")]),t._v(" "),n("h3",{attrs:{id:"_3-1-宏任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-宏任务"}},[t._v("#")]),t._v(" 3.1 宏任务")]),t._v(" "),n("p",[t._v("✒常见的宏任务")]),t._v(" "),n("blockquote",[n("p",[t._v("script全部代码、setTimeout、setInterval、setImmediate（浏览器暂时不支持，只有IE10支持，具体可见"),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setImmediate",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),n("OutboundLink")],1),t._v("）、I/O、UI Rendering")])]),t._v(" "),n("h3",{attrs:{id:"_3-2-微任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-微任务"}},[t._v("#")]),t._v(" 3.2 微任务")]),t._v(" "),n("p",[t._v("✒常见的微任务")]),t._v(" "),n("blockquote",[n("p",[t._v("Process.nextTick（Node独有）、new Promise().then()、Object.observe(废弃)、MutationObserver（具体使用方式查看"),n("a",{attrs:{href:"http://javascript.ruanyifeng.com/dom/mutationobserver.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),n("OutboundLink")],1),t._v("）")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(520),alt:"image-20220112103529281"}})]),t._v(" "),n("h3",{attrs:{id:"_3-3-结果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-结果"}},[t._v("#")]),t._v(" 3.3 结果")]),t._v(" "),n("p",[t._v("综合3.1和3.2")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" 整个代码script是宏任务，从上到下执行\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" setTimeout是宏任务"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 放入宏任务队列\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("是同步任务，放入执行栈执行 "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"执行 new Promise"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 是微任务，放到微任务队列\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.")]),t._v(" console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'代码执行结束'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 是同步任务，放入执行栈执行 "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"代码执行结束"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.")]),t._v(" 此时执行栈为空，查看是否有微任务，执行微任务队列\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.")]),t._v(" 执行 console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'执行then函数啦'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.")]),t._v(" 微任务队列为空， 进行下一轮宏任务setTimeout\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.")]),t._v(" 执行 console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'定时器开始啦'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.")]),t._v(" 执行栈为空，微任务、宏任务队列均为空，结束\n")])])]),n("p",[t._v("所以顺序为")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("执行 new Promise\n代码执行结束\n执行then函数啦\n定时器开始啦\n")])])]),n("p",[t._v("在谷歌浏览器控制台执行试试")]),t._v(" "),n("p",[n("img",{attrs:{src:a(521),alt:"image-20220112110637599"}})]),t._v(" "),n("h3",{attrs:{id:"四、更多例题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、更多例题"}},[t._v("#")]),t._v(" 四、更多例题")]),t._v(" "),n("h4",{attrs:{id:"_4-1-题目1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-题目1"}},[t._v("#")]),t._v(" 4.1 题目1")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" promise "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\npromise"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),n("h4",{attrs:{id:"_4-2-题目2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-题目2"}},[t._v("#")]),t._v(" 4.2 题目2")]),t._v(" "),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://segmentfault.com/a/1190000012806637",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解JS引擎的执行机制"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://juejin.cn/post/6844903764202094606",target:"_blank",rel:"noopener noreferrer"}},[t._v("一次弄懂Event Loop"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);