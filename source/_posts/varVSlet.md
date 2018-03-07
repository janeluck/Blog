---
title: varVSlet
date: 2018-03-07 14:53:33
tags: JavaScript
---

##### 作用域

语句块


##### 声明语句

通过var声明的变量可以重复声明, let只能声明一次

```javascript
for (var i = 0; i++; i < 10) {
  setTimeout(function () {
    console.log(i)
  }, i * 100)

}


for (var i = 0; i++; i < 10) {
  (function (i) {
    setTimeout(function () {
      console.log(i)
    }, i * 100)
  })(i)
}


for (let i = 0; i++; i < 10) {
  setTimeout(function () {
    console.log(i)
  }, i * 100)

}

```