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




内容协商

服务器端以浏览器设置的字段发起的驱动

客户端又JavaScript驱动


状态码是http请求返回的服务端处理状态



1xx:  接受的请求正在处理
2xx:  请求正常处理完毕
3xx:  请求需要进一步处理
4xx:  客户端无法处理请求
5xx:  服务端处理请求出错



url地址末尾的`/`

原始默认行为
服务器收到不带`/`的请求时会先当成文件名去寻找, 没有的话再当成文件目录返回index.html



服务端


+ 代理
    + 转发 缓存等
+ 网关
    + 网关的工作机制和代理很像，而且能使通信线路上的服务器提供非http协议服务。通过加密，可以提高安全性。
+ 隧道
    + 隧道可按要求建立起一条与其他服务器的通信线路，届时使用 SSL 等加密手段进行通信。隧道的目的是确保客户端能与服务器进行安全的通信。


  http head四种字段

  + 通用首部字段
  + 请求首部字段
  + 响应首部字段
  + 实体首部字段





HTTP 首部字段将定义成缓存代理和非缓存代理的行为

  + 端到端首部: 分在此类别中的首部会转发给请求 / 响应对应的最终接收目标，且必须保存在由缓存生成的响应中，另外规定它必须被转发。

  + 逐眺首部: 分在此类别中的首部只对单次转发有效，会因通过缓存或代理而不再转发。HTTP/1.1 和之后版本中，如果要使用 hop-by-hop 首部，需提供 Connection 首部字段
    - Connection
    - Keep-Alive
    - Proxy-Authenticate
    - Proxy-Authorization
    - Trailer
    - TE
    - Transfer-Encoding
    - Upgrade



通用首部字段
    + Cache-Control
        + no-cache: 强制向源服务器再次验证

        + no-store: 不缓存请求或响应的任何内容

        + s-maxage
        + max-age=604800（单位：秒）
        + ...

    + Pragma
    + connection


        + 控制不再转发给代理的首部字段
        + 管理持久连接


    + Date

    + Via



请求首部字段


    + Accept: type/subtype
    + Accept-Charset
    + Accept-Encoding
    + Accept-Language
    + Authorizatio
    + Expect
    + From
    + Host
    + If-Match: 形如 If-xxx 这种样式的请求首部字段，都可称为条件请求。服务器接收到附带条件的请求后，只有判断指定条件为真时，才会执行请求




客户端  <=> 缓存服务器  <=>  源服务器


https http + ssl



共享密匙
公私钥

CA是对公钥的认证