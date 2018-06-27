---
layout: '[post]'
title: http长链接与短连接
tags:
  - http
  - tcp
date: 2018-06-28 06:58:34
---






### http1.1
 + 长连接

    http头部字段使用`connection:   keep-alive`, 后续同源复用tcp的链接通道。 一个tcp上的多次http请求, 只在第一次发起的时候三次握手.


 - 短连接

    每次都要tcp三次握手


综上, http长短连接其实就是tcp的长短连接. 补充到http的持久链接: `websocket`协议。 websocket本质上是一个基于tcp的协议，websocket不是http无状态协议，只是借助http协议升级客户端服务端的双工通信。协议名为"ws"，地址的写法：`ws://**`。

### 参考链接
- [HTTP长连接说明](https://cloud.tencent.com/document/product/214/4149)
- [WebSocket原理说明](https://cloud.tencent.com/document/product/214/4150?fromSource=gwzcw.93403.93403.93403)