---
title: nodejs-console-color
date: 2018-02-19 00:17:10
tags: NodeJS
---


NodeJS在终端中输出信息的颜色控制，可使用`chalk`模块

```js
console.log('\x1b[36m%s\x1b[0m', 'your string!')
```

`\x1b[36m`改变输出的字体颜色, `s%`格式化占位符, `\x1b[0m`是输出原本的颜色

[chalk](https://github.com/chalk/chalk)
[颜色说明](https://dev.to/moriczgergo/nodejs-console-colors-101)