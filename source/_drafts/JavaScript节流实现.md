---
title: JavaScript节流实现
tags:
---


debounce


http://www.goyth.com/2018/05/10/debounceAndThrottle/



节流(throttle)与去抖(debounce)

概念


节流 是限制规定短时间内函数执行的频率

去抖/防弹跳 是限定时间内只执行一次

应用场景

节流的应用场景


   拖拽
   即时搜索





去抖的应用场景


   点击按钮发送http请求
   windows   resize
   下拉加载




实现


扩展

    函数在计时阶段开始时执行还是结束时执行




##### 参考链接

- [The Difference Between Throttling and Debouncing](https://css-tricks.com/the-difference-between-throttling-and-debouncing/)
- [Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/)
- [lodash.debounce](https://lodash.com/docs/4.17.10#debounce)
- [lodash.throttle](https://lodash.com/docs/4.17.10#throttle)