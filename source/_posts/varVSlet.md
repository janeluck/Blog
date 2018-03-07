---
title: varVSlet
date: 2018-03-07 14:53:33
tags: JavaScript
---

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