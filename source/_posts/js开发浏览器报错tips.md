---
title: js开发浏览器报错tips
date: 2018-03-22 10:34:09
tags: JavaScript
---

陆续收集一些不常见的浏览器报错


Q: "Uncaught TypeError: Illegal invocation" in Chrome
A: 自定义对象里面写入了window原生的方法, 会导致报这个错误. 原生方法执行要求的上下文环境是`window`.
```javascript
// before:
var myObj = {
  myAlert : alert //copying native alert to an object
}

// after:
var myObj = {
  myAlert : alert.bind(window) //copying native alert to an object
}

```

<br/>