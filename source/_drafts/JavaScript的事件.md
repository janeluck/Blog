---
title: JavaScript的事件
tags:
---


捕获和冒泡

从document开始逐级传播, 最后再冒泡到window上


注册时一般使用冒泡机制(原生el.addEventListener(type, callback, useCapture)的第三个参数默认为`false`), 在冒泡阶段触发绑定事件



阻止捕获或者冒泡
可以调用`stopPropagation`




阻止浏览器的一些默认行为
可以调用`preventDefault`