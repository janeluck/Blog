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


- [react-deep-dive](https://zackargyle.github.io/react-internals-slides/#/0?_k=2v96r2)
- [react-inline-function](https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578)