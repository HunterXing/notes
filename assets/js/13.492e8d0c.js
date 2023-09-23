(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{612:function(t,e,r){t.exports=r.p+"assets/img/2019-03-06-1.029f591f.png"},613:function(t,e,r){t.exports=r.p+"assets/img/2019-03-06-2.fc5b5cd6.png"},614:function(t,e,r){t.exports=r.p+"assets/img/2019-03-06-3.4941fe9f.gif"},615:function(t,e,r){t.exports=r.p+"assets/img/2019-03-06-4.eb697d96.png"},616:function(t,e,r){t.exports=r.p+"assets/img/2019-03-06-5.b55a48f2.png"},617:function(t,e,r){t.exports=r.p+"assets/img/2019-03-06-6.4996ec91.png"},618:function(t,e,r){t.exports=r.p+"assets/img/2019-03-06-7.a81b6efb.png"},619:function(t,e,r){t.exports=r.p+"assets/img/2019-03-06-8.8e01bb02.png"},620:function(t,e,r){t.exports=r.p+"assets/img/2019-03-06-9.71b35bce.png"},811:function(t,e,r){"use strict";r.r(e);var a=r(4),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("原文："),a("a",{attrs:{href:"https://segmentfault.com/a/1190000018401534",target:"_blank",rel:"noopener noreferrer"}},[t._v("一文读懂 HTTP/2 及 HTTP/3 特性"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("作者：[浪里行舟]")])]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("HTTP/2 相比于 HTTP/1，可以说是大幅度提高了网页的性能，只需要升级到该协议就可以减少很多之前需要做的性能优化工作，当然兼容问题以及如何优雅降级应该是国内还不普遍使用的原因之一。")]),t._v(" "),a("p",[t._v("虽然 HTTP/2 提高了网页的性能，但是并不代表它已经是完美的了，HTTP/3 就是为了解决 HTTP/2 所存在的一些问题而被推出来的。")]),t._v(" "),a("h2",{attrs:{id:"一、http-协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、http-协议"}},[t._v("#")]),t._v(" 一、HTTP 协议")]),t._v(" "),a("p",[t._v("HTTP 协议是 HyperText Transfer Protocol（超文本传输协议）的缩写，它是互联网上应用最为广泛的一种网络协议。所有的 WWW 文件都必须遵守这个标准。伴随着计算机网络和浏览器的诞生，HTTP1.0 也随之而来，处于计算机网络中的应用层，HTTP 是建立在 TCP 协议之上，所以"),a("strong",[t._v("HTTP 协议的瓶颈及其优化技巧都是基于 TCP 协议本身的特性")]),t._v("，例如 tcp 建立连接的 3 次握手和断开连接的 4 次挥手以及每次建立连接带来的 RTT 延迟时间。")]),t._v(" "),a("h2",{attrs:{id:"二、http-1-x-的缺陷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、http-1-x-的缺陷"}},[t._v("#")]),t._v(" 二、HTTP/1.x 的缺陷")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("连接无法复用")]),t._v("：连接无法复用会导致每次请求都经历三次握手和慢启动。三次握手在高延迟的场景下影响较明显，慢启动则对大量小文件请求影响较大（没有达到最大窗口请求就被终止）。\n"),a("ul",[a("li",[t._v("HTTP/1.0 传输数据时，每次都需要重新建立连接，增加延迟。")]),t._v(" "),a("li",[t._v("HTTP/1.1 虽然加入 keep-alive 可以复用一部分连接，但域名分片等情况下仍然需要建立多个 connection，耗费资源，给服务器带来性能压力。")])])]),t._v(" "),a("li",[a("strong",[t._v("Head-Of-Line Blocking（HOLB）")]),t._v("：导致带宽无法被充分利用，以及后续健康请求被阻塞。"),a("a",{attrs:{href:"http://stackoverflow.com/questions/25221954/spdy-head-of-line-blocking",target:"_blank",rel:"noopener noreferrer"}},[t._v("HOLB"),a("OutboundLink")],1),t._v("是指一系列包（package）因为第一个包被阻塞；当页面中需要请求很多资源的时候，HOLB（队头阻塞）会导致在达到最大请求数量时，剩余的资源需要等待其他资源请求完成后才能发起请求。\n"),a("ul",[a("li",[t._v("HTTP 1.0：下个请求必须在前一个请求返回后才能发出，"),a("code",[t._v("request-response")]),t._v("对按序发生。显然，如果某个请求长时间没有返回，那么接下来的请求就全部阻塞了。")]),t._v(" "),a("li",[t._v("HTTP 1.1：尝试使用 pipeling 来解决，即浏览器可以一次性发出多个请求（同个域名，同一条 TCP 链接）。但 pipeling 要求返回是按序的，那么前一个请求如果很耗时（比如处理大图片），那么后面的请求即使服务器已经处理完，仍会等待前面的请求处理完才开始按序返回。所以，pipeling 只部分解决了 HOLB。")])])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://image.fundebug.com/2019-03-06-1.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:r(612),alt:"img"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("如上图所示，红色圈出来的请求就因域名链接数已超过限制，而被挂起等待了一段时间。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("协议开销大")]),t._v("： HTTP1.x 在使用时，header 里携带的内容过大，在一定程度上增加了传输的成本，并且每次请求 header 基本不怎么变化，尤其在移动端增加用户流量。")]),t._v(" "),a("li",[a("strong",[t._v("安全因素")]),t._v("：HTTP1.x 在传输数据时，所有传输的内容都是明文，客户端和服务器端都无法验证对方的身份，这在一定程度上无法保证数据的安全性")])]),t._v(" "),a("h2",{attrs:{id:"三、spdy-协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、spdy-协议"}},[t._v("#")]),t._v(" 三、SPDY 协议")]),t._v(" "),a("p",[t._v("因为 HTTP/1.x 的问题，我们会引入雪碧图、将小图内联、使用多个域名等等的方式来提高性能。不过这些优化都绕开了协议，直到 2009 年，谷歌公开了自行研发的 SPDY 协议，主要解决 HTTP/1.1 效率不高的问题。谷歌推出 SPDY，才算是正式改造 HTTP 协议本身。降低延迟，压缩 header 等等，SPDY 的实践证明了这些优化的效果，也最终带来 HTTP/2 的诞生。")]),t._v(" "),a("p",[t._v("SPDY 协议在 Chrome 浏览器上证明可行以后，就被当作 HTTP/2 的基础，主要特性都在 HTTP/2 之中得到继承。")]),t._v(" "),a("h2",{attrs:{id:"四、http-2-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、http-2-简介"}},[t._v("#")]),t._v(" 四、HTTP/2 简介")]),t._v(" "),a("p",[t._v("2015 年，HTTP/2 发布。HTTP/2 是现行 HTTP 协议（HTTP/1.x）的替代，但它不是重写，HTTP 方法/状态码/语义都与 HTTP/1.x 一样。HTTP/2 基于 SPDY3，专注于"),a("strong",[t._v("性能")]),t._v("，最大的一个目标是在用户和网站间只用一个连接（connection）。")]),t._v(" "),a("p",[t._v("HTTP/2 由两个规范（Specification）组成：")]),t._v(" "),a("ol",[a("li",[t._v("Hypertext Transfer Protocol version 2 - RFC7540")]),t._v(" "),a("li",[t._v("HPACK - Header Compression for HTTP/2 - RFC7541")])]),t._v(" "),a("h2",{attrs:{id:"五、http-2-新特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、http-2-新特性"}},[t._v("#")]),t._v(" 五、HTTP/2 新特性")]),t._v(" "),a("h3",{attrs:{id:"_1-二进制传输"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-二进制传输"}},[t._v("#")]),t._v(" 1. 二进制传输")]),t._v(" "),a("p",[t._v("HTTP/2 采用二进制格式传输数据，而非 HTTP 1.x 的文本格式，二进制协议解析起来更高效。 HTTP / 1 的请求和响应报文，都是由起始行，首部和实体正文（可选）组成，各部分之间以文本换行符分隔。"),a("strong",[t._v("HTTP/2 将请求和响应数据分割为更小的帧，并且它们采用二进制编码")]),t._v("。")]),t._v(" "),a("p",[t._v("接下来我们介绍几个重要的概念：")]),t._v(" "),a("ul",[a("li",[t._v("流：流是连接中的一个虚拟信道，可以承载双向的消息；每个流都有一个唯一的整数标识符（1、2…N）；")]),t._v(" "),a("li",[t._v("消息：是指逻辑上的 HTTP 消息，比如请求、响应等，由一或多个帧组成。")]),t._v(" "),a("li",[t._v("帧：HTTP 2.0 通信的最小单位，每个帧包含帧首部，至少也会标识出当前帧所属的流，承载着特定类型的数据，如 HTTP 首部、负荷，等等")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://image.fundebug.com/2019-03-06-2.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:r(613),alt:"img"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("HTTP/2 中，同域名下所有通信都在单个连接上完成，该连接可以承载任意数量的双向数据流。每个数据流都以消息的形式发送，而消息又由一个或多个帧组成。多个帧之间可以乱序发送，根据帧首部的流标识可以重新组装。")]),t._v(" "),a("h3",{attrs:{id:"_2-多路复用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-多路复用"}},[t._v("#")]),t._v(" 2. 多路复用")]),t._v(" "),a("p",[t._v("在 HTTP/2 中引入了多路复用的技术。多路复用很好的解决了浏览器限制同一个域名下的请求数量的问题，同时也接更容易实现全速传输，毕竟新开一个 TCP 连接都需要慢慢提升传输速度。")]),t._v(" "),a("p",[t._v("大家可以通过 "),a("a",{attrs:{href:"https://http2.akamai.com/demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("该链接"),a("OutboundLink")],1),t._v(" 直观感受下 HTTP/2 比 HTTP/1 到底快了多少。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://image.fundebug.com/2019-03-06-3.gif",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:r(614),alt:"img"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("在 HTTP/2 中，有了二进制分帧之后，HTTP /2 不再依赖 TCP 链接去实现多流并行了，在 HTTP/2 中：")]),t._v(" "),a("ul",[a("li",[t._v("同域名下所有通信都在单个连接上完成。")]),t._v(" "),a("li",[t._v("单个连接可以承载任意数量的双向数据流。")]),t._v(" "),a("li",[t._v("数据流以消息的形式发送，而消息又由一个或多个帧组成，多个帧之间可以乱序发送，因为根据帧首部的流标识可以重新组装。")])]),t._v(" "),a("p",[t._v("这一特性，使性能有了极大提升：")]),t._v(" "),a("ul",[a("li",[t._v("同个域名只需要占用一个 TCP 连接，使用一个连接并行发送多个请求和响应,消除了因多个 TCP 连接而带来的延时和内存消耗。")]),t._v(" "),a("li",[t._v("并行交错地发送多个请求，请求之间互不影响。")]),t._v(" "),a("li",[t._v("并行交错地发送多个响应，响应之间互不干扰。")]),t._v(" "),a("li",[t._v("在 HTTP/2 中，每个请求都可以带一个 31bit 的优先值，0 表示最高优先级， 数值越大优先级越低。有了这个优先值，客户端和服务器就可以在处理不同的流时采取不同的策略，以最优的方式发送流、消息和帧。")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://image.fundebug.com/2019-03-06-4.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:r(615),alt:"img"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("如上图所示，多路复用的技术可以只通过一个 TCP 连接就可以传输所有的请求数据。")]),t._v(" "),a("h3",{attrs:{id:"_3-header-压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-header-压缩"}},[t._v("#")]),t._v(" 3. Header 压缩")]),t._v(" "),a("p",[t._v("在 HTTP/1 中，我们使用文本的形式传输 header，在 header 携带 cookie 的情况下，可能每次都需要重复传输几百到几千的字节。")]),t._v(" "),a("p",[t._v("为了减少这块的资源消耗并提升性能， HTTP/2 对这些首部采取了压缩策略：")]),t._v(" "),a("ul",[a("li",[t._v("HTTP/2 在客户端和服务器端使用“首部表”来跟踪和存储之前发送的键－值对，对于相同的数据，不再通过每次请求和响应发送；")]),t._v(" "),a("li",[t._v("首部表在 HTTP/2 的连接存续期内始终存在，由客户端和服务器共同渐进地更新;")]),t._v(" "),a("li",[t._v("每个新的首部键－值对要么被追加到当前表的末尾，要么替换表中之前的值")])]),t._v(" "),a("p",[t._v("例如下图中的两个请求， 请求一发送了所有的头部字段，第二个请求则只需要发送差异数据，这样可以减少冗余数据，降低开销")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://image.fundebug.com/2019-03-06-5.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:r(616),alt:"img"}}),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"_4-server-push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-server-push"}},[t._v("#")]),t._v(" 4. Server Push")]),t._v(" "),a("p",[t._v("Server Push 即服务端能通过 push 的方式将客户端需要的内容预先推送过去，也叫“cache push”。")]),t._v(" "),a("p",[t._v("可以想象以下情况，某些资源客户端是一定会请求的，这时就可以采取服务端 push 的技术，提前给客户端推送必要的资源，这样就可以相对减少一点延迟时间。当然在浏览器兼容的情况下你也可以使用 prefetch。\n例如服务端可以主动把 JS 和 CSS 文件推送给客户端，而不需要客户端解析 HTML 时再发送这些请求。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://image.fundebug.com/2019-03-06-6.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:r(617),alt:"img"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("服务端可以主动推送，客户端也有权利选择是否接收。如果服务端推送的资源已经被浏览器缓存过，浏览器可以通过发送 RST_STREAM 帧来拒收。主动推送也遵守同源策略，换句话说，服务器不能随便将第三方资源推送给客户端，而必须是经过双方确认才行。")]),t._v(" "),a("h2",{attrs:{id:"六、http-3-新特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、http-3-新特性"}},[t._v("#")]),t._v(" 六、HTTP/3 新特性")]),t._v(" "),a("h3",{attrs:{id:"_1-http-3-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-http-3-简介"}},[t._v("#")]),t._v(" 1. HTTP/3 简介")]),t._v(" "),a("p",[t._v("虽然 HTTP/2 解决了很多之前旧版本的问题，但是它还是存在一个巨大的问题，主要是底层支撑的 TCP 协议造成的。")]),t._v(" "),a("p",[t._v("上文提到 HTTP/2 使用了多路复用，一般来说同一域名下只需要使用一个 TCP 连接。但当这个连接中出现了丢包的情况，那就会导致 HTTP/2 的表现情况反倒不如 HTTP/1 了。")]),t._v(" "),a("p",[t._v("因为在出现丢包的情况下，整个 TCP 都要开始等待重传，也就导致了后面的所有数据都被阻塞了。但是对于 HTTP/1.1 来说，可以开启多个 TCP 连接，出现这种情况反到只会影响其中一个连接，剩余的 TCP 连接还可以正常传输数据。")]),t._v(" "),a("p",[t._v("那么可能就会有人考虑到去修改 TCP 协议，其实这已经是一件不可能完成的任务了。因为 TCP 存在的时间实在太长，已经充斥在各种设备中，并且这个协议是由操作系统实现的，更新起来不大现实。")]),t._v(" "),a("p",[t._v("基于这个原因，"),a("strong",[t._v("Google 就更起炉灶搞了一个基于 UDP 协议的 QUIC 协议，并且使用在了 HTTP/3 上")]),t._v("，HTTP/3 之前名为 HTTP-over-QUIC，从这个名字中我们也可以发现，HTTP/3 最大的改造就是使用了 QUIC。")]),t._v(" "),a("p",[t._v("QUIC 虽然基于 UDP，但是在原本的基础上新增了很多功能，接下来我们重点介绍几个 QUIC 新功能。")]),t._v(" "),a("h3",{attrs:{id:"_2-quic-新功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-quic-新功能"}},[t._v("#")]),t._v(" 2. QUIC 新功能")]),t._v(" "),a("ul",[a("li",[t._v("0-RTT")])]),t._v(" "),a("p",[t._v("通过使用类似 TCP 快速打开的技术，缓存当前会话的上下文，在下次恢复会话的时候，只需要将之前的缓存传递给服务端验证通过就可以进行传输了。"),a("strong",[t._v("0RTT 建连可以说是 QUIC 相比 HTTP2 最大的性能优势")]),t._v("。那什么是 0RTT 建连呢？")]),t._v(" "),a("p",[t._v("这里面有两层含义:")]),t._v(" "),a("ul",[a("li",[t._v("传输层 0RTT 就能建立连接。")]),t._v(" "),a("li",[t._v("加密层 0RTT 就能建立加密连接。")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://image.fundebug.com/2019-03-06-7.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:r(618),alt:"img"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("上图左边是 HTTPS 的一次完全握手的建连过程，需要 3 个 RTT。就算是会话复用也需要至少 2 个 RTT。")]),t._v(" "),a("p",[t._v("而 QUIC 呢？由于建立在 UDP 的基础上，同时又实现了 0RTT 的安全握手，所以在大部分情况下，只需要 0 个 RTT 就能实现数据发送，在实现前向加密的基础上，并且 0RTT 的成功率相比 TLS 的会话记录单要高很多。")]),t._v(" "),a("ul",[a("li",[t._v("多路复用")])]),t._v(" "),a("p",[t._v("虽然 HTTP/2 支持了多路复用，但是 TCP 协议终究是没有这个功能的。QUIC 原生就实现了这个功能，并且传输的单个数据流可以保证有序交付且不会影响其他的数据流，这样的技术就解决了之前 TCP 存在的问题。")]),t._v(" "),a("p",[t._v("同 HTTP2.0 一样，同一条 QUIC 连接上可以创建多个 stream，来发送多个 HTTP 请求，但是，QUIC 是基于 UDP 的，一个连接上的多个 stream 之间没有依赖。比如下图中 stream2 丢了一个 UDP 包，不会影响后面跟着 Stream3 和 Stream4，不存在 TCP 队头阻塞。虽然 stream2 的那个包需要重新传，但是 stream3、stream4 的包无需等待，就可以发给用户。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://image.fundebug.com/2019-03-06-8.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:r(619),alt:"img"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("另外 QUIC 在移动端的表现也会比 TCP 好。因为 TCP 是基于 IP 和端口去识别连接的，这种方式在多变的移动端网络环境下是很脆弱的。但是 QUIC 是通过 ID 的方式去识别一个连接，不管你网络环境如何变化，只要 ID 不变，就能迅速重连上。")]),t._v(" "),a("ul",[a("li",[t._v("加密认证的报文")])]),t._v(" "),a("p",[t._v("TCP 协议头部没有经过任何加密和认证，所以在传输过程中很容易被中间网络设备篡改，注入和窃听。比如修改序列号、滑动窗口。这些行为有可能是出于性能优化，也有可能是主动攻击。")]),t._v(" "),a("p",[t._v("但是 QUIC 的 packet 可以说是武装到了牙齿。除了个别报文比如 PUBLIC_RESET 和 CHLO，所有报文头部都是经过认证的，报文 Body 都是经过加密的。")]),t._v(" "),a("p",[t._v("这样只要对 QUIC 报文任何修改，接收端都能够及时发现，有效地降低了安全风险。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://image.fundebug.com/2019-03-06-9.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:r(620),alt:"img"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("如上图所示，红色部分是 Stream Frame 的报文头部，有认证。绿色部分是报文内容，全部经过加密。")]),t._v(" "),a("ul",[a("li",[t._v("向前纠错机制")])]),t._v(" "),a("p",[t._v("QUIC 协议有一个非常独特的特性，称为向前纠错 (Forward Error Correction，FEC)，每个数据包除了它本身的内容之外，还包括了部分其他数据包的数据，因此少量的丢包可以通过其他包的冗余数据直接组装而无需重传。向前纠错牺牲了每个数据包可以发送数据的上限，但是减少了因为丢包导致的数据重传，因为数据重传将会消耗更多的时间(包括确认数据包丢失、请求重传、等待新数据包等步骤的时间消耗)")]),t._v(" "),a("p",[t._v("假如说这次我要发送三个包，那么协议会算出这三个包的异或值并单独发出一个校验包，也就是总共发出了四个包。当出现其中的非校验包丢包的情况时，可以通过另外三个包计算出丢失的数据包的内容。"),a("strong",[t._v("当然这种技术只能使用在丢失一个包的情况下，如果出现丢失多个包就不能使用纠错机制了，只能使用重传的方式了")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"七、总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、总结"}},[t._v("#")]),t._v(" 七、总结")]),t._v(" "),a("ul",[a("li",[t._v("HTTP/1.x 有连接无法复用、队头阻塞、协议开销大和安全因素等多个缺陷")]),t._v(" "),a("li",[t._v("HTTP/2 通过多路复用、二进制流、Header 压缩等等技术，极大地提高了性能，但是还是存在着问题的")]),t._v(" "),a("li",[t._v("QUIC 基于 UDP 实现，是 HTTP/3 中的底层支撑协议，该协议基于 UDP，又取了 TCP 中的精华，实现了即快又可靠的协议")])]),t._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://ye11ow.gitbooks.io/http2-explained/content/part2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP2 讲解"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/zqjflash/http2-protocol",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP 2.0 协议详解"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5bdc72b151882516f039fce3",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端面试之道"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/26559480",target:"_blank",rel:"noopener noreferrer"}},[t._v("一文读懂 HTTP/2 特性"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/32553477",target:"_blank",rel:"noopener noreferrer"}},[t._v("科普：QUIC 协议原理分析"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/creeperyang/blog/issues/23",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP2 简介和基于 HTTP2 的 Web 优化"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.alloyteam.com/2016/07/httphttp2-0spdyhttps-reading-this-is-enough/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTPHTTP2.0，SPDYHTTPS 你应该知道的一些事"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=_.exports}}]);