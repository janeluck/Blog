---
title: 我所理解的react
tags:
 - JavaScript
 - React
---


+ react getChildContext???


事件模拟系统


react component
生命周期
diff算法



element
rendering
patching
component






react element




react setState是异步的
连续点击按钮时的问题



diff type
- remove
- move
- modify props

vdom diff算法标记处dirty组件, 放入updates里

传入parentNode  node  type

统一执行




合成事件系统
注册 储存 执行

合成事件和原生事件混合使用

顺序(冒泡机制和捕获机制都是):
1. 先执行原生绑定事件
2. 再执行react合成事件




合成事件用的是`Proxy`


onClickCapture 冒泡阶段执行
onClick 捕获阶段执行



注意事项
在componentDidMount时绑定事件
在componentWillUnmount时解绑事件

总结
合成事件的监听器统一注册在了`document`上, 且仅是冒泡机制
所以

1. 绑定在原生dom上的监听事件会先于react触发, 且`stopPropagation`后, react事件无法再触发

2. react事件的执行顺序是冒泡机制, 如果需要使用捕获机制, 换事件绑定的方法名, 比如`onClick`为`onClickCapture`


猜想原因, 可变参数会导致复杂性



问题

如何做到事务机制
初始化监听scroll?
垃圾回收？
worker线程？



虚拟dom
有效的dom嵌套
validate dom nesting

setState的回调是在dom完全渲染后？？？怎么保证

react是一种批量更新机制
通过事务做到的

脏组件数组根据挂载序列排序，避免父组件已在更新队列的子组件多次更新


detachref
ref
ref的应用原理

写react组件的一些原则

- [react-deep-dive](https://zackargyle.github.io/react-internals-slides/#/0?_k=2v96r2)
- [React源码解析](http://zhenhua-lee.github.io/react/react.html)
- [从react源码看Virtual Dom到真实Dom的渲染过程](https://www.jianshu.com/p/df0b5a009e92)
- [react-inline-function](https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578)
- [setState之后发生了什么](http://undefinedblog.com/what-happened-after-set-state/)
- [react-inline-function](https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578)
- [how-virtual-dom-and-diffing-works-in-react](https://medium.com/@gethylgeorge/how-virtual-dom-and-diffing-works-in-react-6fc805f9f84e)
