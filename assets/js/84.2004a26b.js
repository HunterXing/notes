(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{735:function(t,e,a){"use strict";a.r(e);var r=a(4),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[t._v("React知识点整理")])]),t._v(" "),a("h2",{attrs:{id:"一、react是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、react是什么"}},[t._v("#")]),t._v(" "),a("strong",[t._v("一、react是什么")])]),t._v(" "),a("p",[t._v("使用一个框架之前我们应该明白它是什么。就像react来说我们知道它是一种js框架，我们可以使用这个框架来编写 html 页面。而且我们在使用的时候可以抛弃 html 而用纯 js 来编写。")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"二、为什么使用react"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、为什么使用react"}},[t._v("#")]),t._v(" "),a("strong",[t._v("二、为什么使用react")])]),t._v(" "),a("p",[t._v("使用react的好处：")]),t._v(" "),a("p",[a("strong",[t._v("1、便于代码复用")])]),t._v(" "),a("p",[t._v("我们在平常的开发中编写DOM的时候，如果出现有多个页面拥有相同的模块，那么我们就需要把相关模块在各个 "),a("code",[t._v("html")]),t._v("文件全部复制一遍，然而当我们使用react的时候只需要把这些模块写成组件，通过调用就可以了。")]),t._v(" "),a("p",[a("strong",[t._v("2、提高渲染效率")])]),t._v(" "),a("p",[t._v("开发中碰到修改和更新信息是比较常发生的，所以这时候如果我们重新渲染页面，通过使用 html 来编写的话则会花很多的精力和时间，然而如果我们使用React的话，我们只需要通过封装就可以解决这个问题了。")]),t._v(" "),a("p",[a("strong",[t._v("3、容易管理")])]),t._v(" "),a("p",[t._v("在开发的时候往往网站会变得更加复杂，所以这个时候页面的管理就变得尤其的重要，我们还是需要花费很对的精力和时间在代码和架构上面，如果使用react的话就不需要了。")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"三、react不能帮我们做什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、react不能帮我们做什么"}},[t._v("#")]),t._v(" "),a("strong",[t._v("三、react不能帮我们做什么")])]),t._v(" "),a("p",[t._v("我们之所以使用react这个框架的目的就是让我们可以更好的管理和复制使用我们的代码，如果自己要编写react组件的话，那么对于开发中的基本知识我们还是要了解的，而且当我们在使用react 的时候要遵循下面两点：")]),t._v(" "),a("p",[t._v("1、我们自己编写的页面虽然不使用html 但是需要类似jsx语法，因为react知识提高我们的复用性而已。")]),t._v(" "),a("p",[t._v("2、虽然我们都是亲手写css样式，但是我们可以借助一些开源的相关组件。emotion、styled-components")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"四、深入了解react究竟做了什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、深入了解react究竟做了什么"}},[t._v("#")]),t._v(" "),a("strong",[t._v("四、深入了解react究竟做了什么")])]),t._v(" "),a("p",[t._v("对于有前端基础的小伙伴们来说，绝对我们看到的web页面的效果的因素有两个，html和css；只要页面发生了改变，那么这也就以为这我们的html 和css发生了改变。")]),t._v(" "),a("p",[a("strong",[t._v("1、原生开发如何更新页面")])]),t._v(" "),a("p",[t._v("对于这个的话当 js 以流浪器作为宿主环境的时候，我们的浏览器中可以为"),a("code",[t._v("js")]),t._v("提供了"),a("code",[t._v("DOM")]),t._v("作为"),a("code",[t._v("js")]),t._v("操作文档的唯一接口，当我们没有使用任何框架时又要更新页面的时候，我们这时候就必须要亲自调用DOM提供的API来更改文档，这样就会迫使我们的效率极其低下；")]),t._v(" "),a("p",[a("strong",[t._v("2、react如何更新页面")])]),t._v(" "),a("p",[t._v("我们都知道在react中每个组件都有一个"),a("code",[t._v("state")]),t._v("对象，这些"),a("code",[t._v("state")]),t._v("对象中它存储了当前组件需要的所有可能发生变化的数据，而且渲染的html页面和state中的数据是一种 一 一 对应的关系。只要我们通过"),a("code",[t._v("setState")]),t._v("方法改变了"),a("code",[t._v("state")]),t._v("中的数据，那么"),a("code",[t._v("html")]),t._v("也 就跟着变化了，无需我们亲自动手修改"),a("code",[t._v("dom")]),t._v("；在使用"),a("code",[t._v("react")]),t._v("时，只要我们根据state构建了组件，接下来只需要 考虑如何更新"),a("code",[t._v("state")]),t._v("即可。")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"五、react的基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、react的基本用法"}},[t._v("#")]),t._v(" "),a("strong",[t._v("五、react的基本用法")])]),t._v(" "),a("p",[t._v("我们都知道在react的组件中分为：变化的和不变的两种信息，而且在组件编写时我们还需要花精力去分析，哪些属性在组件的生命周期中是有可能发生变化的，哪些是不变的。那么对于不变的部分我们就可以写死在html中，针对变化的部分其信息来源 有两种 ，如下所示：")]),t._v(" "),a("p",[t._v("1、组件的状态")]),t._v(" "),a("p",[t._v("当我们在开发中有使用到react组件时则需要为我们的组件编写state属性，我们编写的目的是用来存储了当前组件需要的数据；因为当我们需要改变状态时，我们只需要调用当前组件的"),a("code",[t._v("this.setState（）")]),t._v("方法即可，浏览器会自动重新渲染当前组件；下面是我们的例子代码：")]),t._v(" "),a("div",{staticClass:"language-react extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class Square extends React.Component {\n    constructor() {\n        super();\n        this.state = {\n            value: null,\n        };\n    }\n\n    render() {\n        return (\n            <button className=\"square\" onClick={() => this.setState({value: 'X'})}>\n            　　{this.state.value}\n            </button>\n        );\n    }\n}\n")])])]),a("p",[t._v("2、父组件的状态")]),t._v(" "),a("p",[t._v("在我们开发或者在学习时遇到需要同时获取多个子组件数据或者两个组件之间需要相互通讯的时候，我们就可以把子组件的 state 数据提升至其共同的父组件当中保存。这样子之后父组件就可以通过 props 将状态数据传递到子组件当中。下面是有关的例子代码：")]),t._v(" "),a("div",{staticClass:"language-react extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//父组件\nrenderSquare(i) {\n    return (\n    <Square\n        value={this.state.squares[i]}\n        onClick={() => this.handleClick(i)}\n    />\n    );\n}\n\n//子组件\nclass Square extends React.Component {\n    render() {\n        return (\n        <button className="square" onClick={() =>this.props.onClick()}>\n            {this.props.value}\n        </button>\n        );\n    }\n}\n')])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"六、redux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、redux"}},[t._v("#")]),t._v(" "),a("strong",[t._v("六、redux")])]),t._v(" "),a("p",[t._v("1、为什么要使用redux")]),t._v(" "),a("p",[t._v("我们在开发中一般对于小型的项目我们是不使用redux的，因为我们都知道 redux 是一个用来管理前端数据的架构，只有在应用程序非常复杂，数据来源复杂，交互频繁的情况下， 应用redux。")]),t._v(" "),a("p",[t._v("2、redux设计的三大原则")]),t._v(" "),a("p",[t._v("(1)、单一数据")]),t._v(" "),a("p",[t._v("那么什么是单一数据呢？一般是指我们所使用有关于state的程序中，这个程序中所有的state都存储在一个单一的数据store内部，这就好比是一个巨大的对象树一样。")]),t._v(" "),a("p",[t._v("(2)、state只读")]),t._v(" "),a("p",[t._v("对于state来说是只有读取的能力，能改变state的方式就是通过action来修改")]),t._v(" "),a("p",[t._v("(3)、使用纯函数执行修改")]),t._v(" "),a("p",[t._v("那么我们在开发中怎么使用纯函数执行修改呢？一般我们是在需要对state进行描述的的时候编写 reducers。然而对于readucer的话则是一个纯函数，那么对于这个函数的接口的话，就是我们的state和action这两个属性了，而且在函数中我们只需要根据action 返回相对应的state就可以了，而且一定要有返回值才可以。")]),t._v(" "),a("p",[t._v("3、主要Api")]),t._v(" "),a("p",[t._v("下面列举的一些Api是我们比较熟悉的：")]),t._v(" "),a("p",[a("code",[t._v("store=createStare（reducer）")]),t._v("—— 创建store 。")]),t._v(" "),a("p",[a("code",[t._v("state=store.getState（） store.dispatch（action）")]),t._v("—— 触发action，这是改变state的唯一接口 。")]),t._v(" "),a("p",[a("code",[t._v("store.subscribe（listener）")]),t._v("—— 一旦State发生变化，就自动执行这个函数，只要把 View 的更新函数（对于 React 项目，就是组件的render方法或setState方法）放入listen，就会实现 View 的自动渲染。")]),t._v(" "),a("p",[t._v("4、reducer的拆分")]),t._v(" "),a("p",[t._v("在Redux 中我们是可以找到"),a("code",[t._v("combineReducers")]),t._v("的这个方法，因为这个方法是用于对"),a("code",[t._v("Reducer")]),t._v("进行拆分的。我们只需要定义各个子小"),a("code",[t._v("Reducer")]),t._v("函数，然后用这个方法，就可以将它们合成一个大的 "),a("code",[t._v("Reducer")]),t._v("了。")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"七、react-redux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、react-redux"}},[t._v("#")]),t._v(" "),a("strong",[t._v("七、react-redux")])]),t._v(" "),a("p",[t._v("在react中为了方便，在react中封装了个react-redux；然而对于react-redux来说则是分为两大类将所有组件分别是UI类和容器类，而且在UI组件中所有的数据通过props来进行获取；容器组件负责数据和逻辑。我们可以使用装饰器模式把纯组件转化 为容器组价，这里主要用到了下面这三个函数：")]),t._v(" "),a("p",[a("strong",[t._v("1、 mapStateToProps（state,ownprops）")])]),t._v(" "),a("p",[t._v("建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系。")]),t._v(" "),a("p",[a("strong",[t._v("2、mapStateToProps（dispatch，ownProps）")])]),t._v(" "),a("p",[t._v("用来建立store.dispatch方法到props对象的映射。")]),t._v(" "),a("p",[a("strong",[t._v("3、connect")])]),t._v(" "),a("p",[t._v("React-Redux 提供connect方法，用于从 UI 组件生成容器组件。它需要mapStateToProps和mapStateToProps作为参数。例子代码如下所示：")]),t._v(" "),a("div",{staticClass:"language-react extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const VisibleTodoList = connect(\n    mapStateToProps,\n    mapDispatchToProps\n)（TodoList）\n")])])]),a("p",[a("strong",[a("code",[t._v("<Provider>")]),t._v(" 组件")])]),t._v(" "),a("p",[t._v("在开发中当我们发现组件的嵌套比较深的时候，我们如果通过内层组件要获得state就会非常麻烦，这个时候我们就需要借助props属性的方法一层一层传递。Proveder组件解决了这个问题，把Provider组件放在最外层，只要在Proveder上传入store，这样所有子组件都可以拿到state了，代码如下：")]),t._v(" "),a("div",{staticClass:"language-react extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("render（\n  <Provider store={store}>\n  \t<App />\n  </Provider>,\n  document.getElementById('root')\n）\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"八、react-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#八、react-router"}},[t._v("#")]),t._v(" "),a("strong",[t._v("八、react-router")])]),t._v(" "),a("p",[t._v("在开发中我们需要使用的页面不会是只有一个的，而且在多页面中我们还需要通过代码让用户可以实现在各个页面直接进行切换，那么对于进行各个页面切换的时候就需要 "),a("code",[t._v("react-route")]),t._v("这个架构了，因为在这个架构中就有提供了在多个页面和组件之间进行切换的机制。")]),t._v(" "),a("p",[t._v("那么对于"),a("code",[t._v("react-router")]),t._v("架构的常用组件有下面这几个：")]),t._v(" "),a("p",[a("code",[t._v("<BrowserRouter> <Link>")]),t._v("为你的应用提供声明式的、可访问的导航链接；属性 to 。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<Route> \n")])])]),a("p",[t._v("最基本的职责是在其 path 属性与某个 "),a("code",[t._v("location")]),t._v("匹配时呈现一些 UI；属性 "),a("code",[t._v("path")]),t._v("， 属性 "),a("code",[t._v("component")]),t._v("，"),a("code",[t._v("exact")]),t._v("完全匹配。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" <Switch>\n")])])]),a("p",[t._v("只渲染命中的第一个路由 "),a("code",[t._v("<Redirect>")]),t._v(" 直接渲染路由 ，属性 to 。")]),t._v(" "),a("hr")])}),[],!1,null,null,null);e.default=s.exports}}]);