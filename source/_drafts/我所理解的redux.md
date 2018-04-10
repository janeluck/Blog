---
title: 我所理解的redux
tags: JavaScript
---

1. combineReducers???
2. 异步处理中间件是如何实现的, dispatch可以是actions, for example, functions or Promises等等
3. middleware链式调用的实现
4. 变所有的异步为同步???
5. 发布订阅系统

缺点
1. 繁琐
2. localStorage, cookie这种本地数据如何接入redux

优点
1. 便于线上错误收集，只需要发送 states, actions 等快照即可
2. 时光旅行 Undo／Redo



### 参考链接
- [Immutable Data Structures and JavaScript](https://jlongster.com/Using-Immutable-Data-Structures-in-JavaScript)

