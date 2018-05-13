---
title: 我所理解的http
tags:
---


HTTP是基于TCP/IP协议


+ 四层
    + 应用层  http
    + 传输层  tcp/ip传输协议
    + 网络层  ip地址, mac地址
    + 数据链路层


例子:    两个计算机之间需要通信时, 假设A向B发送数据包:
> 在一个局域网内, 直接找到?不在的话, 通过路由不断转发至最终找到

+ tcp的三次握手
    1. 发送端先发送带有`SYN`标志的数据包给对方, 通信开始
    2. 接收端传回带有`SYN/ACK`标志的数据包, 以示接收
    3. 发送端再发送带有`ACK`标志的数据包, 以示结束

为什么是三次?
可确保双方都知道已连接的状态





uri统一资源标识符， url是统一资源定位标识
url是uri实现的一种方式

url的组成格式

|协议|://|登录信息(optional)|服务器地址|端口号|带层次的文件路径|查询字符串|片段标识符|
|-|-|
|http|://|user:passwd@|www.example.com|80|/dir/index.html|?uid=1|#ch1|

https
http
ftp



http通信的两端 必定一个为客户端, 一个为服务端


告知浏览器意图的http方法

+ get
+ post
+ put
+ delete
+ head
+ trace
+ connect(proxy)


http1加入了keep-alive, 只要任意一端没有提出明确的断开连接，就保持tcp的连接状态

管线化 不用等当前请求返回可以直接发送下一个连接

？？？ 同时发起请求的域名和数量限制



http是无状态协议, 引进了cookie做状态管理
服务端发送http响应头部`Set-Cookie`字段写入cookie控制客户端的状态, 下次请求时客户端会自动带上cookie

服务器端发现客户端发送过来的 Cookie 后，会去检查究竟是从哪一个客户端发来的连接请求，然后对比服务器上的记录，最后得到之前的状态信息

http报文由head和body(optional)组成, 两者以回车符+换行符分割(cr+lf)



报文和实体

报文由八位组字节流组成

实体为实际有效数据

压缩

分块传输编码


图片是以二进制ascii码存储